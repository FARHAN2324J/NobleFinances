import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cursorRef.current) return;

    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="flair rounded-full z-50 lg:block hidden"
    />
  );
};
