import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetches paginated todos from the JSONPlaceholder API.
 *
 * @param {number} page - The current page number.
 * @param {number} limit - The number of items per page.
 * @returns {Promise<any>} The todos for the specified page.
 * @throws {Error} If the network response is not ok.
 */
const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * Pagination component demonstrates basic client-side pagination using
 * the `useQuery` hook from `react-query` for fetching paginated data.
 *
 * It provides "Next" and "Previous" buttons to navigate between pages.
 *
 * @component
 */
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const pageSize = 10; // Number of items per page

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", currentPage], // Unique query key for each page
    queryFn: () => fetchTodos(currentPage, pageSize), // Fetch function
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  /**
   * Handles the click event to navigate to the next page.
   */
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  /**
   * Handles the click event to navigate to the previous page.
   */
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Todos</h1>
      {/* Display the current page data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        {/* Navigation buttons */}
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default Pagination;
