import React from "react";
import Branding from "./Branding/Branding";
import Brand from "./Brands/Brand";
import Ourworks from "./OurWorks/Ourworks";
import Services from "./Service/Services";

function Home() {
  return (
    <div>
      <Branding />
      <Brand />
      <Services />
      <Ourworks />
    </div>
  );
}

export default Home;
