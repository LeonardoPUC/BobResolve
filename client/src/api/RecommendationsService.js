import { api } from "../config/http";

export class RecommendationsService {
	// Buscar recomendações de filmes para um determinado ID
	static getRecommendationsByMovieId(id) {
		return api.get(`movie/${id}/recommendations`);
	}
}
