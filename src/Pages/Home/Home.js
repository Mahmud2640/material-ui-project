import React from "react";
import Branding from "./Branding/Branding";
import Brand from "./Brands/Brand";
import Services from "./Service/Services";

function Home() {
  return (
    <div>
      <Branding />
      <Brand/>
      <Services/>
    </div>
  );
}

export default Home;
