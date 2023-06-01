export interface Quote {
  id: string;
  text: string;
}

export interface QuoteDoc {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface QuoteResponse {
  docs: QuoteDoc[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
