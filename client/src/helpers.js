import moment from "moment";

export const getTrailersFromPallets = (palletsQty = 0) => {
  const trailers = Math.floor(palletsQty / 26);
  const pallets = palletsQty % 26;
  return { trailers, pallets };
};

export const getTotal = (data) => {
  return data.reduce(
    (total, product) => {
      const cases = product.cases ? product.cases : 0;
      const { predictedCases } = product;
      return {
        totalCases: total.totalCases + +cases,
        totalPallets: total.totalPallets + +product.pallets,
        totalPredictedCases: total.totalPredictedCases + +predictedCases,
        totalPredictedPallets:
          total.totalPredictedPallets + +product.predictedPallets,
      };
    },
    {
      totalCases: 0,
      totalPallets: 0,
      totalPredictedCases: 0,
      totalPredictedPallets: 0,
    }
  );
};

export const getAllTotalsAndAverages = (data) => {
  const allProducts = data.filter(
    (product) => product.cases > 0 || product.pallets > 0
  ).length;
  const totals = data.reduce(
    (total, product) => {
      return {
        cases: total.cases + +product.cases,
        pallets: total.pallets + +product.pallets,
        trailers: total.trailers + +product.trailers,
      };
    },
    { cases: 0, pallets: 0, trailers: 0 }
  );

  return {
    ...totals,
    trailers: {
      trailers: Math.floor(totals.trailers),
      pallets: totals.pallets % 26,
    },
    averageCases: (totals.cases / allProducts).toFixed(),
    averagePallets: (totals.pallets / allProducts).toFixed(),
    averageTrailers: (totals.trailers / allProducts).toFixed(),
  };
};

export const formatChartData = (data) => {
  const chartData = {
    labels: [],
    cases: [],
  };

  data.forEach((product) => {
    chartData.labels.push(capitalize(product.name));
    chartData.labels.push("Expected-" + product.name);
    chartData.cases.push(product.cases);
    chartData.cases.push(product.predictedCases);
  });
  return chartData;
};

//getting correct year of the week number, otherwise may have bug with last week of the year
export const getCorrectYear = (date) => {
  return date
    .clone()
    .subtract(1, "week")
    .clone()
    .add(1, "day")
    .startOf("week")
    .format("YYYY");
};

//Gets first day of the week provided (year, number)
export const getFirstDayOfWeek = (year, number) => {
  return moment(`${number} ${year}`, "WW YYYY")
    .startOf("week")
    .add(1, "day")
    .format("DD MM YYYY");
};

// Capitalize
export function capitalize(str, lower = false) {
  return (lower ? str.toLowerCase() : str).replace(
    /(?:^|\s|["'([{])+\S/g,
    (match) => match.toUpperCase()
  );
}