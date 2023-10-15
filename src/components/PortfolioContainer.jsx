import { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { navigationConstants } from "../constants";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState(navigationConstants.about);

  const renderPage = () => {
    const { about, resume, portfolio, contact } = navigationConstants;
    // Above is called destructuring.

    if (currentPage === about) return <About />; // If not destructuring currentPage === navigationConstants.about
    if (currentPage === resume) return <Resume />;
    if (currentPage === portfolio) return <Portfolio />;
    if (currentPage === contact) return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body min-vh-100 d-flex flex-column">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* Use paddings to create space between a parents border and its children not margin.*/}
      <main className="px-3 pb-6 flex-grow-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
