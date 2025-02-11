import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * Fetches data from the API using the Fetch method.
 * Throws an error if the response is not successful.
 *
 * @async
 * @returns {Promise<any>} Resolves to the JSON response from the API.
 */
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// Uncomment this block to fetch data using Axios instead of Fetch
// const fetchData = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   return response.data;
// };

/**
 * WithTanstackQuery component demonstrates how to fetch and display data
 * using the TanStack Query library. It handles loading, error, and data states.
 *
 * @component
 */
const WithTanstackQuery = () => {
  // --------------------
  // const data = useQuery({ queryKey: ["todo"], queryFn: fetchData });
  // console.log(data);
  // --------------------

  // Use the `useQuery` hook to fetch data. This hook manages data fetching,
  // caching, and invalidation automatically.
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default WithTanstackQuery;
