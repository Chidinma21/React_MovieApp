import React from "react";
// import Trailer from "./Trailer";
import { useParams } from "react-router-dom";

// const Trailers = ({ movies }) => {
//   return (
//     <div>
//       {movies.map((movie) => {
//         return <Trailer movie={movie} key={movie.id} />;
//       })}
//     </div>
//   );
// };

// export default Trailers;

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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Trailers;
