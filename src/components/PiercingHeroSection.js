import React, { useState } from "react";
import { useQuery } from "graphql-hooks";
import { PIERCING_PAGE_QUERY } from "./piercingQueries";

function PiercingHeroSection() {
  const { loading, error, data } = useQuery(PIERCING_PAGE_QUERY);
  const [piercingData, setPiercingData] = useState(null);

  try {
    if (loading) return <p>Loading...</p>;
    if (error) throw new Error(error.message);

    if (!piercingData) {
      setPiercingData(data.pagePiercing);
    }

    return (
      <>
        <section className="piercing-hero">
          <div className="piercing-hero-img">
            <img
              src={piercingData.pImagePrincipale.url}
              alt="Service visage"
              className="hero-img"
            />
          </div>
          <div className="piercing-about">
            <div className="piercing-title title-color">
              <h1> {piercingData.pTitrePrincipal}</h1>
            </div>
            <div className="piercing-description">
              <p>{piercingData.pDescriptionPrincipale}</p>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
}

export default PiercingHeroSection;
