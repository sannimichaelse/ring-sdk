import { RingSDK } from "./sdk";

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

// Example usage with promises
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
