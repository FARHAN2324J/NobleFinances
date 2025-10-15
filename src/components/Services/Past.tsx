import SplitText from "../common/SplitText/SplitText";
import Img from "../../assets/images/calculator.webp";

const Past = () => {
  return (
    <section className="flex sm:flex-row flex-col-reverse items-center justify-around py-20 md:px-10 px-6 gap-8">
      <div className="flex flex-col gap-8 items-center sm:pt-0 pt-5">
        <SplitText
          text="Say goodbye to taxes of the past"
          as="h4"
          className="lg:text-6xl md:text-5xl text-[32px] text-[var(--Paragraph)] text-pretty text-center "
          animation="wordAnimate"
        />
        <SplitText animation="btnAnimate" className="mt-10">
          <button className="px-[30px] py-6 bg-[var(--Background3)] rounded-[100px]  hover:bg-[var(--Background1)] hover:text-[var(--Paragraph)]  cursor-pointer duration-500 text-[var(--on-accent1)] text-[15px]">
            Connect with our experts
          </button>
        </SplitText>
      </div>
      <img
        src={Img}
        alt="calculator"
        width={600}
        height={600}
        className="lg:w-[600px] md:w-[350px] w-[300px]"
      />
    </section>
  );
};

export default Past;