const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weekSchema = new mongoose.Schema({ 
	weekNumber: "String",
      year: String,
      days: [{type: Schema.Types.ObjectId, ref: "SingleDay"}],
});


module.exports = mongoose.model("SingleWeek", weekSchema);