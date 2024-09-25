import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  height?: number;
  width?: number;
}

export interface CardProps {
  image: string;
  link: string;
}
