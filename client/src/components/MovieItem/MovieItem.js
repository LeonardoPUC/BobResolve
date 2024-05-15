import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { MovieImage } from "../MovieImage/MovieImage";
import { Button } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/features/favorites";

export function MovieItem({ movie }) {
	const dispatch = useDispatch();
	const favoriteMovies = useSelector((state) => state.favorite.movies);

	return (
		<div className={styles.movie}>
			<h3>{movie.title}</h3>

			<MovieImage path={movie.poster_path} />

			<div className={styles.movieInfo}>
				<div>
					<strong>Data de lançamento:</strong> {movie.release_date}
				</div>
			</div>
			<div className={styles.movieFooter}>
				<Link to={`/movie/${movie.id}`}>Ver detalhes</Link>

				{favoriteMovies.find((m) => m.id === movie.id) ? (
					<Button state="remove" onClick={() => dispatch(removeMovie(movie))}>
						Remover dos favoritos
					</Button>
				) : (
					<Button onClick={() => dispatch(addMovie(movie))}>
						Adicionar aos favoritos
					</Button>
				)}
			</div>
		</div>
	);
}
