# Ring SDK

The Ring SDK is a JavaScript library that provides a convenient interface for interacting with the Ring API. It allows you to fetch movie and quote data from the API and perform various operations.

## Installation

To use the Ring SDK in your project, you can install it via npm:

`npm install ring-sdk`

## Usage

Here's an example of how to use the Ring SDK in your JavaScript/TypeScript code:

```javascript
import { RingSDK } from "ring-sdk";

// Create an instance of the SDK
const client = new RingSDK("https://api.example.com", {
  headers: {
    Authorization: "Bearer your_token",
  },
});

// Example usage with async/await
(async () => {
  try {
    const movies = await client.movies.getAllMovies();
    console.log("Movies:", movies);
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    const quotes = await client.quotes.getAllQuotes();
    console.log("Quotes:", quotes);
  } catch (error) {
    console.error("Error:", error);
  }
})();

// Example usage using promises
client.movies
  .getAllMovies()
  .then((movies) => {
    console.log("Movies:", movies);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

client.quotes
  .getAllQuotes()
  .then((quotes) => {
    console.log("Quotes:", quotes);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## API Reference

The Ring SDK provides the following classes and methods:

- **RingSDK**: The main class representing the SDK. It has movies and quotes properties to access the movie and quote APIs.

- **MoviesAPI**: A class representing the movie API. It provides methods like getMovieById and getAllMovies to fetch movie data.

- **QuotesAPI**: A class representing the quote API. It provides methods like getQuoteById and getAllQuotes to fetch quote data.

For detailed information about the classes and methods, please refer to the source code and documentation.

## Contributing

Contributions to the Ring SDK are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License

The Ring SDK is open-source and released under the MIT License.
