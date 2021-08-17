if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const dbPassword = process.env.Mongo_Atlas_Password;
const mongoLogin = process.env.Mongo_login;
const PORT = 3001;

const express = require("express");
const app = express();
const cors = require("cors");
const moment = require("moment");
const mongoose = require("mongoose");

const SingleDay = require("./models/singleDay.js");

const existingProducts = require("./products.js");
const apiRoutes = require("./routes/api.js");

app.use(cors());

// console.log(moment(new Date(2011, 0, 1)).format("YYYY MM DD"));

app.use(express.json({extended: true})); 

mongoose.connect("mongodb+srv://"+ mongoLogin +":" + dbPassword+ "@calendar.uwuzq.mongodb.net/<CalendarApp>?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then(() => {
	console.log(" BE CAREFULL: Connected to PRODACTION DB");
}).catch(err => {
	console.log("Something whent wrong!")
    console.log(err.message)
});


// ROUTES 
app.use("/api/", apiRoutes);


app.listen(PORT, () => {
   console.log(`Back end server started at port: ${PORT}`)
})
