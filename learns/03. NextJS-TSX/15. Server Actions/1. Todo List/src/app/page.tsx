import * as actions from "@/actions";
import SaveButton from "@/components/SaveButton";
import { db } from "@/utils/db";

const Home = async () => {
  const data = await db.todo.findMany({
    select: {
      input: true,
      id: true,
    },

    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 ">
        <form className="flex flex-col gap-4" action={actions.createTodo}>
          <input
            type="text"
            name="input"
            placeholder="Add a new todo..."
            className="px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {data.map((todo) => (
            <section key={todo.id} className="flex items-center">
              <form
                action={actions.editTodo}
                className="flex items-center justify-between space-x-4"
              >
                <input type="hidden" name="inputId" value={todo.id} />

                <input
                  type="text"
                  name="input"
                  defaultValue={todo.input}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <SaveButton />
              </form>

              <form action={actions.deleteTodo}>
                <input type="hidden" name="inputId" value={todo.id} />

                <button className="bg-red-500 text-white py-1.5 px-4 rounded-lg hover:bg-red-600 transition duration-300 ml-[.4rem]">
                  Delete
                </button>
              </form>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
