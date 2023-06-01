import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ErrorHandlingMiddleware } from "../utils/errorHandlingMiddleware";

export class RequestClient {
  private httpClient: AxiosInstance;
  private errorMiddleware: ErrorHandlingMiddleware;

  constructor(baseURL: string, headers?: any) {
    this.httpClient = axios.create({
      baseURL,
      headers,
    });
    this.errorMiddleware = new ErrorHandlingMiddleware();
  }

  async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.httpClient(config);
      return response.data;
    } catch (error) {
      throw this.errorMiddleware.handleResponseError(error);
    }
  }
}
