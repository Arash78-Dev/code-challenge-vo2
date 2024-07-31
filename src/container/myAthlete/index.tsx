import AthleteFilters from "@/container/myAthlete/AthleteFilters";
import AthleteHeader from "@/container/myAthlete/AthleteHeader";
import DataCharts from "@/container/myAthlete/DataCharts";
import FutureCompetition from "@/container/myAthlete/FutureCompetition";
import type { NextPage } from "next";

const MyAthlete: NextPage = () => {
  return (
    <div className="flex flex-col gap-16 items-stretch w-[80%]">
      <AthleteHeader />

      <AthleteFilters />
      <DataCharts />

      <FutureCompetition />
    </div>
  );
};

export default MyAthlete;
