import { Quote } from "../../models/quote";
import { QuoteAPIService } from "../../services/QuoteApiService";

export class QuotesAPI {
  private quoteApiService: QuoteAPIService;

  constructor(quoteApiService: QuoteAPIService) {
    this.quoteApiService = quoteApiService;
  }

  async getQuoteById(id: string): Promise<Quote> {
    return this.quoteApiService.getQuoteById(id);
  }

  async getAllQuotes(): Promise<Quote[]> {
    return this.quoteApiService.getAllQuotes();
  }

  async getQuotesByMovieId(movieId: string): Promise<Quote[]> {
    return this.quoteApiService.getQuotesByMovieId(movieId);
  }
}
