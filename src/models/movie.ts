export interface Movie {
  id: string;
  name: string;
}

export interface MovieDoc {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface MovieResponse {
  docs: MovieDoc[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
