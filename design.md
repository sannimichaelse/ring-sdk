## Design Overview

The Ring SDK is designed to provide a convenient and extensible way to interact with the Ring API. It follows a modular and decoupled architecture, allowing for easy maintenance and future enhancements.

## Folder Structure

The SDK follows the following folder structure:

```
src/
├── api/
│   ├── endpoints/
│   │   ├── movies.ts
│   │   └── quotes.ts
│   └── index.ts
├── models/
│   ├── movie.ts
│   └── quote.ts
├── services/
│   ├── RequestClient.ts
│   ├── MovieApiService.ts
│   └── QuoteApiService.ts
├── index.ts
└── sdk.ts
```

- The api folder contains the API-related code, including endpoint definitions and the API entry point.
- The models folder contains the data models used in the SDK, such as Movie and Quote.
- The services folder contains the service classes responsible for handling API requests and responses.
- The index.ts file is the entry point of the SDK, exposing the RingSDK class.
- The sdk.ts file contains the implementation of the RingSDK class.

## Design Decisions

Here are the design decisions made during the development of the Ring SDK:

- **Separation of Concerns**: The SDK follows a separation of concerns principle by separating the API, service, and data model layers. This promotes modularity and allows for easier maintenance and testing.

- **Interface-Based Programming**: The SDK uses interfaces to define clear contracts between different components, such as the MovieService interface. This enables flexibility and extensibility by allowing multiple implementations of the same interface.

- **Error Handling**: The SDK implements a standardized error handling mechanism by defining a base error class and error handling middleware. This helps in consistent error responses and easier error handling in client code.

- **Request Client**: The SDK uses a RequestClient class to handle HTTP requests to the API. This abstraction allows for easy swapping of underlying HTTP libraries or configurations.

- **Use of Promises**: The SDK uses Promises to handle asynchronous operations, allowing for better control flow and error handling using async/await syntax.
