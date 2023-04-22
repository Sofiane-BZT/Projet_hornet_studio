import React from "react";
import "../../src/css/app.css";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RecentAchievementsSection from "../components/RecentAchievementsSection";

function Accueil() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentAchievementsSection />
    </>
  );
}

export default Accueil;
