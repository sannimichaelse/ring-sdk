import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface APIError {
  message: string;
  code?: number;
}

export class NotFoundError extends Error implements APIError {
  code?: number;

  constructor(message: string, code?: number) {
    super(message);
    this.name = "NotFoundError";
    this.code = code;
  }
}

export class UnauthorizedError extends Error implements APIError {
  code?: number;

  constructor(message: string, code?: number) {
    super(message);
    this.name = "UnauthorizedError";
    this.code = code;
  }
}

export class ErrorHandlingMiddleware {
  handleResponseError(error: any): Error {
    if (error.response) {
      const { data, status } = error.response;
      const { message, code } = data;

      switch (status) {
        case 404:
          return new NotFoundError(message, code);
        case 401:
          return new UnauthorizedError(message, code);
        // Handle other status codes or error types...
      }
    }

    // Fallback to a generic error if the response doesn't have a specific error code
    return new Error("An error occurred");
  }
}
