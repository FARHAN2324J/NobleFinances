import Btn from "../ui/Btn";
import Image1 from "../../assets/images/Image (1).webp";
import Image2 from "../../assets/images/Image (2).webp";
import Image3 from "../../assets/images/Image (3).webp";
import BaseBtn from "../ui/BaseBtn";
import SplitText from "../common/SplitText/SplitText";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Tax Preparation & Filing",
      description:
        "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
      image: Image1,
      alignment: "start",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    },
    {
      id: 2,
      title: "IRS Audit Assistance",
      description:
        "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
      image: Image3,
      alignment: "end",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    },
    {
      id: 3,
      title: "Bookkeeping & Accounting",
      description:
        "Maintain organized financial records and provide clear reports to support business growth and financial health.",
      image: Image2,
      alignment: "start",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    },
  ];

  return (
    <>
      <section className="pt-30">
        <SplitText
          text="Services"
          className="flex flex-col justify-center items-center gap-8 sm:px-0 px-4 text-[var(--Paragraph)]"
          as="h2"
        />
        <div className="flex flex-col gap-6 items-center mx-8 mt-6">
          <SplitText
            text="Let us handle the numbers, so you can handle your success."
            className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-[34px] lg:leading-15 md:leading-11 leading-8 sm:tracking-tighter tracking-[-0.11em] text-center whitespace-pre-line lg:w-200 md:w-160"
            animation="lineAnimate"
          />
          <SplitText
            className="text-[var(--Paragraph)] leading-5 text-center block sm:inline-block"
            text="Serving individuals and small businesses since 1987"
          />
          <SplitText animation="btnAnimate">
            <Btn className="px-3 py-2 mb-30 text-[12px] ">
              <span className="">Schedule a call</span>
            </Btn>
          </SplitText>
        </div>
      </section>

      <section className="flex flex-col gap-10 sm:mx-5 mx-3">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className={`bg-[var(--accent1)] self-auto ${
              service.alignment === "start" ? "sm:self-start" : "sm:self-end"
            } rounded-[20px] flex sm:flex-row flex-col gap-15 items-center lg:p-10 py-3 px-[10px] pb-8`}
          >
            <SplitText animation="ImgAnimate">
              <img
                src={service.image}
                className="xl:w-[390px] lg:w-[290px] md:w-[290px] w-[300px]"
                alt="Financial clarity illustration"
                decoding="async"
                loading="lazy"
                width={200}
                height={200}
              />
            </SplitText>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col lg:gap-6 gap-3">
                <SplitText
                  as="span"
                  animation="wordAnimate"
                  className="text-[var(--Paragraph)] xl:text-[40px] md:text-[34px] lg:text-[38px] text-[28px] leading-10"
                >
                  {service.title}
                </SplitText>
                <SplitText className="text-[var(--Paragraph)] lg:w-95 w-auto leading-4.5">
                  {service.description}
                </SplitText>
              </div>
              <div className="flex items-center gap-3">
                {service.tags.map((tag, index) => (
                  <SplitText
                    animation="btnAnimate"
                    key={index}
                    delay={index * 0.3}
                  >
                    <BaseBtn>
                      <span>{tag}</span>
                    </BaseBtn>
                  </SplitText>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
