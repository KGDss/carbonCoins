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

export type SideBarCardProps = {
  image: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

// Define the types for TypeScript
interface Detail {
  topic: string;
  storageUnit: string;
  ef: number;
  unit: string;
}

interface HotelCF {
  topic: string;
  details: Detail[];
}

export type HotelCFComponentProps = {
  data: HotelCF[];
};
