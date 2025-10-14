import Hour from "../assets/images/hour.webp";
import SplitText from "../components/common/SplitText/SplitText";
import MainLayout from "../components/layout/MainLayout";

const Appointment = () => {
  return (
    <MainLayout>
      <section className="bg-[var(--Background6)] md:px-10 px-4 sm:py-20 py-10 flex sm:flex-row flex-col items-center justify-evenly gap-10">
        <SplitText animation="ImgAnimate" delay={0.3}>
          <img
            src={Hour}
            alt="hour"
            width={300}
            height={300}
            className="lg:w-[500px] md:w-[260px] w-[350px]"
          />
        </SplitText>
        <div className="flex flex-col gap-4 items-start sm:pt-0 pt-10">
          <SplitText
            className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-[32px]"
            animation="wordAnimate"
            as="h1"
          >
            Book an <br /> appointment now
          </SplitText>
          <SplitText
            className="text-[var(--Paragraph)]"
            text="Serving individuals and small businesses since 1987"
          />
          <SplitText animation="btnAnimate">
            <button className="text-[var(--on-accent1)] font-medium p-3 text-[12px] duration-500 hover:bg-[var(--on-accent1)] hover:text-[var(--Paragraph)] cursor-pointer mt-5 bg-[var(--Paragraph)] rounded-[100px]">
              Contact Us
            </button>
          </SplitText>
        </div>
      </section>
    </MainLayout>
  );
};

export default Appointment;
