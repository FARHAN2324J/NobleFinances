import { createElement, useRef } from "react";
import type { SplitTextProps } from "./types";
import { useSplitText } from "../../../hooks/useSplitText";

const SplitText = ({
  children,
  text,
  delay = 0,
  animation = "charAnimate",
  as: Tag = "p",
  className = "",
}: SplitTextProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const content = text || (typeof children === "string" ? children : "");
  useSplitText({
    ref: textRef,
    text: content,
    delay,
    animation,
  });

  return createElement(
    Tag,
    {
      ref: textRef,
      className: `split-text-heading ${className}`,
    },
    children || text
  );
};

export default SplitText;
