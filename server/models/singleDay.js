const  mongoose = require("mongoose");


const singleDaySchema = new mongoose.Schema({ 
  date: String, 
  day: String,
  products: [ 
    {
      name: String,
      cases: String,
      pallets: String,
      category: String,
      predictedCases: String,
      cof: Number
  }
  ]
});


module.exports = mongoose.model("SingleDay", singleDaySchema);