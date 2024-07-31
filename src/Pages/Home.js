import React from "react";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import Popular from "../Components/Popular/Popular";
import NewCollection from "../Components/NewCollection/NewCollection";
import CenterBanner from "../Components/CenterBanner/CenterBanner";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/Navbar/NavMenu";

const Home = () => {
  return (
    <div>
      <NavMenu />
      <HomeBanner />
      <Popular />
      <CenterBanner />
      <NewCollection />
      <Footer />
    </div>
  );
};

export default Home;
