import SplitText from "../common/SplitText/SplitText";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.set(panels.slice(1), {
        y: "100%",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(panels[1], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      })
        .to(
          panels[2],
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          ">"
        )
        .to(
          panels[0],
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          ">"
        )
        .to(
          panels[3],
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          ">"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      number: "01",
      content:
        "In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence.",
    },
    {
      id: 2,
      number: "02",
      content:
        "That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership.",
    },
    {
      id: 3,
      number: "03",
      content:
        "In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being.",
    },
  ];

  return (
    <section className="text-center flex flex-col items-center sm:pt-30 pt-5">
      <SplitText
        text="Philosophy"
        as="span"
        className="text-[var(--Paragraph)] text-[12px] font-medium"
      />
      <SplitText
        text="We believe:"
        className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-[32px] pt-6"
        as="h3"
      />

      <div
        ref={containerRef}
        className="relative overflow-hidden h-[90vh] w-full"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="panel"
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            <article className="rounded-[20px] bg-[var(--accent1)] lg:px-24 md:px-10 px-6 py-14 flex flex-col items-center w-[90%] max-w-[800px]">
              <span className="text-[var(--Paragraph)] font-medium text-[15px]">
                {c.number}
              </span>
              <p className="text-[var(--Paragraph)] lg:text-3xl md:text-[26px] text-[22px] text-pretty pt-8">
                {c.content}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
