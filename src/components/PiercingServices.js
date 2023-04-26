import React, { useState } from "react";
import PiercingLocationCard from "./PiercingLocationCard";
import { useQuery } from "graphql-hooks";

const PIERCING_PAGE_QUERY = `query TitrePageQuery {

    pagePiercing {
      id
      pImagePrincipale {
        url
      }
      pTitrePrincipal
      pDescriptionPrincipale
      pTitreServices
      pDescriptionServices
      pServiceVisageTitre
      pServiceVisageImage {
        url
      }
      prixLobe
      prixAntitragus
      prixTragus
      prixConch
      prixSnug
      prixDaith
      prixFlat
      prixAntihelix
      prixHelix
      prixRook
      prixIndustriel
    }
  }
`;

function PiercingServices() {
  const { loading, error, data } = useQuery(PIERCING_PAGE_QUERY);

  try {
    if (loading) throw new Error("Loading...");

    if (error) throw new Error(JSON.stringify(error));

    const { pTitreServices, pDescriptionServices } = data.pagePiercing;

    return (
      <>
        <section className="p-services">
          <h1>{pTitreServices}</h1>

          <p>{pDescriptionServices}</p>
          <div className="p-cards-container">
            <PiercingLocationCard />
            <PiercingLocationCard />
            <PiercingLocationCard />
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
}

export default PiercingServices;
