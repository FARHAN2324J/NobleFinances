import plan from "../../assets/images/plan.webp";
import SplitText from "../common/SplitText/SplitText";
import Btn from "../ui/Btn";
import HoverBtn from "../ui/HoverBtn";

const Plan = () => {
  return (
    <>
      <section className="flex sm:flex-row flex-col-reverse pt-30 px-6 items-stretch gap-5">
        <article className="bg-[var(--Background3)] p-14 rounded-[20px] flex flex-col gap-6 items-start">
          <span className="text-[var(--on-accent1)] lg:text-[40px] md:text-[34px] text-[28px]">
            A custom built plan for you
          </span>
          <p className="text-[var(--on-accent1)] text-balance">
            At Noble Finances, we believe that tax filing should be seamless,
            accurate, and stress-free. Our approach is centered on three key
            pillars: simplicity, accuracy, and security.
          </p>
          <HoverBtn className="rounded-[50px] bg-[var(--Background4)] p-3 hover:bg-[var(--Background1)]">
            <span>Learn More</span>
          </HoverBtn>
        </article>
        <div
          className="w-full min-h-[300px] sm:min-h-auto bg-cover bg-center rounded-[20px]"
          style={{ backgroundImage: `url(${plan})` }}
        />
      </section>
      <section className="flex flex-col justify-center items-center gap-12 py-45 px-5">
        <SplitText
          text="We believe that tax filing should be seamless, accurate, and
          stress-free. Get started with Noble Finance today!"
          className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-3xl text-center text-wrap"
          as="h5"
          animation="lineAnimate"
        />
        <Btn className="px-8 py-6">
          <span>Connect with our experts</span>
        </Btn>
      </section>
    </>
  );
};

export default Plan;
