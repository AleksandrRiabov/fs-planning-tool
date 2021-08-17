import { useState, useEffect } from "react";

const useFetch = (urlParams, weekDate) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({ show: false, message: "" });
   const [data, setData] = useState(null);
   const [weekExist, setWeekExist] = useState(true);
   
   const fetchData = async (url) => {
      setLoading(true);
      try {
         const response = await fetch(url);
         const data = await response.json();
         if (data.error){
            throw new Error(data.message)
         }
         if (data.weekNotExist){
            setWeekExist(false);
         }else {
            setData(data);
            setWeekExist(true);
         }  
         setError({ show: false, message: "" });
      } catch (err) {
         setError({ show: true, message: err.message });
         console.log(err);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchData(urlParams);
   }, [weekDate, urlParams]);

   return { loading, error, data, weekExist};
};

export default useFetch;