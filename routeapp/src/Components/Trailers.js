import React from "react";
import { useParams } from "react-router-dom";

function Trailers({ movies }) {
  const { id } = useParams();

  const data = movies.filter((movie) => {
    return movie.id === Number(id);
  });
  console.log(data);
  return (
    <div>
      {id && (
        <div>
          <h1>{data[0].title}</h1>
          <p>{data[0].description}</p>
          <iframe
            style={{ marginLeft: "400px", borderRadius: "20px" }}
            width="700"
            height="415"
            src={data[0].videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Trailers;
