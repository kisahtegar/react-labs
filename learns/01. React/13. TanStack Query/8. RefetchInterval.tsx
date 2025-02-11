import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetches a specific todo item based on the provided ID.
 *
 * @param {number} id - The ID of the todo to fetch.
 * @returns {Promise<Object>} The todo item data.
 * @throws {Error} If the network response is not ok.
 */
const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * RefetchInterval component demonstrates how to configure `refetchInterval` in TanStack Query.
 *
 * The `refetchInterval` specifies the interval at which the data should be refetched automatically.
 * In this case, the data is refetched every 5 seconds.
 */
const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId], // Unique query key includes currentId.
    queryFn: () => fetchTodo(currentId), // Fetch data based on currentId.
    refetchInterval: 5000, // Automatically refetch data every 5 seconds.
  });

  // Handle ID change every 5 seconds to simulate fetching a new todo.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1)); // Cycle through todo IDs.
    }, 5000);

    // Cleanup the interval when the component is unmounted.
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Todo</h1>
      {/* Display the fetched todo item */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={
          () => setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1)) // Navigate to the next todo
        }
      >
        Next Todo
      </button>
    </div>
  );
};

export default RefetchInterval;
