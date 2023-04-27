import React, { useState } from "react";
import { useQuery } from "graphql-hooks";
import { PIERCING_PAGE_QUERY } from "./piercingQueries";

function PiercingLocationCard(props) {
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
        <div className="pl-card">
          <h1>{props.title}</h1>
          <div className="pl-image">
            <img src={props.image} alt="visage" />
          </div>
          <div className="pl-price">
            <ul>
              {props.prix.map((prix, index) => (
                <li key={index}>{prix}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
}

export default PiercingLocationCard;
