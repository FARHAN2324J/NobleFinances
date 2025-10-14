import SplitText from "../common/SplitText/SplitText";

const Footer = () => {
  return (
    <footer className="bg-[var(--Background3)] lg:px-[40px] lg:py-8 md:px-8 md:py-8 px-6 py-8">
      <div className="flex sm:flex-row flex-col justify-between">
        <SplitText
          className="text-[var(--on-accent1)] text-2xl font-medium tracking-tighter"
          text="Noble Finances"
          as="a"
        />
        <div className="flex sm:justify-start justify-between items-center gap-3 sm:pt-0 pt-8">
          <SplitText
            text="Services"
            as="a"
            className="text-[var(--on-accent1)] sm:text-sm text-[12px] font-medium"
          />
          <button
            className="sm:p-3 px-3  py-2 sm:text-sm text-[12px] text-[var(--Paragraph)] bg-[var(--on-accent1)] hover:bg-[var(--Background1)] hover:text-[var(--Paragraph)] cursor-pointer duration-500 rounded-[50px]
      "
          >
            <span>Book An Appointment</span>
          </button>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-end pt-20">
        <div className="flex flex-col">
          <span className="text-[var(--on-accent1)] text-[14px] font-medium">
            Financial Clarity You Can Trust
          </span>
          <p className="text-[var(--on-accent4)] text-[14px] font-medium">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>
        </div>
        <span className="text-[12px] text-[var(--on-accent1)] sm:pt-0 pt-8">
          © 2025 All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
