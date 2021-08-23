if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const dbPassword = process.env.Mongo_Atlas_Password;
const mongoLogin = process.env.Mongo_login;
const PORT = process.env.PORT || 3001;
const path = require("path");

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const apiRoutes = require("./routes/api.js");

app.use(cors());

app.use(express.json({extended: true})); 

mongoose.connect("mongodb+srv://"+ mongoLogin +":" + dbPassword+ "@calendar.uwuzq.mongodb.net/<Test>?retryWrites=true&w=majority", {
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

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res)=> {
       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	})
}


app.listen(PORT, () => {
   console.log(`Back end server started at port: ${PORT}`)
})
