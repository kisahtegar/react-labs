import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

/**
 * Posts a new todo to the JSONPlaceholder API.
 *
 * @param {Todo} newTodo - The new todo to be added.
 * @returns {Promise<Todo>} The added todo from the server.
 * @throws {Error} If the network response is not ok.
 */
const postTodo = async (newTodo: Todo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * MutateData component demonstrates how to use `useMutation` from `react-query`
 * to post data to an API and update the cache for related queries.
 *
 * It provides a form to create new todos, posts them to the server, and handles
 * success or error states with `useMutation`.
 *
 * @component
 */
const MutateData = () => {
  const queryClient = useQueryClient(); // Access queryClient to manage cache
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo>({
    mutationFn: postTodo, // Function to call when mutating data
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]); // Invalidate the "todos" cache to refetch data
    },
    onError: (error) => {
      console.error("Error posting todo:", error); // Log error to console
    },
  });

  /**
   * Handles the form submission to add a new todo.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (title.trim() === "") return; // Avoid empty submissions

    mutate({ title, completed: false }); // Trigger mutation
    setTitle(""); // Reset input field
  };

  return (
    <div>
      <h1>Create New Todo</h1>
      {/* Form to submit a new todo */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title} // Controlled input bound to `title` state
          onChange={(e) => setTitle(e.target.value)} // Update title on input change
          placeholder="Enter todo title"
        />
        <button type="submit" disabled={status === "pending"}>
          {status === "pending" ? "Adding..." : "Add Todo"}{" "}
          {/* Show loading state */}
        </button>
        {error && <div>An error occurred: {error.message}</div>}{" "}
        {/* Show error */}
        {status === "success" && <div>Todo added successfully!</div>}{" "}
        {/* Show success */}
      </form>
    </div>
  );
};

export default MutateData;
