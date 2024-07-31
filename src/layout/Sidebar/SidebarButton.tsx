/* eslint-disable jsx-a11y/role-supports-aria-props */
import { IconProps } from "@/components/Icons";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface Props {
  isSelected: boolean;
  route: string;
  Icon?: FC<IconProps> | undefined;
}

const SidebarButton: FC<PropsWithChildren<Props>> = ({
  children,
  isSelected,
  route,
  Icon,
}) => {
  return (
    <Link href={route}>
      <button
        aria-selected={isSelected}
        className={`p-3 text-[#3d3d3d] font-bold text-[14px] hover:bg-[#FFE5F1] hover:text-[#FF0072] transition-all w-full rounded-[12px] aria-selected:bg-[#FFE5F1] aria-selected:text-[#FF0072]`}
      >
        <div className="flex px-4 gap-4 items-center">
          {Icon && <Icon size={24} />}

          <div>{children}</div>
        </div>
      </button>
    </Link>
  );
};

export default SidebarButton;
