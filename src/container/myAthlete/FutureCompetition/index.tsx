import Divider from "@/components/Divider";
import Competition from "@/container/myAthlete/FutureCompetition/Competition";
import { useGetEvents } from "@/service/api";
import { eventData } from "@/service/mockData";
import { GetEventsResponse } from "@/service/responseTypes";
import { FC } from "react";

const FutureCompetition: FC = () => {
  const { data, error } = useGetEvents();

  const events: GetEventsResponse = eventData;

  return (
    <div className="flex flex-col gap-5">
      <div className={`text-[#4d4d4d}] text-[14px]`}>مسابقات آينده</div>

      <div className="grid grid-cols-2 gap-x-8">
        {!events ? (
          <div className="flex flex-col justify-center items-center">
            اندکی صبر کنید...........
          </div>
        ) : events.data.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            مسابقه ای موجود نیست.
          </div>
        ) : (
          events.data.map((value) => {
            return (
              <div key={value.atpId} className="flex flex-col col-span-1 ">
                <Competition data={value} />
                <Divider />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FutureCompetition;
