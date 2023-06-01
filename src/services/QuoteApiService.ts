import { NotFoundError } from "../utils/errorHandlingMiddleware";
import { QuoteResponse, Quote } from "../models/quote";
import { RequestClient } from "./RequestClient";

interface QuoteService {
  getQuoteById(id: string): Promise<Quote>;
  getAllQuotes(): Promise<Quote[]>;
  getQuotesByMovieId(movieId: string): Promise<Quote[]>;
}

export class QuoteAPIService implements QuoteService {
  private requestClient: RequestClient;
  private quoteBaseUrl: string;

  constructor(requestClient: RequestClient) {
    this.requestClient = requestClient;
    this.quoteBaseUrl = "/quote";
  }

  private mapResponseToQuotes(quoteResponse: QuoteResponse): Quote[] {
    return quoteResponse.docs.map((quoteResponseDoc) => {
      return {
        id: quoteResponseDoc.id,
        text: quoteResponseDoc.dialog,
      };
    });
  }

  async getQuoteById(id: string): Promise<Quote> {
    try {
      const quoteResponse = await this.requestClient.makeRequest<QuoteResponse>(
        {
          method: "GET",
          url: `${this.quoteBaseUrl}/${id}`,
        }
      );
      const quotes = this.mapResponseToQuotes(quoteResponse);
      return quotes[0];
    } catch (error) {
      if (error instanceof NotFoundError) {
        return null;
      }
      throw error;
    }
  }

  async getAllQuotes(): Promise<Quote[]> {
    const quoteResponse = await this.requestClient.makeRequest<QuoteResponse>({
      method: "GET",
      url: this.quoteBaseUrl,
    });
    const quotes = this.mapResponseToQuotes(quoteResponse);
    return quotes;
  }

  async getQuotesByMovieId(movieId: string): Promise<Quote[]> {
    try {
      const quoteResponse = await this.requestClient.makeRequest<QuoteResponse>(
        {
          method: "GET",
          url: `/movie/${movieId}/quote`,
        }
      );
      const quotes = this.mapResponseToQuotes(quoteResponse);
      return quotes;
    } catch (error) {
      if (error instanceof NotFoundError) {
        return null;
      }
      throw error;
    }
  }
}
