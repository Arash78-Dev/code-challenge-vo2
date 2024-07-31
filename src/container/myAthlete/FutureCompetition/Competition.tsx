import { EventResponse } from "@/service/responseTypes";
import { FC } from "react";

interface Props {
  data: EventResponse;
}

const Competition: FC<Props> = ({ data }) => {
  return (
    <div className="px-6 py-4 flex gap-12 items-center">
      <div className={`font-bold text-[16px] text-[#2e2e2e]`}>
        {new Date(data.eventDate).toLocaleDateString("en")}
      </div>

      <div className={`font-bold text-[16px] text-[#4e4e4e]`}>{data.name}</div>
    </div>
  );
};

export default Competition;
