import axios from "axios";

export const getGraphData = async () => {
  try {
    const url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};
