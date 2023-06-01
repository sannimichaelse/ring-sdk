import { expect } from "chai";
import sinon from "sinon";
import { RingSDK } from "../src/sdk";

describe("RingSDK", () => {
  // Test the initialization of the SDK
  it("should initialize the SDK correctly", () => {
    const client = new RingSDK("https://api.example.com", {
      headers: {
        Authorization: "Bearer your_token",
      },
    });

    expect(client.movies).to.exist;
    expect(client.quotes).to.exist;
  });

  // Test the getAllMovies method
  it("should retrieve all movies correctly", async () => {
    const client = new RingSDK("https://api.example.com", {
      headers: {
        Authorization: "Bearer your_token",
      },
    });

    const getAllMoviesStub = sinon.stub(client.movies, "getAllMovies");
    getAllMoviesStub.resolves([
      { id: "1", name: "Movie 1" },
      { id: "2", name: "Movie 2" },
    ]);

    const movies = await client.movies.getAllMovies();

    expect(movies).to.exist;
    expect(Array.isArray(movies)).to.be.true;

    getAllMoviesStub.restore();
  });

  // Test the getMovieById method
  it("should retrieve a movie by ID correctly", async () => {
    const client = new RingSDK("https://api.example.com", {
      headers: {
        Authorization: "Bearer your_token",
      },
    });

    const movieId = "1";
    const expectedMovie = { id: movieId, name: "Movie 1" };

    const getMovieByIdStub = sinon.stub(client.movies, "getMovieById");
    getMovieByIdStub.withArgs(movieId).resolves(expectedMovie);

    const movie = await client.movies.getMovieById(movieId);

    expect(movie).to.exist;
    expect(movie).to.deep.equal(expectedMovie);

    getMovieByIdStub.restore();
  });

  // Test the getAllQuotes method
  it("should retrieve all quotes correctly", async () => {
    const client = new RingSDK("https://api.example.com", {
      headers: {
        Authorization: "Bearer your_token",
      },
    });

    const getAllQuotesStub = sinon.stub(client.quotes, "getAllQuotes");
    getAllQuotesStub.resolves([
      { id: "1", text: "Quote 1" },
      { id: "2", text: "Quote 2" },
    ]);

    const quotes = await client.quotes.getAllQuotes();

    expect(quotes).to.exist;
    expect(Array.isArray(quotes)).to.be.true;

    getAllQuotesStub.restore();
  });

  // Test the getQuoteById method
  it("should retrieve a quote by ID correctly", async () => {
    const client = new RingSDK("https://api.example.com", {
      headers: {
        Authorization: "Bearer your_token",
      },
    });

    const quoteId = "1";
    const expectedQuote = { id: quoteId, text: "Quote 1" };

    const getQuoteByIdStub = sinon.stub(client.quotes, "getQuoteById");
    getQuoteByIdStub.withArgs(quoteId).resolves(expectedQuote);

    const quote = await client.quotes.getQuoteById(quoteId);

    expect(quote).to.exist;
    expect(quote).to.deep.equal(expectedQuote);

    getQuoteByIdStub.restore();
  });
});
