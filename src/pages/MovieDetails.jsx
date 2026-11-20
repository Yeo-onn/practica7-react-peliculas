import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovie(null);
    setError(null);
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError("No se pudo cargar la información de la película.");
      });
  }, [movieId]);

  if (error) return <p className="message error">{error}</p>;
  if (!movie) return <p className="message">Cargando información...</p>;

  const imageUrl = getMovieImg(movie.poster_path, 500);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/D";

  return (
    <div>
      <Link to="/" className="back-link">← Volver al listado</Link>

      <div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="movieImage" />

        <div className="movieDetails">
          <h2>{movie.title}</h2>
          <p><strong>Géneros:</strong> {movie.genres?.map((g) => g.name).join(", ")}</p>
          <p><strong>Año:</strong> {year}</p>
          <p><strong>Calificación:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : "N/D"} / 10</p>
          <p><strong>Descripción:</strong> {movie.overview || "Sin descripción disponible."}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
