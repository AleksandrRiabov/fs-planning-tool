import { useState, useEffect } from "react";
import { getSingleDayData } from "../../services";

export const useFetchAndModifyData = (date) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: "" });
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const fetchAndModifyData = async (date) => {
      try {
        const fetchedData = await getSingleDayData(date);
        //Count "Predicted" pallets for each product according to coefficient and add's to array of data
        const products = fetchedData.products.map((product) => {
          const cases =
            +product.cases > 0 ? +product.cases : +product.predictedCases;
          const predictedPallets = Math.round(product.cof * cases);
          return { ...product, predictedPallets };
        });
        const names = products.map((product) => product.name);

        setData({ ...fetchedData, products, names });
      } catch (err) {
        console.log("Data Not Fetched");
        setError({ isError: true, message: err.message });
      } finally {
        setLoading(false);
      }
    };

    fetchAndModifyData(date);
  }, [date]);
  return { data, setData, loading, error };
};
