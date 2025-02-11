import DataFetcher from "./DataFetcher";

interface User {
  id: number;
  name: string;
}

/**
 * A component that fetches and displays a list of users from a remote API.
 *
 * This component uses the `DataFetcher` to retrieve user data and displays a loading state, error message,
 * or a list of user names based on the current state.
 *
 * @returns A list of user names or appropriate loading/error messages.
 *
 * @example
 * <Users />
 * // Displays a list of users when the data is fetched successfully
 * // Displays "Loading..." while the data is being fetched
 * // Displays "Error: <error message>" if the fetch fails
 */
function Users() {
  return (
    <DataFetcher<User[]>
      url="https://jsonplaceholder.typicode.com/users"
      render={(data, isLoading, error) => {
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;

        return (
          <ul>
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

export default Users;
