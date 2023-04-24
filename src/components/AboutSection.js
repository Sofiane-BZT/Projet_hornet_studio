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
  if (loading) return "Loading...";
  if (error) return <p>Something Bad Happened {JSON.stringify(error)}</p>;

  const { titreApropos, textApropos } = data.pageAccueil;

  return (
    <div className="about-container ">
      <div className="about-title">
        <h1> {titreApropos}</h1>
      </div>
      <div className="about-description">
        <p>{textApropos}</p>
      </div>
    </div>
  );
}

export default AboutSection;
