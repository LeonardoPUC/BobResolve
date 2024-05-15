import { api } from "../config/http";

export class MoviesService {
	// Buscar filmes populares
	static getMovies() {
		return api.get("movie/popular");
	}

	// Buscar detalhes de um filme
	static getMovieDetail(movieId) {
		return api.get(`movie/${movieId}`);
	}

	static searchByMovieTitle(movieTitle) {
		return api.get("search/movie", {
			params: {
				query: movieTitle,
			}
		});
	}
}
