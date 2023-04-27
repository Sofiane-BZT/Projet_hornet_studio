import React, { useState } from "react";
import PiercingLocationCard from "./PiercingLocationCard";
import { useQuery } from "graphql-hooks";
import { PIERCING_PAGE_QUERY } from "./piercingQueries";

function PiercingServices() {
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
        <section className="p-services">
          <h1>{piercingData.pTitreServices}</h1>

          <p>{piercingData.pDescriptionServices}</p>
          <div className="p-cards-container">
            <PiercingLocationCard
              title={piercingData.pServiceVisageTitre}
              image={piercingData.pServiceVisageImage.url}
              prix={[
                piercingData.prixArcade,
                piercingData.prixNarine,
                piercingData.prixSeptum,
                piercingData.prixBridge,
                piercingData.prixPommette,
                piercingData.prixLabretDecale,
                piercingData.prixLabret,
                piercingData.prixMedusa,
                piercingData.prixSmiley,
              ]}
            />
            <PiercingLocationCard
              title={piercingData.pServiceOreilleTitre}
              image={piercingData.pServiceOreilleImage.url}
              prix={[
                piercingData.prixLobe,
                piercingData.prixAntitragus,
                piercingData.prixTragus,
                piercingData.prixConch,
                piercingData.prixSnug,
                piercingData.prixDaith,
                piercingData.prixFlat,
                piercingData.prixAntihelix,
                piercingData.prixHelix,
                piercingData.prixRook,
                piercingData.prixIndustriel,
              ]}
            />
            <PiercingLocationCard
              title={piercingData.pServiceCorpsTitre}
              image={piercingData.pServiceCorpsImage.url}
              prix={[
                piercingData.prixMicrodermal,
                piercingData.prixTeton,
                piercingData.prixNombril,
              ]}
            />
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
}

export default PiercingServices;
