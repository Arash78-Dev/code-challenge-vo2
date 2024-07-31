import { ChevronDown } from "@/components/Icons";
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DropDownItem = {
  title: ReactNode;
  value: string | number;
};

type DropDownProps = {
  options: DropDownItem[];
  value: DropDownItem["value"];
  onDropDownSelect: (value: DropDownItem["value"]) => void;
  size: "sm" | "md" | "lg";
};

const DropDown: FC<DivProps & DropDownProps> = ({
  options,
  value,
  onDropDownSelect,
  size,
  ...props
}) => {
  const [isShow, setIsShow] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // If the boxRef contains the clicked target, it's an inside click.
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setIsShow(false);
      // Perform your action here
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div {...props} className={`relative`} ref={boxRef}>
      <button
        onClick={() => setIsShow((prev) => !prev)}
        className={`flex justify-between items-center p-2 rounded-lg ${props.className}`}
      >
        <div
          className={`text-[${
            size === "sm" ? 16 : size === "md" ? 20 : 24
          }px] flex-1 overflow-hidden me-2 text-ellipsis`}
        >
          {options.find((option) => option.value === value)?.title ?? ""}
        </div>

        <div className={`rotate-${isShow ? 180 : 0} transition-all`}>
          <ChevronDown size={size === "sm" ? 16 : size === "md" ? 20 : 24} />
        </div>
      </button>

      {isShow && (
        <div className="absolute top-[140%] w-full bg-white shadow-2xl p-2 rounded-xl">
          {options.map((value) => {
            return (
              <button
                key={value.value}
                className={`p-1 text-[#3d3d3d] font-bold text-[14px] hover:bg-[#FFE5F1] hover:text-[#FF0072] transition-all w-full rounded-[12px] aria-selected:bg-[#FFE5F1] aria-selected:text-[#FF0072]`}
                onClick={() => {
                  onDropDownSelect(value.value);
                  setIsShow(false);
                }}
              >
                {value.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
