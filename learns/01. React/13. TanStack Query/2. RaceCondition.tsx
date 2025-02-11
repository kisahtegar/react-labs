import { useEffect, useState } from "react";

/**
 * RaceCondition component handles fetching data from an API with race condition prevention.
 * It fetches data based on the current `id` state and prevents updates from stale fetch calls.
 *
 * @component
 */
const RaceCondition = () => {
  const [id, setId] = useState(1); // Tracks the current ID for fetching data.
  const [data, setData] = useState(null); // Stores the fetched data.
  const [isLoading, setIsLoading] = useState(true); // Indicates whether the data is loading.
  const [error, setError] = useState(null); // Stores any errors from the fetch operation.

  useEffect(() => {
    let rc = false; // Race condition flag to track component unmounting.

    /**
     * Fetches data from the API based on the current `id`.
     * Uses `rc` to prevent updating state if the component is unmounted.
     */
    const handleFetch = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        if (rc) return; // Prevents updating state if component unmounted.

        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const result = await res.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();

    // Cleanup function to set the race condition flag when the component unmounts.
    return () => {
      rc = true;
    };
  }, [id]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{JSON.stringify(data)}</h1>}
      <button
        style={{ padding: "20rem" }}
        onClick={() => setId((prevId) => prevId + 1)} // Increments ID to fetch next data.
      >
        Next
      </button>
    </div>
  );
};

export default RaceCondition;
