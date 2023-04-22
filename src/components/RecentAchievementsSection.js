import React from "react";
import RecentAchievementsCard from "./RecentAchievementsCard";

function RecentAchievementsSection() {
  return (
    <div className="recent-achievements-section">
      <h1 className="title">Nos dernières réalisations</h1>
      <div className="recent-achievements-container">
        <RecentAchievementsCard />
        <RecentAchievementsCard />
        <RecentAchievementsCard />
        <RecentAchievementsCard />
        <RecentAchievementsCard />
        <RecentAchievementsCard />
      </div>
    </div>
  );
}

export default RecentAchievementsSection;
