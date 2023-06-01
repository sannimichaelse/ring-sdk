import { NotFoundError } from "../utils/errorHandlingMiddleware";
import { MovieResponse, Movie } from "../models/movie";
import { RequestClient } from "./RequestClient";

interface MovieService {
  getMovieById(id: string): Promise<Movie>;
  getAllMovies(): Promise<Movie[]>;
}

export class MovieAPIService implements MovieService {
  private requestClient: RequestClient;
  private movieBaseUrl: string;

  constructor(requestClient: RequestClient) {
    this.requestClient = requestClient;
    this.movieBaseUrl = "/movie";
  }

  private mapResponseToMovies(movieResponse: MovieResponse): Movie[] {
    return movieResponse.docs.map((movieResponseDoc) => {
      return {
        id: movieResponseDoc._id,
        name: movieResponseDoc.name,
      };
    });
  }

  async getMovieById(id: string): Promise<Movie> {
    try {
      const movieResponse = await this.requestClient.makeRequest<MovieResponse>(
        {
          method: "GET",
          url: `${this.movieBaseUrl}/${id}`,
        }
      );

      const movies = this.mapResponseToMovies(movieResponse);
      return movies[0];
    } catch (error) {
      throw error;
    }
  }

  async getAllMovies(): Promise<Movie[]> {
    try {
      const movieResponse = await this.requestClient.makeRequest<MovieResponse>(
        {
          method: "GET",
          url: this.movieBaseUrl,
        }
      );
      const movies = this.mapResponseToMovies(movieResponse);
      return movies;
    } catch (error) {
      throw error;
    }
  }
}
