"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

type PlayerEntry = {
  id: string;
  username: string;
  level: number;
  avatar: string;
  amount: number;
  chance: number;
};

export function JackpotGame() {
  const [betAmount, setBetAmount] = useState(0.1);
  const [jackpotValue, setJackpotValue] = useState(5.957);
  const [timeRemaining, setTimeRemaining] = useState("00:30");
  const [playerEntries, setPlayerEntries] = useState<PlayerEntry[]>([
    {
      id: "1",
      username: "Fomomofo",
      level: 16,
      avatar: "https://ext.same-assets.com/3674931769/3114666522.png",
      amount: 1,
      chance: 16.79
    },
    {
      id: "2",
      username: "ZorroOnSol",
      level: 11,
      avatar: "https://ext.same-assets.com/3674931769/3156756350.jpeg",
      amount: 3.1,
      chance: 52.01
    },
    {
      id: "3",
      username: "Evansofweb",
      level: 5,
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
      amount: 0.2,
      chance: 3.35
    },
    {
      id: "4",
      username: "Bighomie",
      level: 7,
      avatar: "https://ext.same-assets.com/3674931769/3855435725.svg",
      amount: 0.4,
      chance: 6.71
    }
  ]);

  const increaseBet = () => {
    setBetAmount(prev => parseFloat((prev + 0.01).toFixed(2)));
  };

  const decreaseBet = () => {
    if (betAmount > 0.01) {
      setBetAmount(prev => parseFloat((prev - 0.01).toFixed(2)));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pt-20 md:pt-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold airstrike-font text-white">Jackpot</h1>
        <p className="text-gray-400 mt-2">Winner takes all...</p>
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

            {/* Jackpot Status */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-1">Jackpot Value</div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-solpot-purple mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="currentColor" />
                  </svg>
                  <div className="text-2xl font-bold text-white">{jackpotValue}</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-400 text-sm mb-1">Your Chance</div>
                <div className="text-2xl font-bold text-white">
                  {betAmount > 0 ? `${((betAmount / (jackpotValue + betAmount)) * 100).toFixed(2)}%` : '0.00%'}
                </div>
              </div>
            </div>

            {/* Time Remaining */}
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-1 text-center">Time Remaining</div>
              <div className="text-2xl font-bold text-white text-center">{timeRemaining}</div>
            </div>

            {/* Place Bet Button */}
            <Button
              className="bg-solpot-purple hover:bg-solpot-purple/90 text-white w-full py-6 text-lg"
            >
              Place Bet
            </Button>

            {/* Progress Timer */}
            <div className="mt-8">
              <div className="relative flex items-center justify-center mb-3">
                <div className="absolute left-0 right-0 border-t border-dashed border-solpot-gray/30" />
                <div className="bg-solpot-black/80 px-3 z-10 text-gray-400 text-sm">Mining Block</div>
              </div>

              <div className="h-2 w-full bg-solpot-gray-dark/50 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-solpot-purple" style={{ width: '60%' }} />
              </div>

              <div className="text-center text-gray-400 text-sm">
                EOS Block: <span className="text-white font-medium">428651994</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Players */}
        <div>
          <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 h-full gradient-border">
            <div className="p-4 border-b border-solpot-gray-dark/50 flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solpot-purple mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.75c-1.148 0-2.278-.08-3.4-.237l.18.632c.917.202 1.717.432 2.462.667.766.235 1.479.352 2.138.352.659 0 1.37-.117 2.134-.352.746-.235 1.548-.465 2.464-.667l.183-.633c-1.122.158-2.252.237-3.4.237H12Zm0 6.75c-.74 0-1.462-.085-2.175-.262-.713-.174-1.425-.383-2.137-.626C7.044 18.32 6.33 18.01 5.67 17.62c-.66-.39-1.232-.812-1.725-1.261a9.036 9.036 0 0 1-1.386-1.76C2.156 13.9 1.891 13.15 1.55 12.4c-.34-.75-.473-1.707-.4-2.875.073-1.168.296-2.066.668-2.694.372-.63.837-1.044 1.395-1.238.558-.194 1.162-.291 1.812-.291l14.15.002c.65 0 1.25.097 1.808.291.559.194 1.021.607 1.393 1.237.372.629.595 1.526.67 2.694.074 1.168-.058 2.125-.394 2.875-.336.75-.602 1.5-1.004 2.25-.402.75-.877 1.353-1.389 1.76-.51.408-1.087.83-1.726 1.26-.64.433-1.352.77-2.14 1.014-.788.244-1.497.463-2.134.626-.637.172-1.364.264-2.177.264h-.07l-.02-.025h.02Zm0-2.25c-.725 0-1.42-.09-2.08-.275-.664-.185-1.247-.437-1.753-.756a5.536 5.536 0 0 1-1.256-1.02 5.833 5.833 0 0 1-.85-1.186 6.566 6.566 0 0 1-.525-1.262 6.571 6.571 0 0 1-.184-1.257c0-.42.042-.815.125-1.196.083-.381.232-.725.444-1.031.213-.306.487-.55.825-.731.337-.181.737-.275 1.2-.28l8.256.003c.462.005.863.1 1.201.281.338.181.612.425.824.731.213.306.361.65.445 1.03.083.382.125.777.125 1.197 0 .42-.062.84-.184 1.257a6.56 6.56 0 0 1-.527 1.262 5.823 5.823 0 0 1-.849 1.185 5.53 5.53 0 0 1-1.256 1.02c-.505.32-1.09.571-1.75.757-.66.186-1.356.275-2.08.275h-.133l.002-.003h.13Zm-.581-9.75c-1.475 0-2.725-.526-3.75-1.582C7.644 5.11 7.131 3.896 7.13 2.525L8.631 2.5c0 .975.366 1.823 1.1 2.541.733.718 1.607 1.078 2.625 1.078 1.017 0 1.891-.36 2.625-1.078.733-.718 1.1-1.566 1.1-2.54l1.5.024c0 1.37-.513 2.585-1.538 3.642-1.025 1.056-2.274 1.583-3.75 1.583h-.875Z" fill="currentColor" />
                </svg>
                <span className="text-white font-medium">Players</span>
              </div>
              <div className="text-gray-400 text-sm">
                Round: <span className="text-white font-medium">3282</span>
              </div>
            </div>

            <div className="max-h-[480px] overflow-y-auto p-2">
              {playerEntries.map((player) => (
                <div key={player.id} className="flex items-center p-3 hover:bg-white/5 rounded-md transition-colors">
                  <Avatar className="h-9 w-9 mr-3">
                    <img
                      src={player.avatar}
                      alt={player.username}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <span className="font-medium text-white truncate">{player.username}</span>
                      <span className="ml-2 text-xs bg-solpot-purple px-1.5 rounded">{player.level}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="text-sm font-medium text-white">{player.amount}</div>
                      <div className="ml-auto text-xs text-gray-400">
                        Chance: <span className="text-gray-300">{player.chance.toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-solpot-gray-dark/50">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Total Players: {playerEntries.length}</span>
                <span>Total Wagered: {jackpotValue}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Previous Round Winner */}
      <div className="mt-8">
        <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-5 gradient-border">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 rounded-full bg-solpot-purple flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C8.8 15 6 14.3 6 13V11.9C6 11.5 6.2 11.2 6.5 11C7.6 11.8 9.7 12.3 12 12.3C14.3 12.3 16.4 11.8 17.5 11C17.8 11.2 18 11.5 18 11.9V13C18 14.3 15.2 15 12 15ZM12 21C8.8 21 6 20.3 6 19V17.9C6 17.5 6.2 17.2 6.5 17C7.6 17.8 9.7 18.3 12 18.3C14.3 18.3 16.4 17.8 17.5 17C17.8 17.2 18 17.5 18 17.9V19C18 20.3 15.2 21 12 21ZM12 9C8.8 9 6 8.3 6 7V5.9C6 5.5 6.2 5.2 6.5 5C7.6 5.8 9.7 6.3 12 6.3C14.3 6.3 16.4 5.8 17.5 5C17.8 5.2 18 5.5 18 5.9V7C18 8.3 15.2 9 12 9ZM12 3C15.2 3 18 3.7 18 5S15.2 7 12 7C8.8 7 6 6.3 6 5S8.8 3 12 3Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Last Winner</div>
              <div className="flex items-center mt-1">
                <Avatar className="h-6 w-6 mr-2">
                  <img
                    src="https://ext.same-assets.com/3674931769/3983350000.png"
                    alt="Winner"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </Avatar>
                <span className="font-medium text-white">Dilly</span>
                <span className="ml-2 text-xs bg-solpot-purple px-1.5 rounded">15</span>
              </div>
              <div className="flex items-center mt-1">
                <div className="text-sm text-gray-400">
                  Won: <span className="text-solpot-green font-medium">6.66 SOL</span>
                </div>
                <div className="ml-4 text-sm text-gray-400">
                  Chance: <span className="text-white">28.52%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
