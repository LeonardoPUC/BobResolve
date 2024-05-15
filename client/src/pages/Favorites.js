import { useSelector } from "react-redux";
import { MoviesList } from "../components/MoviesList/MoviesList";

export function Favorites() {
	const movies = useSelector(state => state.favorite.movies);

	return (
		<>
			<h1>Filmes marcados como favoritos</h1>
			<MoviesList movies={movies} />
		</>
	)
}
