[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![Nodejs Badge](https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)](#)
[![Mui Badge](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)
[![Mongo DB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Chart Js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](#)
[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](#)



<br/>
Also used <strong> Moment.js, react-countup</strong> libraries.
<br>
The App is hosted on Heroku, please allow some time to load application for the first time. 
<a href="https://guarded-savannah-03210.herokuapp.com"/>See Demo</a>

<h2>What is this App for..</h2>
Some of the warehouses hire other logistic companies to distribute the stock. To speed up deliveries it is beneficial to request trailers as soon as the warehouse received the order. However, it is very difficult to predict the number of trailers before the warehouse order has been fully picked and the number of pallets available. There is always a risk to request too many or not enough trailers to distribute in full. Export Planning Tool is a MERN stack Application designed to simplify the process of estimating the required number of trailers at the time warehouse just received the order. All estimates are based on the average of the five previous weeks, or specific days of the week. With the app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.  <a href="https://guarded-savannah-03210.herokuapp.com"/>See Demo</a> 


## How to run the app
1. Either fork or download the app and open the folder in the cli.
2. Install all dependencies using the "npm i" command.
3. Create an account in MongoDB Atlas.
4. Add ".env" file width two variables:  "Mongo_Atlas_Password" = your password, and "Mongo_login" = your login.
5. Start back end using the "npm start" command.
6. Open second terminal
7. Go to "Client" folder using "cd client" install dependencies using "npm i" command.
8. Start App using "npm start" command.
9. Your local server will be running on port 3001 and front end on 3000.

## User Stories
- User can <strong>INPUT</strong> number of cases has been ordered on particular day for each product category.
- User can <strong>RETRIEVE </strong> number of cases has been ordered on particular day for each product category.
- User can <strong>see total number of cases/pallets/trailers for all product categories of the day or week. </strong>
- User can <strong> AMEND </strong> number of cases has been ordered on particular day for each product category.
- User can <strong> see EXPECTED VALUE / NUMBER OF TRAILERS </strong> on particular day for each product category, based on average of 5 previous weeks.
- User can <strong> see expected number of pallets / trailers based on actual number of cases </strong> once known from received order.
- User can <strong> compare EXPECTED vs ACTUAL values</strong> of each product category for any week day <strong> on Bar-chart</strong> 
- User can <strong> See cases / pallets / trailers of the last 5 weeks of the same weekday on Line-chart</strong>
- User can <strong> See total cases/pallets/trailers for each day of selected week on Line-chart</strong>


## Screenshot
![image](https://user-images.githubusercontent.com/61385379/213078370-f39f027b-a2dd-4dd1-a6d3-16cb4d0186b3.png)

  
