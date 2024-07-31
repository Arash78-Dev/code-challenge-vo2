import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vo2.ir/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetcher = (url: string) =>
  axiosInstance(url).then((res) => res.data());
