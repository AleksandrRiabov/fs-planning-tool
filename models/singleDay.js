const  mongoose = require("mongoose");


const singleDaySchema = new mongoose.Schema({ 
  date: { type: String, unique: true, required: true }, 
  day: { type: String, required: true }, 
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