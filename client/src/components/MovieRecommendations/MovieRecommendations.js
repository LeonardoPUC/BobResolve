import { useGetRecommendations } from "../../hooks/useGetRecommendations";
import { MovieItem } from "../MovieItem/MovieItem";
import styles from "./MovieRecommendations.module.css";

export function MovieRecommendations({ movieid }) {
  const recommendedMovies = useGetRecommendations(movieid);
  return (
    <section className={styles.recommendations}>
      {recommendedMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
