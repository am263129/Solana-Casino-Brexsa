"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CoinSide = "heads" | "tails";
type GameStatus = "idle" | "flipping" | "finished";

type OpenGame = {
  id: string;
  username: string;
  level: number;
  amount: number;
  side: CoinSide;
  avatar: string;
};

export function CoinflipGame() {
  const [betAmount, setBetAmount] = useState(0.1);
  const [selectedSide, setSelectedSide] = useState<CoinSide | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>("idle");
  const [openGames, setOpenGames] = useState<OpenGame[]>([
    {
      id: "1",
      username: "shikarik",
      level: 4,
      amount: 0.5,
      side: "heads",
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
    },
    {
      id: "2",
      username: "Pumpy",
      level: 59,
      amount: 0.18,
      side: "tails",
      avatar: "https://ext.same-assets.com/3674931769/661868519.webp",
    },
    {
      id: "3",
      username: "FluffyTortoise",
      level: 1,
      amount: 0.05,
      side: "heads",
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
    },
    {
      id: "4",
      username: "Crypotrader106",
      level: 1,
      amount: 0.02,
      side: "tails",
      avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=Crypotrader106&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80",
    },
    {
      id: "5",
      username: "x1",
      level: 10,
      amount: 0.3,
      side: "heads",
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
    },
    {
      id: "6",
      username: "ion_crypto",
      level: 11,
      amount: 0.008,
      side: "tails",
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
    },
  ]);

  const increaseBet = () => {
    setBetAmount(prev => parseFloat((prev + 0.01).toFixed(2)));
  };

  const decreaseBet = () => {
    if (betAmount > 0.01) {
      setBetAmount(prev => parseFloat((prev - 0.01).toFixed(2)));
    }
  };

  const handleSideSelect = (side: CoinSide) => {
    setSelectedSide(side);
  };

  const handleCreateGame = () => {
    if (!selectedSide || betAmount <= 0) return;

    // Here you would implement the logic to create a game
    console.log(`Creating game with ${betAmount} SOL on ${selectedSide}`);
  };

  const handleJoinGame = (game: OpenGame) => {
    // Here you would implement the logic to join a game
    console.log(`Joining game ${game.id} with ${game.amount} SOL`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pt-20 md:pt-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold airstrike-font text-white">Coinflip</h1>
        <p className="text-gray-400 mt-2">The classic 50/50 game mode.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Bet Controls */}
        <div className="md:col-span-2">
          <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-6 gradient-border">
            {/* Bet Amount Control */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-2">Bet Amount</label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-solpot-gray-dark/50 border-solpot-gray-dark hover:bg-solpot-gray-dark/70"
                  onClick={decreaseBet}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold text-white">{betAmount.toFixed(2)}</div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-solpot-gray-dark/50 border-solpot-gray-dark hover:bg-solpot-gray-dark/70"
                  onClick={increaseBet}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Coin Side Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-4">Choose Side</label>
              <div className="flex justify-center gap-12">
                <button
                  className={cn(
                    "relative flex flex-col items-center transition-transform transform hover:scale-105",
                    selectedSide === "heads" && "scale-105"
                  )}
                  onClick={() => handleSideSelect("heads")}
                >
                  <div className={cn(
                    "w-32 h-32 rounded-full overflow-hidden border-4 mb-2 transition-colors",
                    selectedSide === "heads" ? "border-solpot-purple" : "border-transparent"
                  )}>
                    <Image
                      src="/images/coin-heads.png"
                      alt="Heads"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium">Heads</span>
                </button>

                <button
                  className={cn(
                    "relative flex flex-col items-center transition-transform transform hover:scale-105",
                    selectedSide === "tails" && "scale-105"
                  )}
                  onClick={() => handleSideSelect("tails")}
                >
                  <div className={cn(
                    "w-32 h-32 rounded-full overflow-hidden border-4 mb-2 transition-colors",
                    selectedSide === "tails" ? "border-solpot-purple" : "border-transparent"
                  )}>
                    <Image
                      src="/images/coin-tails.png"
                      alt="Tails"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium">Tails</span>
                </button>
              </div>
            </div>

            {/* Create Game Button */}
            <Button
              className="bg-solpot-purple hover:bg-solpot-purple/90 text-white w-full py-6 text-lg"
              disabled={!selectedSide || betAmount <= 0}
              onClick={handleCreateGame}
            >
              Create Game
            </Button>
          </Card>
        </div>

        {/* Right Column - Open Games */}
        <div>
          <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 h-full gradient-border">
            <div className="p-4 border-b border-solpot-gray-dark/50 flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solpot-purple mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.75c-1.148 0-2.278-.08-3.4-.237l.18.632c.917.202 1.717.432 2.462.667.766.235 1.479.352 2.138.352.659 0 1.37-.117 2.134-.352.746-.235 1.548-.465 2.464-.667l.183-.633c-1.122.158-2.252.237-3.4.237H12Zm0 6.75c-.74 0-1.462-.085-2.175-.262-.713-.174-1.425-.383-2.137-.626C7.044 18.32 6.33 18.01 5.67 17.62c-.66-.39-1.232-.812-1.725-1.261a9.036 9.036 0 0 1-1.386-1.76C2.156 13.9 1.891 13.15 1.55 12.4c-.34-.75-.473-1.707-.4-2.875.073-1.168.296-2.066.668-2.694.372-.63.837-1.044 1.395-1.238.558-.194 1.162-.291 1.812-.291l14.15.002c.65 0 1.25.097 1.808.291.559.194 1.021.607 1.393 1.237.372.629.595 1.526.67 2.694.074 1.168-.058 2.125-.394 2.875-.336.75-.602 1.5-1.004 2.25-.402.75-.877 1.353-1.389 1.76-.51.408-1.087.83-1.726 1.26-.64.433-1.352.77-2.14 1.014-.788.244-1.497.463-2.134.626-.637.172-1.364.264-2.177.264h-.07l-.02-.025h.02Z" fill="currentColor" />
                </svg>
                <span className="text-white font-medium">Open Games</span>
              </div>
              <div className="text-solpot-purple text-sm font-medium">
                {openGames.length}
              </div>
            </div>

            <div className="max-h-[480px] overflow-y-auto p-2">
              {openGames.map((game) => (
                <div key={game.id} className="flex items-center p-3 hover:bg-white/5 rounded-md transition-colors">
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <Image
                      src={game.side === "heads" ? "/images/coin-heads.png" : "/images/coin-tails.png"}
                      alt={game.side}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="flex items-center flex-1 min-w-0">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <img
                            src={game.avatar}
                            alt={game.username}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                        </Avatar>
                        <span className="font-medium text-white truncate">{game.username}</span>
                        <span className="ml-2 text-xs bg-solpot-purple px-1.5 rounded">{game.level}</span>
                      </div>
                      <div className="text-sm font-medium text-white ml-8 mt-1">{game.amount}</div>
                    </div>

                    <Button
                      className="ml-auto bg-solpot-green hover:bg-solpot-green/90 text-white text-xs h-8 rounded-md"
                      onClick={() => handleJoinGame(game)}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-solpot-gray-dark/50">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Pending Games: {openGames.length}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
