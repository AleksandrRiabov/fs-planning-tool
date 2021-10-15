<h2>EXPORT PLANNING TOOL</h2>
This is a full stack application on:  <strong>React, NodeJs, Express, MongoDB</strong>.
<br/>
Also used <strong> Material Ui, Moment.js, chart.js, react-countup</strong> libraries.
<br>
The App is hosted on Heroku, please allow some time to load application for the first time. 
<a href="https://guarded-savannah-03210.herokuapp.com"/>See Demo</a>

<h2>What is this App for..</h2>
Some of the warehouses hiring other logistic companies to distribute the stock.
To speed up deliveries it is beneficial to request trailers as soon as the warehouse received the order. However,
it is very difficult to predict the number of trailers before the warehouse order has been fully picked and the number of pallets available. 
There is always a risk to request too many or not enough trailers to distribute in full.
Export Planning Tool is a MERN stack Application designed to simplify the process of estimating the required number of trailers at the time warehouse just received the order.
All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, 
and be prepared for the growing demand.<a href="https://guarded-savannah-03210.herokuapp.com"/>See Demo</a> 


##<h2>How to run the app</h2>
1. Either fork or download the app and open the folder in the cli.
2. Install all deppendencies using the "npm i" command.
3. Create an account in MongoDB Atlas.
4. Add ".env" file width two variables:  "Mongo_Atlas_Password" = your password, and "Mongo_login" = your login.
5. Start back end using the "npm start" command.
6. Open second terminal
7. Go to "Client" folder using "cd client" install dependencies using "npm i" command.
8. Start App using "npm start" command.
9. Your local server will be running on port 3001 and front end on 3000.

##<h2>User Stories</h2>
- User can <strong>INPUT</strong> number of cases has been ordered on particular day for each product category.
- User can <strong>RETRIVE </strong> number of cases has been ordered on particular day for each product category.
- User can <strong>see total number of cases/pallets/trailers for all product categories of the day or week. </strong>
- User can <strong> AMEND </strong> number of cases has been ordered on particular day for each product category.
- User can <strong> see EXPECTED VALUE / NUMBER OF TRAILERS </strong> on particular day for each product category, based on average of 5 previous weeks.
- User can <strong> see expected number of pallets / trailers based on actual number of cases </strong> once known from received order.
- User can <strong> compare EXPECTED vs ACTUAL values</strong> of each product category for any week day <strong> on Barchart</strong> 
- User can <strong> See cases / pallets / trailers of the last 5 weeks of the same weekday on Linechart</strong>
- User can <strong> See total cases/pallets/trailers for each day of selected week on Linechart</strong>

##<h2>Features</h2>
  - When "Save" pressed, data get send to backend and then get saved to database. 
  - Every time user select day or week data App will fetch data from backend.


  
