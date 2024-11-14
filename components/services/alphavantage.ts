import axios from "axios";
import { toast } from "sonner";

const ALPHA_URL = process.env.NEXT_PUBLIC_ALPHA_API_URL;
const ALPHA_KEY = process.env.NEXT_PUBLIC_ALPHA_API_URL;

type getTodayDTO = {
  todayPrice: number | null;
  changeInPercent: number | null;
  timeSeries: {} | null;
};

export const alphaVantageService = {
  getToday: async (): Promise<getTodayDTO> => {
    try {
      const response = await axios.get(
        `${ALPHA_URL}function=DIGITAL_CURRENCY_DAILY&symbol=BCH&market=USD&apikey=${ALPHA_KEY}`
      );
      console.log(response);

      const timeSeries = response.data["Time Series (Digital Currency Daily)"];
      const firstDate = Object.keys(timeSeries)[0];
      const firstEntry = timeSeries[firstDate];

      const secondDate = Object.keys(timeSeries)[1];
      const secondEntry = timeSeries[secondDate];

      const changeInPercent =
        ((firstEntry["4. close"] - secondEntry["4. close"]) /
          firstEntry["4. close"]) *
        100;

      return {
        todayPrice: firstEntry["4. close"],
        changeInPercent,
        timeSeries,
      };
    } catch (error: any) {
      // toast.error(error.response?.data?.message || "Some");
      return {
        todayPrice: null,
        changeInPercent: null,
        timeSeries: null,
      };
    }
  },
};
