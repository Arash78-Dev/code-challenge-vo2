import { FC } from "react";
import logo from "@/../public/assets/logo.png";
import Image from "next/image";
import {
  getPrimarySideBarTitles,
  getSecondarySideBarTitles,
} from "@/layout/Sidebar/data";
import Divider from "@/components/Divider";
import { useTranslations } from "next-intl";
import SidebarButton from "@/layout/Sidebar/SidebarButton";
import { useRouter } from "next/router";

const Sidebar: FC = () => {
  const { pathname } = useRouter();

  const t = useTranslations("sidebar");

  const primarySideBarTitles = getPrimarySideBarTitles(t);
  const secondarySideBarTitles = getSecondarySideBarTitles(t);

  return (
    <div className="flex flex-col  px-4">
      <div className="h-24 flex justify-center items-center">
        <Image width={56} height={24} src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-stretch gap-1">
          {primarySideBarTitles.map((value, index) => {
            return (
              <SidebarButton
                isSelected={pathname === value.route}
                route={value.route}
                Icon={value.icon}
                key={index}
              >
                {value.title}
              </SidebarButton>
            );
          })}
        </div>
        <Divider />
        <div className="flex flex-col items-stretch gap-1">
          {secondarySideBarTitles.map((value, index) => {
            return (
              <SidebarButton
                isSelected={pathname === value.route}
                route={value.route}
                Icon={value.icon}
                key={index}
              >
                {value.title}
              </SidebarButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
