import { useState, useEffect } from "react";

interface DataFetcherProps<T> {
  url: string;
  render: (
    data: T | null,
    isLoading: boolean,
    error: string | null
  ) => JSX.Element;
}

/**
 * A reusable component for fetching data from a given URL and rendering custom UI based on the result.
 *
 * The component handles data fetching, loading state, and error handling, and passes the necessary information
 * to a render prop function for custom rendering.
 *
 * @param url The URL to fetch data from.
 * @param render A function that receives data, loading state, and error message, and returns JSX to render.
 *
 * @template T The type of the data being fetched.
 *
 * @returns The result of the `render` function called with data, loading state, and error.
 *
 * @example
 * <DataFetcher
 *   url="https://api.example.com/users"
 *   render={(data, isLoading, error) => (
 *     isLoading ? <Spinner /> : error ? <ErrorMessage /> : <UserList data={data} />
 *   )}
 * />
 */
function DataFetcher<T>({ url, render }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return render(data, isLoading, error);
}

export default DataFetcher;
