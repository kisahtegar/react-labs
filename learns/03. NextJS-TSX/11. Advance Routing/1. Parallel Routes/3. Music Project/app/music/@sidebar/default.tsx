import { Clock, Home, TrendingUp } from "lucide-react";

const Default = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-6 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <img
                src={`https://picsum.photos/200/300?random=${i}`}
                alt="Album Cover"
                className="h-15 w-15 bg-gray-700 rounded-md"
              />
              <div>
                <p className="text-white">Random {i}</p>
                <p className="text-sm text-gray-400">Person {i}</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Default;
