import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { UseSplitTextParams } from "../components/common/SplitText/types";

gsap.registerPlugin(_SplitText, ScrollTrigger);

type GSAPAnimationTarget = gsap.TweenTarget;

type AnimationPreset = (
  targets: GSAPAnimationTarget,
  delay: number
) => gsap.core.Tween;

const animationPresets: Record<string, AnimationPreset> = {
  wordAnimate: (targets: GSAPAnimationTarget, delay: number) =>
    gsap.from(targets, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back",
      stagger: 0.15,
      delay,
      force3D: true,
    }),

  lineAnimate: (targets: GSAPAnimationTarget, delay: number) =>
    gsap.from(targets, {
     duration: 0.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      delay,
      force3D: true,
    }),

  charAnimate: (targets: GSAPAnimationTarget, delay: number) =>
    gsap.from(targets, {
      duration: 0.2,
      opacity: 0,
      stagger: 0.02,
      ease: "back.out(1.5)",
      delay,
      force3D: true,
    }),
  btnAnimate: (targets: GSAPAnimationTarget, delay: number) =>
    gsap.from(targets, {
      duration: 0.3,
      opacity: 0,
      scale: 0.5,
      stagger: {
        each: 0.4,
        from: "start",
      },
      ease: "ease",
      delay,
      force3D: true,
    }),
  ImgAnimate: (targets: GSAPAnimationTarget, delay: number) =>
    gsap.from(targets, {
      duration: 0.3,
      y: 50,
      opacity: 0,
      ease: "back",
      delay,
      force3D: true,
    }),
};

export const useSplitText = ({
  ref,
  text,
  delay = 0,
  animation = "charAnimate",
}: UseSplitTextParams) => {
  useGSAP(
    () => {
      if (!ref.current) return;

      const split = _SplitText.create(ref.current, {
        type: "chars,words,lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        autoSplit: true,
        aria: "none",
        onSplit: (self) => {
          let targets;
          switch (animation) {
            case "wordAnimate":
              targets = self.words;
              break;
            case "lineAnimate":
              targets = self.lines;
              break;
            case "btnAnimate":
              targets = self.lines;
              break;
            case "ImgAnimate":
              targets = self.lines;
              break;
            case "charAnimate":
            default:
              targets = self.chars;
          }

          if (!targets || targets.length === 0) {
            console.warn("No targets found for animation:", animation);
            if (split) split.revert();
            return;
          }

          const animationFn = animationPresets[animation];

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "bottom 20%",
              once: true,
            },
          });

          tl.add(animationFn(targets, delay));
          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            split.revert();
          };
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === ref.current) {
            trigger.kill();
          }
        });
      };
    },
    { dependencies: [text, delay, animation], revertOnUpdate: true, scope: ref }
  );
};
