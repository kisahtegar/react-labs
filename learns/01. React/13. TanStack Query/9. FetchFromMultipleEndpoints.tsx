import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

/**
 * Fetches a list of todos from the JSONPlaceholder API.
 *
 * @returns {Promise<Object[]>} The todos data.
 * @throws {Error} If the network response is not ok.
 */
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * Fetches a list of posts from the JSONPlaceholder API.
 *
 * @returns {Promise<Object[]>} The posts data.
 * @throws {Error} If the network response is not ok.
 */
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * FetchFromMultipleEndpoints component demonstrates how to use `useQueries`
 * to fetch data from multiple endpoints simultaneously.
 *
 * It fetches data for both todos and posts using `useQueries` and allows the user
 * to cycle through them one by one.
 */
const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  // Using useQueries to fetch data from multiple endpoints concurrently
  const results = useQueries({
    queries: [
      {
        queryKey: ["todos"], // Key for the todos query
        queryFn: fetchTodos, // Function to fetch todos
      },
      {
        queryKey: ["posts"], // Key for the posts query
        queryFn: fetchPosts, // Function to fetch posts
      },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading)
    return <div>Loading...</div>; // Show loading state if either query is loading

  if (todosQuery.error || postsQuery.error)
    return (
      <div>
        An error occurred:
        {todosQuery.error?.message || postsQuery.error?.message}
      </div>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  // Handle button clicks to navigate through the todos and posts
  const handleNextTodoClick = () => {
    setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length)); // Increment Todo ID
  };

  const handleNextPostClick = () => {
    setCurrentPostId((prevId) => Math.min(prevId + 1, postsData.length)); // Increment Post ID
  };

  return (
    <div>
      <h1>Todos</h1>
      {/* Display the current todo based on currentTodoId */}
      <pre>
        {JSON.stringify(
          todosData.find((todo: any) => todo.id === currentTodoId),
          null,
          2
        )}
      </pre>
      <button onClick={handleNextTodoClick}>Next Todo</button>

      <h1>Posts</h1>
      {/* Display the current post based on currentPostId */}
      <pre>
        {JSON.stringify(
          postsData.find((post: any) => post.id === currentPostId),
          null,
          2
        )}
      </pre>
      <button onClick={handleNextPostClick}>Next Post</button>
    </div>
  );
};

export default FetchFromMultipleEndpoints;
