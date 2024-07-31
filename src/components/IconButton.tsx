import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

const IconButton: FC<
  PropsWithChildren<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`w-8 h-8 rounded-xl flex justify-center items-center hover:bg-gray-100 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
