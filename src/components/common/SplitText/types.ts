import type { RefObject } from "react";
export type AnimationType =
  | "wordAnimate"
  | "lineAnimate"
  | "charAnimate"
  | "btnAnimate"
  | "ImgAnimate";

export type AllowedTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "a"
  | "div";

export interface SplitTextProps {
  text?: string;
  children?: React.ReactNode;
  delay?: number;
  animation?: AnimationType;
  as?: AllowedTags;
  className?: string;
}

export interface UseSplitTextParams {
  ref: RefObject<HTMLElement | null>;
  text: string;
  delay?: number;
  animation?: AnimationType;
}
