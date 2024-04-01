"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";
import { SparklesCore } from "@/components/ui/sparkles";
interface Player {
  name: string;
  kills: number;
  deaths: number;
  matchesPlayed: number;
}
export default function Home() {

  const [players, setPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch(`http://localhost:3000/api/players`);
      const data = await res.json();
      const sortedAndTopPlayers = data.players
        .sort((a: Player, b: Player) => b.kills - a.kills)
        .slice(0, 10);
      setPlayers(sortedAndTopPlayers);
    }

    fetchPlayers();
  }, []);
  
  const topPlayerName = players.length > 0 ? players[0].name : "Loading top player...";

  return (
    <div className="w-full min-h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg z-10">
      <Spotlight className="hidden md:flex md:left-80 md:-top-80" fill="white"/>
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Welcome to Bullet's Requiem
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Below is a leaderboard of the games heroes.
        </p>
      </div>
      {/* Adjusted for no gap */}
      <div className="mt-0 w-full overflow-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 max-h-[500px] md:max-h-[600px] -mt-2 md:-mt-2 lg:-mt-2">
          {players.map((player, index) => (
            <div key={index} className="relative max-w-xs w-full">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Player: {player.name}
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  Kills: {player.kills}<br />
                  Deaths: {player.deaths}<br />
                  Games: {player.matchesPlayed}
                </p>
                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Leaderboard No {index + 1}
                </button>
                <Meteors number={20} />
              </div>

              
            </div>
          ))}
        </div>
      </div>
            {/* Footer */}
          <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-1xl text-1xl lg:text-2xl font-bold text-center text-white relative z-20">
            {`Top Player award goes to: ${topPlayerName}`}
          </h1>
          <div className="w-[300rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
    
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>


        </div>
    </div>
  );
}


