const SingleDay = require("../models/singleDay.js");
const SingleWeek = require("../models/singleWeek.js");

const moment = require("moment");

const existingProducts = require("../products.js");

const { getPrevDatesCoeficients, getCorrectYear }= require("../helpers.js");
const singleDay = require("../models/singleDay.js");

//============SINGLE DAY DATA==================
exports.get_single_day_data = async (req, res) => {
   const { date } = req.params;
  try{
   const foundDay = await SingleDay.findOne({ date });
    
   if (foundDay){
      const prevDates = getPrevDates(date);
      const {coeficients, cases} = await getPrevDatesCoeficients(prevDates);
      const prodsWithCoefsAndAvrgs = addCoefsAndAvrgs(foundDay, coeficients, cases);
      const response = {...foundDay._doc, products: prodsWithCoefsAndAvrgs}; 

      res.json(response);
   }else{
      res.status(404).json({error: true, message: "Data not found.."})
   }
   
  }catch(err){
     res.status(500).json({message: err.message})
  }
};

//Add coeficients and average number of cases for each product, if no data from past add 0
function addCoefsAndAvrgs(foundDay, coeficients, cases){
  return foundDay._doc.products.map(product => {
      if (coeficients[product.name]){
         return {...product._doc, cof: coeficients[product.name], predictedCases: (cases[product.name]).toFixed()}
      } else{
         return {...product._doc, cof: 0, predictedCases: 0}
      }
   })
}
//Gets Array of the dates of the last numOfWeeks weeks from startingDate
function getPrevDates( startingDate, numOfWeeks = 5,){
   const prevDates = [];
      for (let i = 1; i <= numOfWeeks; i++){
         prevDates.push(getPrevWeekDayDate(i, startingDate));
      }
    return prevDates;  
}  

//Gets date of the same weekday num weeks ago from requiredDay..
function  getPrevWeekDayDate(num, requiredDay){
   return moment( requiredDay, "DD MM YYYY").clone().subtract(num, "week").format("DD MM YYYY");
}


//=================SINGLE WEEK DATA============
exports.get_single_week_data = async (req, res) => {
   const { number, year } = req.params;

   const foundWeek = await SingleWeek.findOne({weekNumber: number, year}).populate("days");
   if (foundWeek) {
      const days = generateDaysArray(foundWeek);
      const response = {weekNumber: foundWeek.weekNumber, year: foundWeek.year, days, weekExist: true}
      res.json(response);
   } else {
      res.status(200).json({weekNotExist: true, date: "454545"})
   }  
};


//=========EDIT DAY INFO ===============

exports.edit_day_info = async (req, res) => {
   const {id} = req.params;
   try {
      const foundAndModifiedDay = await SingleDay.findByIdAndUpdate(id, {products: req.body});
      foundAndModifiedDay.save();
      res.status(200).json({message: "Details has been updated"})
   }  catch(e){
      res.status(404).json({error: true, message: "Day does not exist in the DB"})
   }
}


//=========ADD/CREATE NEW WEEK ===========
exports.add_new_week = async (req, res) => {
   const firstDayDate = req.params.startdate;

   try{
      const getDayDate = (numOfTheDay) => {
         return moment( firstDayDate, "DD MM YYYY").clone().add(numOfTheDay, "day").format("DD MM YYYY");
      }
   
      const dOne = await addNewDay(getDayDate(0));
      const dTwo = await addNewDay(getDayDate(1));
      const dThree = await addNewDay(getDayDate(2));
      const dFour = await addNewDay(getDayDate(3));
      const dFive = await addNewDay(getDayDate(4));
      const dSix = await addNewDay(getDayDate(5));
      const dSeven = await addNewDay(getDayDate(6));
   
      res.status(201).json({message: "New Week Has Been Created"});
   } catch(err) {
      console.log(err);
      res.status(500).json({message: err.message});
   }
}


// ============== GET DAY LINECHART DATA ========
//gets single product data
exports.get_day_linechart_data = async(req, res) => {
   const {date, query, weeks} = req.params;
   const prevDates = getPrevDates(date, weeks);
   const foundDays = await singleDay.find({date: prevDates});
   const response = formatData(foundDays, query)

   const sortedByDate = response.sort((prev, next) => {
     return +(prev.date.split(" ").reverse().join("")) - +(next.date.split(" ").reverse().join("")) 
   })

   function formatData(foundDays, query) {
      return foundDays.map(singleDay => {
         const {day, date} = singleDay;
         const {cases, pallets} = singleDay.products.filter(product => product.name === query)[0];
         const trailers = (pallets / 26).toFixed(1)
        return {day, date, cases, pallets, trailers}
      });
   }
   res.json(sortedByDate);
}

//functions

//============ADD/CREATE NEW DAY ROUTE FUNCTIONS ====
async function addNewDay(date){
  
   const newDay = {
      date: date,
      day: moment(date, "DD MM YYYY").format("dddd").toLowerCase(),
      products: existingProducts,
   };

   const createdDay = await SingleDay.create(newDay);
   await pushDayIdToRelevantWeek (date, createdDay._id);
}


async function pushDayIdToRelevantWeek (date, dayId){
   const weekDate = moment(date, "DD MM YYYY");
   const year = getCorrectYear(weekDate);
   const weekNumber = weekDate.clone().format("WW");
   
   const week = await SingleWeek.findOne({weekNumber, year});
   
   if (week){
      week.days.push(dayId);
      week.save();
   } else {
      await SingleWeek.create({weekNumber, year, days: [dayId]});
      console.log("New week has been added ")
   }

}


//========Single Week route functions ===
function generateDaysArray(foundWeek){
   return foundWeek.days.map(singleDay => {
      const {day, date} = singleDay;
      const totals = singleDay.products.reduce((acc, product) => {
        return  {
           cases: acc.cases += +product.cases,
           pallets: acc.pallets += +product.pallets, 
        }
      }, {cases: 0, pallets: 0});

      const trailers = (totals.pallets / 26).toFixed(2);//26 pallets it is one full trailer
       return {day, date, ...totals, trailers}
    });
}