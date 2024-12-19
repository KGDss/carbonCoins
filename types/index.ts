import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  height?: number;
  width?: number;
};

export type CardProps = {
  image: string;
  link: string;
};

export type SideBarCardProps = {
  image: string;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
};

type Detail = {
  topic: string;
  storageUnit: string;
  ef: number;
  unit: string;
};

type HotelFootprint = {
  topic: string;
  details: Detail[];
};

export type HotelFootprintComponentProps = {
  data: HotelFootprint[];
};
