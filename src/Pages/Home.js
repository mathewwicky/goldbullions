import React from "react";
import Footer from "../Components/Footer/Footer";
import { ThemeProvider } from "react-bootstrap";
import Landing from "../Components/Landing/Landing"
import MissionPage from "../Components/MissionPage/MissionPage";
import Testimonials from "../Components/Testimonials/Testimonials";
import TabCards from "../Components/Tabpages/Tabcards";
const Home = () => {

  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <div>
          <Landing />
          <MissionPage />
          <TabCards />
          <Testimonials />
          <Footer />
        </div>
      </ThemeProvider>

    </>
  );
};

export default Home;