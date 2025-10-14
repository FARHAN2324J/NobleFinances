import { Link } from "react-router";
import SplitText from "../common/SplitText/SplitText";
import Btn from "../ui/Btn";

const Navbar = () => {
  return (
    <nav className="bg-[var(--Background1)] p-6 z-50">
      <ul className="flex items-center justify-between">
        <Link to="/">
          <li className="text-[var(--Paragraph)] sm:text-lg text-md font-medium tracking-tighter">
            <SplitText text="Noble Finances" />
          </li>
        </Link>
        <li className="flex items-center gap-5">
          <Link to="/services">
            <SplitText
              text="Services"
              className="text-[var(--Paragraph)] sm:text-sm text-[12px] font-medium"
            />
          </Link>
          <Link to="/booking">
            <SplitText animation="btnAnimate">
              <Btn className="sm:p-3 px-3 hover:bg-[var(--on-accent1)] py-2 sm:text-sm text-[12px] bg-[var(--Paragraph)] text-[var(--on-accent1)]">
                Book <span className="hidden sm:inline">an appointment</span>
              </Btn>
            </SplitText>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
