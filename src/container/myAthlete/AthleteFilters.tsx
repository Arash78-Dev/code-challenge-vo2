import DropDown from "@/components/DropDown";
import IconButton from "@/components/IconButton";
import { CalenderIcon, SettingIcon } from "@/components/Icons";
import {
  athleteDropDownList,
  eventData,
  eventsDropDownList,
} from "@/service/mockData";
import { FC, useState } from "react";

const events = eventData;

const AthleteFilters: FC = () => {
  const [athelete, setAthlete] = useState(athleteDropDownList[0].value);
  const [competition, setCompetition] = useState(events.data[0].id);

  return (
    <div className="flex items-center gap-4">
      <DropDown
        options={athleteDropDownList}
        value={athelete}
        onDropDownSelect={(value) => setAthlete(value)}
        size="lg"
        className="w-48 hover:bg-gray-200 transition-all"
      />

      <div className="flex-1" />

      <IconButton>
        <SettingIcon size={20} />
      </IconButton>

      <IconButton>
        <CalenderIcon size={20} />
      </IconButton>

      <DropDown
        options={eventsDropDownList(events.data)}
        value={competition}
        onDropDownSelect={(value) => setCompetition(value as number)}
        size="sm"
        className="w-48 bg-gray-100 hover:bg-gray-200 transition-all"
      />
    </div>
  );
};

export default AthleteFilters;
