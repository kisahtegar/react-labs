import { useQuery } from "@tanstack/react-query";

/**
 * Generates a random number as a resolved Promise.
 *
 * @returns {Promise<number>} A promise that resolves to a random number.
 */
const getRandomNumber = () => {
  return Promise.resolve(Math.random());
};

/**
 * Deduplication component demonstrates the deduplication feature of TanStack Query.
 * Even if multiple components or hooks request the same `queryKey` at the same time,
 * TanStack Query ensures that only one request is sent, and all consumers receive the same data.
 */
const Deduplication = () => {
  // Fetch a random number using the `useQuery` hook with a unique `queryKey`.
  // React Query will deduplicate multiple requests for the same `queryKey`.
  const { data } = useQuery({
    queryKey: ["randomNumber"], // Unique key for caching and deduplication.
    queryFn: getRandomNumber, // Function that generates the random number.
  });

  // Display the fetched random number.
  return <div>Random Number is: {data}</div>;
};

export default Deduplication;
