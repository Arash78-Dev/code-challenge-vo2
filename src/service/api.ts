import { useAppSwr } from "@/service/useAppSwr";

export const useGetEvents = () => {
  return useAppSwr("/getEvents");
};

export const useGetChartData = () => {
  return useAppSwr("/getChartsData");
};
