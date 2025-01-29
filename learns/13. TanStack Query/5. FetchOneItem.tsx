import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetches a single todo item by its ID.
 *
 * @param {number} id - The ID of the todo item to fetch.
 * @returns {Promise<Object>} A promise that resolves to the fetched todo item.
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
 * FetchOneItem component demonstrates how to fetch a single item
 * using TanStack Query with dynamic query keys.
 */
const FetchOneItem = () => {
  const [currentId, setCurrentId] = useState(1);

  // Fetch data for the current todo ID using `useQuery`.
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId], // Dynamic query key based on `currentId`.
    queryFn: () => fetchTodo(currentId), // Fetch function dependent on `currentId`.
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  /**
   * Advances to the next todo by incrementing the ID.
   */
  const handleNextClick = () => {
    setCurrentId((prevId) => prevId + 1); // Increment the current ID.
  };

  return (
    <div>
      <h1>Todo</h1>
      {/* Display fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Button to fetch the next todo */}
      <button onClick={handleNextClick}>Next Todo</button>
    </div>
  );
};

export default FetchOneItem;
