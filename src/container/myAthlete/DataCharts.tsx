import DropDown from "@/components/DropDown";
import { useGetChartData, useGetEvents } from "@/service/api";
import { chartData, eventData, eventsDropDownList2 } from "@/service/mockData";
import {
  GetChartsDataResponse,
  GetEventsResponse,
} from "@/service/responseTypes";
import { FC, useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";

const DataCharts: FC = () => {
  const [competition, setCompetition] = useState<number>();

  const { data } = useGetChartData();
  const { data: eventsDatas } = useGetEvents();
  const realchartData: GetChartsDataResponse = chartData;
  const realEventsData: GetEventsResponse = eventData;

  useEffect(() => {
    setCompetition(realEventsData.data[0].id);
  }, [realEventsData.data]);

  return (
    <div className="w-[70%] h-64 relative bg-gray-100">
      {realEventsData && (
        <div
          style={{ direction: "ltr" }}
          className="absolute left-0 top-0  p-3 flex gap-1 z-[1000]"
        >
          <div className="text-5xl text-gray-500">{4}</div>

          <div className="flex flex-col gap-0">
            <div className="text-md text-gray-500">weeks until</div>
            <DropDown
              onDropDownSelect={(value) => setCompetition(value as number)}
              size="sm"
              className="p-0  gap-0"
              value={competition ?? 0}
              options={eventsDropDownList2(realEventsData.data)}
            />
          </div>
        </div>
      )}

      {!realchartData ? (
        <div className="h-full flex justify-center items-center">
          there is no data
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={realchartData.data}>
            <Line
              type="basis"
              dataKey="ctl"
              stroke="#005695"
              strokeWidth={1}
              dot={false}
              activeDot={{ r: 4 }}
            />

            <YAxis
              dataKey="ctl"
              domain={["dataMin", "dataMax + 10"]}
              tick={{ display: "none" }} // Hide the X axis
              display="none"
            />

            <Tooltip
              content={(payload) => {

                return (
                  <div className="p-2 bg-white shadow-lg z-[1001]" dir="ltr">
                    <div className="flex flex-col">
                      <div className="flex gap-3 text-gray-500">
                        <div className="text-[14px] font-bold">Date:</div>

                        <div className="text-[14px]">
                          {new Date(
                            payload.payload?.[0]?.payload?.workoutDay
                          ).toLocaleDateString("en")}
                        </div>
                      </div>

                      <div className="flex gap-3 text-[#3d3d3d]">
                        <div className="text-[14px] font-bold text-gray-500">
                          Planned Fitness (Ctl):
                        </div>

                        <div className="text-[14px]">
                          {Math.ceil(payload.payload?.[0]?.payload?.ctl)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
              position={{ y: 20 }}
              cursor={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DataCharts;
