import { Link } from "react-router";
import Image from "../../assets/images/Image.webp";
import SplitText from "../common/SplitText/SplitText";
import Btn from "../ui/Btn";

const Hero = () => {
  return (
    <header
      role="banner"
      className="sm:pt-25 pt-8 pb-30 xl:px-0 sm:px-10 px-4 bg-[var(--Background1)] rounded-bl-2xl rounded-br-2xl flex sm:flex-row flex-col-reverse items-center justify-around"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-2">
          <SplitText
            text="Financial Clarity You Can Trust"
            className="text-[var(--Paragraph)]  xl:text-[80px] lg:text-[75px] md:text-[50px] text-[40px] tracking-[-0.08em] lg:leading-20 md:leading-15 leading-10 sm:m-0 mt-10 xl:w-180 lg:w-150 w-full"
            as="h1"
            animation="wordAnimate"
          />
          <SplitText
            text="Trusted financial guidance for every stage of life and business
            since 1987"
            className="text-[var(--Paragraph)] xl:w-auto lg:w-120 md:w-95"
            delay={0.3}
          />
        </div>
        <Link to="/booking">
          <SplitText animation="btnAnimate">
            <Btn className="p-3 text-[12px] hover:bg-[var(--on-accent1)]">
              <span>Connect with our experts</span>
            </Btn>
          </SplitText>
        </Link>
      </div>
      <SplitText animation="ImgAnimate" delay={0.5}>
        <img
          src={Image}
          className="xl:w-[450px] lg:w-[350px] md:w-[250px] w-[350px]"
          alt="Financial clarity illustration"
          loading="eager"
          width={300}
          height={300}
        />
      </SplitText>
    </header>
  );
};

export default Hero;
