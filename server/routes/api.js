const express = require("express");
const router = express.Router();

const {
    get_single_day_data,
     get_single_week_data,
       edit_day_info, 
       add_new_week,
       get_day_linechart_data
      } = require("../controllers/api.js");


// ======= SINGLE DAY DATA =========
router.get("/day/:date", get_single_day_data);

//======= SINGLE WEEK DATA ==========
router.get("/week/:year/:number", get_single_week_data);

//=========EDIT DAY INFO ===============
router.put("/day/:id", edit_day_info);

//=========ADD NEW WEEK ===============
router.get("/add/week/:startdate", add_new_week)

//=========SINGLE DAY LINE CHART DATA ===============
router.get("/day/linechart/:date/:query/:weeks", get_day_linechart_data)

module.exports = router;
