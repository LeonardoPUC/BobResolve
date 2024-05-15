import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";
import { RecommendationsService } from "../api/RecommendationsService";

export function useGetMovieDetail(movieId) {
	const [movie, setMovie] = useState({})

	useEffect(() => {
		MoviesService.getMovieDetail(movieId)
			.then(({ data }) => setMovie(data))
	}, [movieId])

	return movie;
}

export function useGetMovies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		MoviesService
			.getMovies()
			.then(({ data }) => setMovies(data.results))
	}, []);

	return movies;
}

export function useGetRecommendations(movieId) {
	const [movies, setMovie] = useState([])

	useEffect(() => {
		RecommendationsService.getRecommendationsByMovieId(movieId)
			.then(({ data }) => setMovie(data.results))
	}, [movieId])

	return movies;
}


export function useSearchMovieByTitle(movieTitle) {
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (!movieTitle) {
			setSearchResults([]);
			return;
		}

		MoviesService.searchByMovieTitle(movieTitle).then(({ data }) => {
			setSearchResults(data.results);
		});
	}, [movieTitle]);

	return searchResults;
}