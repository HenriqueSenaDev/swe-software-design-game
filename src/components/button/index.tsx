import { ComponentProps, FC, ReactNode } from "react"

export type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={`w-full bg-primary text-white py-2 px-5 rounded-lg font-[Montserrat] font-bold text-sm hover:opacity-90 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary outline-none lg:text-2xl lg:h-14 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}