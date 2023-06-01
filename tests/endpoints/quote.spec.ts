import { expect } from "chai";
import sinon from "sinon";
import { QuotesAPI } from "../../src/api";
import { RequestClient } from "../../src/services/RequestClient";
import { QuoteAPIService } from "../../src/services/QuoteApiService";

describe("QuotesAPI", () => {
  let requestClient: RequestClient;
  let quotesAPI: QuotesAPI;

  beforeEach(() => {
    requestClient = new RequestClient("https://api.example.com");
    const quoteService = new QuoteAPIService(requestClient);
    quotesAPI = new QuotesAPI(quoteService);
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should retrieve a quote by ID", async () => {
    const quoteId = "123";
    const expectedQuote = { id: quoteId, text: "Quote 1" };

    const getQuoteByIdStub = sinon.stub(quotesAPI, "getQuoteById");
    getQuoteByIdStub.resolves(expectedQuote);

    const quote = await quotesAPI.getQuoteById(quoteId);

    expect(quote).to.deep.equal(expectedQuote);
  });

  it("should retrieve all quotes", async () => {
    const expectedQuotes = [
      { id: "1", text: "Quote 1" },
      { id: "2", text: "Quote 2" },
    ];

    const getAllMoviesStub = sinon.stub(quotesAPI, "getAllQuotes");
    getAllMoviesStub.resolves(expectedQuotes);

    const quotes = await quotesAPI.getAllQuotes();

    expect(quotes).to.deep.equal(expectedQuotes);
  });

  it("should get quote by movieId", async () => {
    const quoteId = "123";
    const expectedQuotes = [
      { id: "1", text: "Quote 1" },
      { id: "2", text: "Quote 2" },
    ];

    const getQuoteByIdStub = sinon.stub(quotesAPI, "getQuotesByMovieId");
    getQuoteByIdStub.resolves(expectedQuotes);

    const quotes = await quotesAPI.getQuotesByMovieId(quoteId);

    expect(quotes).to.deep.equal(expectedQuotes);
  });
});
