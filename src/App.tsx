import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { SelectedPage } from "./shared/navSelected";
import Home from "./components/home";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourClasses";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

function App() {
  const [selectedpage, setSelectedpage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // setting for top of page navbar
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // checking is user scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedpage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app text-amber-950">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedpage={selectedpage}
        setSelectedpage={setSelectedpage}
      />
      <Home setSelectedpage={setSelectedpage} />
      <Benefits setSelectedpage={setSelectedpage} />
      <OurClasses setSelectedpage={setSelectedpage} />
      <ContactUs setSelectedpage={setSelectedpage} />
      <Footer />
    </div>
  );
}

export default App;
