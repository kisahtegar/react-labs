import React from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  songs: React.ReactNode;
  player: React.ReactNode;
}) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="flex-1 p-6 bg-[#1e1e1e]">
        {player}
        {songs}
      </div>
      {children}
    </div>
  );
};

export default MusicLayout;
