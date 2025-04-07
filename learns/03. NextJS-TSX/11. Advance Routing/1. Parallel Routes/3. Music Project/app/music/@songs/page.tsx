import { Clock, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const SongsList = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  ); // Simulate a delay

  const songs = [
    { id: 1, artist: "Dopesmoke", title: "Smoking Kills", time: "3:45" },
    { id: 2, artist: "Dopesmoke", title: "The Last Song", time: "4:20" },
    { id: 3, artist: "Greenhell", title: "Wadidaw", time: "1:30" },
    { id: 4, artist: "Skibidi", title: "The Toilet Man", time: "2:32" },
  ];

  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link key={song.id} href={`/music/${song.id}`}>
            <li className="flex items-center justify-between  p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
              <div className="flex items-center gap-5">
                <img
                  src={`https://picsum.photos/200/300?random=${song.id}`}
                  className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                />

                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>

                <Heart
                  size={16}
                  className="cursor-pointer hover:text-red-500"
                />
                <button className="text-lg font-bold">|</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
