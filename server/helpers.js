const moment = require("moment");
const SingleDay = require("./models/singleDay.js");

//===
 //getting correct year of the week number.
 //If get it standart way then may have problems with the last week of the year

const getCorrectYear = ( weekDate ) => {
   return weekDate.clone()
                  .subtract(1, "week")
                  .clone()
                  .add(1, "day") 
                  .startOf("week")
                  .format("YYYY");
}


//===
// Function takes two arguments, first one tells how many weeks in the past to look for the same day of the week (example: Last 5 "Thursday's");
//Second is initial start date
const getPrevDatesArray = (numOfWeeks = 5, startDate) => {
	const startingDate = moment(startDate, "DD MM YYYY");

	const prevDates = []
     for (let i = 1; i < (numOfWeeks +1); i++){
		const date = startingDate.clone().subtract(i, "week").format("DD MM YYYY");
		  prevDates.push(date);
	  }
	return prevDates;
}

//===

//Goes through all date received and calculates average coeficient and cases for each product individually 
const getPrevDatesCoeficients = async(dates) => {
	const foundDays = await SingleDay.find({date: dates});
	if (foundDays){
		const coeficients = {totalCoefs : {}}
		const cases = {averageCases: {}}

		foundDays.forEach((day, index) => {
			day.products.forEach(product => {
			 //===get average coeficients	
				if (!coeficients[product.name] && coeficients[product.name] !== 0){
					coeficients[product.name] = [];
				}
				const coef = product.pallets ? (+product.pallets / +product.cases): 0;
				//exludes zero's
				if (coef) {
					coeficients[product.name].push(coef);
				}	
				
				if (!cases[product.name] && cases[product.name] !== 0){
					cases[product.name] = [];
				}	
				const productCases = product.cases ? +product.cases : 0;

				//exludes zero's
				if (productCases) {
				   cases[product.name].push(productCases);
				}

				//if/when all coeficients added, calculate average coeficient and pallets
				if (index === foundDays.length -1 && (coeficients[product.name].length)){
					const sumOfCoefcients = coeficients[product.name].reduce((total, dayCoeficient) => total + dayCoeficient);				 
					coeficients.totalCoefs[product.name] = sumOfCoefcients / coeficients[product.name].length;

					const sumOfCases = cases[product.name].reduce((total, dayCases) => total + +dayCases);
					cases.averageCases[product.name] = sumOfCases / cases[product.name].length;
			  }
			})
		});
		return {coeficients: coeficients.totalCoefs, cases: cases.averageCases};
	}
}
module.exports ={ getPrevDatesCoeficients, getPrevDatesArray, getCorrectYear };
      

