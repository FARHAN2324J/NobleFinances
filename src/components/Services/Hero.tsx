import SplitText from "../common/SplitText/SplitText";
import ImgServices from "../../assets/images/services.webp";
import ImageBreak from "../../assets/images/Image break.webp";
import Btn from "../ui/Btn";

const Hero = () => {
  return (
    <header>
      <div className="flex sm:flex-row flex-col-reverse items-center px-10 justify-center md:py-30 py-15">
        <div className="flex flex-col sm:pt-0 pt-10">
          <SplitText
            text="Your Financial Journey, Clearly Defined"
            className="text-[var(--Paragraph)]  lg:text-[80px] md:text-[58px] text-[40px] tracking-[-0.08em] lg:leading-20 md:leading-15 leading-10  xl:w-180 lg:w-150 "
            as="h1"
            animation="wordAnimate"
          />
          <SplitText
            text="Trusted financial guidance for every stage of life and business since 1987"
            className="text-[var(--Paragraph)] xl:w-auto lg:w-120 md:w-95 mt-4"
            delay={0.3}
          />
          <SplitText animation="btnAnimate" className="mt-10">
            <Btn className="p-3 text-[12px] hover:bg-[var(--Background1)]">
              <span>Connect with our experts</span>
            </Btn>
          </SplitText>
        </div>
        <SplitText animation="ImgAnimate" delay={0.5}>
          <img
            src={ImgServices}
            className="xl:w-[550px] lg:w-[500px] md:w-[350px] w-[300px]"
            alt="services"
            loading="eager"
            width={500}
            height={500}
          />
        </SplitText>
      </div>
      <img
        src={ImageBreak}
        className="w-full"
        alt="ImageBreak"
        width={500}
        height={500}
      />
    </header>
  );
};

export default Hero;
