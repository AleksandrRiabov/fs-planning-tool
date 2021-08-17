const dayData = {
   date: "28 07 2021", 
   products: [
   {
     name: "chill",
     cases: "45",
     pallets: "40",
     category: 1,
     predictedCases: 600,
     cof: 0.0071,
   },
   {
     name: "produce",
     cases: "0",
     pallets: "0",
     category: 1,
     predictedCases: 848,
     cof: 0.02,
   },
   {
     name: "bread",
     cases: "0",
     pallets: "0",
     category: 1,
     predictedCases: 545,
     cof: 0.02,
   },
   {
     name: "ambient",
     cases: "0",
     pallets: "0",
     category: 1,
     predictedCases: 4545,
     cof: 0.006,
   },
   {
     name: "frozen",
     cases: "0",
     pallets: "0",
     category: 1,
     predictedCases: 121,
     cof: 0.025,
   },
   {
     name: "bunzl",
     cases: "0",
     pallets: "0",
     category: 1,
     predictedCases: 85,
     cof: 0.05,
   },
   {
     name: "extra",
     cases: "45",
     pallets: "1",
     category: 1,
     predictedCases: 100,
     cof: 0.009,
   },
 ]};


 const weekData = [
	{weekNumber: 30, year: 2021, days: [
		{day: "monday", date: "04 08 2021", cases: 3333, pallets: 100, trailers: 4},
		{day: "tuesday", date: "05 08 2021", cases: 4545, pallets: 150, trailers: 6},
		{day: "wednesday", date: "22 02 2021", cases: 4150, pallets: 130, trailers: 5},
		{day: "thursday", date: "02 08 2021", cases: 4510, pallets: 110, trailers: 5},
		{day: "friday", date: "31.08.2021", cases: 2980, pallets: 105, trailers: 4},
		{day: "saturday", date: "01 08 2021", cases: 4545, pallets: 166, trailers: 7},
		{day: "sunday", date: "03 08 2021", cases: 1700, pallets: 74, trailers: 3},
	]},
	{weekNumber: 31, year: 2021, days: [
		{day: "monday", date: "16 07 2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "tuesday", date: "04 08 2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "wednesday", date: "05 08 2021", cases: 0, pallets: 100, trailers: 5},
		{day: "thursday", date: "06 08 2021", cases: 0, pallets: 100, trailers: 5},
		{day: "friday", date: "07 08 2021", cases: 4000, pallets: 100, trailers: 5},
		{day: "saturday", date: "08 08 2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "sunday", date: "09 08 2021", cases: 4545, pallets: 100, trailers: 5},
	]},
]

 module.exports = {dayData, weekData};