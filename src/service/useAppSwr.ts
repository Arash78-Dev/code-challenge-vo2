import { fetcher } from "@/service/axiosInstance";
import useSWR from "swr";

export const useAppSwr = (url: string) => useSWR(url, fetcher);
