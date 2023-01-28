import React from "react";
import Footer from "../../Components/Footer/Footer";
import Branding from "./Branding/Branding";
import Brand from "./Brands/Brand";
import Faq from "./Faq/Faq";
import Ourworks from "./OurWorks/Ourworks";
import Services from "./Service/Services";

function Home() {
  return (
    <div>
      <Branding />
      <Brand />
      <Services />
      <Ourworks />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
