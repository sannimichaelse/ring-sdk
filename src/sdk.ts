import { RequestInit } from "node-fetch";
import { MoviesAPI, QuotesAPI } from "./api";
import { RequestClient } from "./services/RequestClient";
import { MovieAPIService } from "./services/MovieApiService";
import { QuoteAPIService } from "./services/QuoteApiService";

export class RingSDK {
  movies: MoviesAPI;
  quotes: QuotesAPI;

  constructor(baseURL: string, options?: RequestInit) {
    const requestClient = new RequestClient(baseURL, options);

    const movieService = new MovieAPIService(requestClient);
    const quoteService = new QuoteAPIService(requestClient);

    this.movies = new MoviesAPI(movieService);
    this.quotes = new QuotesAPI(quoteService);
  }
}
