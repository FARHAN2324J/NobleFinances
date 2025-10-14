import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../../assets/images/mm3.webp";
import Img2 from "../../assets/images/mm2.webp";
import Img3 from "../../assets/images/mm.webp";
import SplitText from "../common/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: number;
  number: string;
  title: string;
  content: string;
  img: string;
}

const HowItWorks = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const cards: Card[] = [
    {
      id: 1,
      number: "1",
      title: "Our tax advisors write you a plan",
      content:
        "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
      img: Img1,
    },
    {
      id: 2,
      number: "2",
      title: "We solve the rest",
      content:
        "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
      img: Img2,
    },
    {
      id: 3,
      number: "3",
      title: "Our tax advisors write you a plan",
      content:
        "Maintain organized financial records and provide clear reports to support business growth and financial health.",
      img: Img3,
    },
  ];

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;

    const sliderElement = sliderRef.current;
    const containerElement = containerRef.current;
    const slideElements = sliderElement.querySelectorAll(".slide");

    if (slideElements.length === 0) return;

    const totalSlides = slideElements.length;

    containerElement.style.height = `${(totalSlides - 10) * 100}vh`;

    gsap.set(slideElements, {
      opacity: 0,
      x: 0,
    });
    gsap.set(slideElements[0], { opacity: 1 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: `+=${(totalSlides - 1) * window.innerHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: { min: 0.3, max: 0.5 },
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.round(progress * (totalSlides - 1));
          setCurrentSlide(slideIndex);
        },
        id: "slider-trigger",
      },
    });

    slideElements.forEach((slide, index) => {
      if (index < totalSlides - 1) {
        timeline.to(
          slide,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index
        );

        timeline.to(
          slideElements[index + 1],
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="md:px-20 px-10 pt-30">
      <div className="flex flex-col gap-5">
        <SplitText
          text="How it works"
          as="span"
          className="text-[var(--Paragraph)] text-[15px] font-medium"
        />
        <SplitText
          className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-[32px]"
          text="A simple onboarding"
          as="h2"
          animation="wordAnimate"
        />
        <SplitText
          text="Serving individuals and small businesses since 1987"
          className="text-[var(--Paragraph)]"
          animation="lineAnimate"
        />
      </div>
      <div
        ref={containerRef}
        className="slider-container overflow-hidden relative"
      >
        <div ref={sliderRef} className="slider w-full h-[100vh] relative">
          {cards.map((c) => (
            <div
              key={c.id}
              className="slide absolute top-0 left-0 w-full h-full opacity-0 p-5"
            >
              <article className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 pt-20 lg:pt-30 items-start h-full w-full max-w-[1200px] mx-auto">
                <span className="text-[var(--on-accent2)] lg:text-[192px] md:text-[152px] text-[80px] sm:text-[112px] font-extralight leading-none lg:text-left order-1 text-center ">
                  {c.number}
                </span>
                <div className="flex flex-col gap-1 lg:col-start-2 lg:-ml-10 order-2  h-full">
                  <p className="text-[var(--Paragraph)] lg:text-5xl md:text-[34px] text-[24px] sm:text-[28px] leading-11 text-center lg:text-left">
                    {c.title}
                  </p>
                  <p className="text-[var(--Paragraph)] text-sm md:text-base text-center lg:text-left text-balance py-4 lg:py-0 mt-4 lg:mt-4">
                    {c.content}
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start order-3 lg:order-3">
                  <img
                    src={c.img}
                    alt="pencil"
                    className="lg:w-[350px] md:w-[300px] w-[200px] sm:w-[260px] mx-auto lg:mx-0"
                    width={350}
                    height={350}
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
