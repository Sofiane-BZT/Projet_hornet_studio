import React from "react";
import "../../src/css/app.css";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RecentAchievementsSection from "../components/RecentAchievementsSection";
import ContactSection from "../components/ContactSection";

function Accueil() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentAchievementsSection />
      <ContactSection />
    </>
  );
}

export default Accueil;
