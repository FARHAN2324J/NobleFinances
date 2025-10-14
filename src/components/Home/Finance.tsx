import SplitText from "../common/SplitText/SplitText";
import cash from "../../assets/images/icons/Image1.png";
import user from "../../assets/images/icons/Image2.png";
import file from "../../assets/images/icons/Image3.png";

const Finance = () => {
  const cards = [
    {
      id: 1,
      img: file,
      alt: "file",
      service: "For Freelancers",
      feature: "Simplicity & Control",
      content:
        "Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love.",
    },
    {
      id: 2,
      img: user,
      alt: "user",
      service: "For Families",
      feature: "Stability & Security",
      content:
        "From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly.",
    },
    {
      id: 3,
      img: cash,
      alt: "cash",
      service: "For Small Businesses",
      feature: "Stability & Security",
      content:
        "Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business.",
    },
  ];
  return (
    <section className="pt-30 px-6">
      <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-10 md:gap-5">
        <SplitText
          as="h4"
          animation="wordAnimate"
          text="Smart Finance for everyone"
          className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-3xl tracking-tighter "
        />
        <SplitText
          text="At Noble Finance, we believe that financial confidence should be
          accessible to everyone whether you’re a solo entrepreneur, managing a
          growing family, or running a small business."
          className="text-[var(--Paragraph)] text-balance sm:pt-0 pt-10"
        />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:pt-30 pt-20">
        {cards.map((c) => (
          <article
            key={c.id}
            className="lg:border-l-1 border-t-1 lg:border-t-0 border-[var(--Paragraph)] md:pr-[80px] lg:pl-[50px] py-5 flex flex-col gap-[20px] items-start"
          >
            <SplitText animation="ImgAnimate">
              <img
                loading="lazy"
                src={c.img}
                alt={c.alt}
                width={30}
                height={30}
              />
            </SplitText>
            <SplitText
              className="text-[var(--Paragraph)] lg:text-3xl md:text-2xl text-[22px]"
              animation="wordAnimate"
            >
              {c.service}
            </SplitText>
            <SplitText
              as="span"
              delay={0.5}
              className="text-[var(--Paragraph)]"
            >
              {c.feature}
            </SplitText>
            <p></p>
            <SplitText
              animation="lineAnimate"
              className="text-[var(--Paragraph)] text-balance"
              delay={0.6}
            >
              {c.content}
            </SplitText>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Finance;
