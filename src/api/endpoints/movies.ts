import { Movie } from "../../models/movie";
import { MovieAPIService } from "../../services/MovieApiService";

export class MoviesAPI {
  private movieApiService: MovieAPIService;

  constructor(movieApiService: MovieAPIService) {
    this.movieApiService = movieApiService;
  }

  async getMovieById(id: string): Promise<Movie> {
    return this.movieApiService.getMovieById(id);
  }

  async getAllMovies(): Promise<Movie[]> {
    return this.movieApiService.getAllMovies();
  }
}
