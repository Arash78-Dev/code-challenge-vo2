import { useTranslations } from "next-intl";
import { FC } from "react";

const AthleteHeader: FC = () => {
  const t = useTranslations("dashboard");

  return (
    <div className={`text-[24px] font-bold text-[#4d4d4d]`}>
      {t("my_athletes")}
    </div>
  );
};

export default AthleteHeader;
