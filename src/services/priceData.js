import axios from "axios";

export const getPriceData = async () => {
  try {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};
