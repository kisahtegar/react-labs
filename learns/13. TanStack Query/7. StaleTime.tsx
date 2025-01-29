import { useQuery } from "@tanstack/react-query";

/**
 * Fetches a list of todos from the API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to the list of todos.
 * @throws {Error} If the network response is not ok.
 */
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * StaleTime component demonstrates how to configure `staleTime` in TanStack Query.
 *
 * The `staleTime` determines how long the data remains fresh before it is considered stale.
 * In this case, the data will remain fresh for 50,000 milliseconds (50 seconds).
 */
const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"], // Unique query key.
    queryFn: fetchData, // Function to fetch the data.
    staleTime: 50000, // Data remains fresh for 50 seconds.
  });

  if (isLoading) return <div>Loading...</div>; // Show loading state.
  if (error) return <div>An error occurred: {error.message}</div>; // Show error state.

  return (
    <div>
      <h1>Data</h1>
      {/* Display the fetched data in a formatted way */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StaleTime;
