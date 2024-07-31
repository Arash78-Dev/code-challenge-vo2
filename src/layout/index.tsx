import Sidebar from "@/layout/Sidebar";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] pt-4 bg-[#FCFCFC] flex gap-6 pe-4">
      <div className="w-[240px] bg-white h-full shadow-md rounded-tl-[24px]">
        <Sidebar />
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
