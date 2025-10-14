import { useState } from "react";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import ImgSection from "../../assets/images/Image break section.webp";
import SplitText from "../common/SplitText/SplitText";

interface Client {
  id: number;
  skill: string;
  from: string;
}

interface ClientContent {
  img: string;
  quote: string;
  name: string;
}

const Clients = () => {
  const [selected, setSelected] = useState<number>(1);

  const AboutClients: Client[] = [
    { id: 1, skill: "Graphic Designer", from: "Ontario, Canada" },
    { id: 2, skill: "Commercial Photographer", from: "Ontario, Canada" },
    { id: 3, skill: "Stylist", from: "Austin Texas" },
  ];

  const clientContents: Record<number, ClientContent> = {
    1: {
      img: user1,
      quote:
        "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.",
      name: "Taylor M., 28 years old",
    },
    2: {
      img: user2,
      quote:
        "As a photographer, Noble Finance helped me organize my business expenses perfectly.",
      name: "Alex R., 32 years old",
    },
    3: {
      img: user3,
      quote:
        "The best financial service I've used for my styling business! Highly recommended.",
      name: "Jordan K., 26 years old",
    },
  };

  const currentContent = clientContents[selected];
  return (
    <section className="pt-35">
      <h3 className="text-[var(--Paragraph)] lg:text-6xl md:text-5xl text-3xl tracking-tighter text-center">
        Hear From Our Happy Clients
      </h3>
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-24 px-5">
        <div className="lg:col-span-1 grid grid-cols-1 sm:gap-0 gap-4 ">
          {AboutClients.map((a: Client) => (
            <div
              key={a.id}
              className={`${
                selected === a.id ? "bg-[#2e4f21]" : ""
              } md:px-6 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out `}
              onClick={() => setSelected(a.id)}
            >
              <div className="border-t-2 border-[var(--on-accent3)] lg:px-8 md:px-5 px-0 py-5 my-5">
                <p
                  className={`text-[18px] ${
                    selected === a.id
                      ? "text-[var(--on-accent1)]"
                      : "text-[var(--on-accent2)]"
                  } leading-4`}
                >
                  {a.skill}
                </p>
                <span
                  className={`font-medium text-sm ${
                    selected === a.id
                      ? "text-[var(--on-accent4)]"
                      : "text-[var(--on-accent2)]"
                  }`}
                >
                  {a.from}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="md:border-l-1 lg:col-span-2 border-[var(--on-accent3)] flex flex-col gap-4 md:pl-10 pr-8">
          <SplitText
            key={selected}
            animation="lineAnimate"
            className="text-[var(--Paragraph)] lg:text-3xl md:text-2xl text-lg text-pretty"
          >
            "{currentContent.quote}"
          </SplitText>
          <div className="flex items-center gap-4 mt-8">
            <img src={currentContent.img} alt="user" width={45} height={45} />
            <SplitText
              as="span"
              key={selected}
              className="text-[var(--Paragraph)]"
            >
              {currentContent.name}
            </SplitText>
          </div>
        </div>
      </div>
      <img
        src={ImgSection}
        loading="lazy"
        decoding="async"
        className="w-full pt-35"
        width={500}
        height={500}
        alt="happy clients"
      />
    </section>
  );
};

export default Clients;
