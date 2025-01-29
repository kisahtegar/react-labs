import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Fetches a paginated list of todos from the JSONPlaceholder API.
 *
 * @param {Object} params - Parameters for the fetch function.
 * @param {number} [params.pageParam=1] - The current page to fetch.
 * @returns {Promise<Todo[]>} A promise that resolves to the list of todos.
 * @throws {Error} If the network response is not ok.
 */
const fetchTodos = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<Todo[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

/**
 * InfiniteQueries component demonstrates infinite scrolling using the
 * `useInfiniteQuery` hook from `react-query`.
 *
 * It fetches data incrementally as the user scrolls near the bottom of the list.
 */
const InfiniteQueries = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Todo[], Error>({
    queryKey: ["todos"], // Unique key for the query
    queryFn: fetchTodos, // Fetch function
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === 10 ? pages.length + 1 : undefined, // Determines if more pages exist
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null); // Ref for the load more trigger element

  /**
   * Sets up an IntersectionObserver to automatically fetch the next page
   * when the `loadMoreRef` comes into view.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 1.0,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {data?.pages.map((page, index) => (
          <div key={index}>
            {page.map((todo: Todo) => (
              <pre key={todo.id}>{JSON.stringify(todo, null, 2)}</pre>
            ))}
          </div>
        ))}
      </div>
      {/* Load more trigger */}
      <div ref={loadMoreRef} style={{ height: "1px" }}>
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
    </div>
  );
};

export default InfiniteQueries;
