import React from "react";
import { useQuery } from "graphql-hooks";

const TITRE_QUERY = `query TitreQuery {
  
    pageAccueil {
      titreApropos
      textApropos
    }
}`;

function AboutSection() {
  const { loading, error, data } = useQuery(TITRE_QUERY);

  try {
    if (loading) throw new Error("Loading...");

    if (error) throw new Error(JSON.stringify(error));

    const { titreApropos, textApropos } = data.pageAccueil;

    return (
      <div className="about-container">
        <div className="about-title">
          <h1> {titreApropos}</h1>
        </div>
        <div className="about-description">
          <p>{textApropos}</p>
        </div>
      </div>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
}
export default AboutSection;
