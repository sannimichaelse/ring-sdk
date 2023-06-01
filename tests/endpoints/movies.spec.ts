import { expect } from "chai";
import sinon from "sinon";
import { MoviesAPI } from "../../src/api";
import { RequestClient } from "../../src/services/RequestClient";
import { MovieAPIService } from "../../src/services/MovieApiService";

describe("MoviesAPI", () => {
  let requestClient: RequestClient;
  let moviesAPI: MoviesAPI;

  beforeEach(() => {
    requestClient = new RequestClient("https://api.example.com");
    const movieService = new MovieAPIService(requestClient);
    moviesAPI = new MoviesAPI(movieService);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should retrieve a movie by ID", async () => {
    const movieId = "123";
    const expectedMovie = { id: movieId, name: "Movie 1" };

    const getMovieByIdStub = sinon.stub(moviesAPI, "getMovieById");
    getMovieByIdStub.resolves(expectedMovie);

    const movie = await moviesAPI.getMovieById(movieId);

    expect(movie).to.deep.equal(expectedMovie);
  });

  it("should retrieve all movies", async () => {
    const expectedMovies = [
      { id: "1", name: "Movie 1" },
      { id: "2", name: "Movie 2" },
    ];

    const getAllMoviesStub = sinon.stub(moviesAPI, "getAllMovies");
    getAllMoviesStub.resolves(expectedMovies);

    const movies = await moviesAPI.getAllMovies();

    expect(movies).to.deep.equal(expectedMovies);
  });
});
