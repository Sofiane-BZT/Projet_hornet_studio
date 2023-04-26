import React from "react";
import "../../src/css/app.css";
import PiercingHeroSection from "../components/PiercingHeroSection";
import ContactSection from "../components/ContactSection";
import PiercingServices from "../components/PiercingServices";

function Piercing() {
  return (
    <>
      <PiercingHeroSection />
      <PiercingServices />
      <ContactSection />
    </>
  );
}

export default Piercing;
