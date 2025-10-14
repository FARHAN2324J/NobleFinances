import Footer from "./Footer";
import Navbar from "./Navbar";
import { CustomCursor } from "../common/CustomCursor";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
