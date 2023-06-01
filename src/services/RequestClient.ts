import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ErrorHandlingMiddleware } from "../utils/errorHandlingMiddleware";

export class RequestClient {
  private httpClient: AxiosInstance;
  private errorMiddleware: ErrorHandlingMiddleware;
  private baseUrl: string;

  constructor(baseUrl: string, headers?: any) {
    this.httpClient = axios.create({
      ...headers,
    });
    this.errorMiddleware = new ErrorHandlingMiddleware();
    this.baseUrl = baseUrl;
  }

  private getCompleteUrl(endpointPath: string): string {
    return `${this.baseUrl}${endpointPath}`;
  }

  async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const completeUrl = this.getCompleteUrl(config.url!);
      const response: AxiosResponse<T> = await this.httpClient({
        ...config,
        url: completeUrl,
      });
      return response.data;
    } catch (error) {
      throw this.errorMiddleware.handleResponseError(error);
    }
  }
}
