"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  username: string;
  level: number;
  message: string;
  timestamp: string;
  avatarUrl?: string;
  id: string;
};

const ChatMessage = ({ username, level, message, timestamp, avatarUrl, id }: ChatMessageProps) => {
  return (
    <div className="flex gap-2 py-1.5 px-4 hover:bg-white/5 transition-colors">
      <div className="flex-shrink-0">
        <Avatar className="h-6 w-6 rounded-full">
          <img
            src={avatarUrl || "https://ext.same-assets.com/3674931769/3855435725.svg"}
            alt={username}
            className="h-6 w-6 rounded-full object-cover"
          />
        </Avatar>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-white truncate">{username}</span>
          <span className="text-xs font-medium bg-solpot-purple px-1.5 rounded">{level}</span>
        </div>
        <p className="text-sm text-gray-300 break-words">{message}</p>
      </div>
      <div className="flex-shrink-0 text-xs text-gray-500">{timestamp}</div>
    </div>
  );
};

type ChatWinStreakProps = {
  username: string;
  streakCount: number;
};

const ChatWinStreak = ({ username, streakCount }: ChatWinStreakProps) => {
  return (
    <div className="flex items-center justify-center gap-1 py-3 px-4 bg-gradient-to-r from-purple-900/30 to-transparent">
      <img
        src="https://ext.same-assets.com/3674931769/4003116205.webp"
        alt="Streak"
        className="h-5 w-5"
      />
      <img
        src="https://ext.same-assets.com/3674931769/3855435725.svg"
        alt="User"
        className="h-5 w-5 rounded-full"
      />
      <span className="font-medium text-white">{username}</span>
      <span className="text-xs text-gray-300">is on a a {streakCount} Coinflip Win Streak</span>
    </div>
  );
};

const mockChatMessages: ChatMessageProps[] = [
  { id: "msg1", username: "ZorroOnSol", level: 12, message: "great.", timestamp: "08:14" },
  { id: "msg2", username: "SolpotMatt", level: 7, message: "LEZ GO", timestamp: "08:14" },
  { id: "msg3", username: "Hizuki", level: 7, message: "hi matt", timestamp: "08:14" },
  { id: "msg4", username: "Sly", level: 3, message: "lfg", timestamp: "08:14" },
  { id: "msg5", username: "OGKay", level: 2, message: "no fucking way", timestamp: "08:09" },
  { id: "msg6", username: "osa", level: 2, message: "RUN RUN FOMO", timestamp: "08:09" },
  { id: "msg7", username: "nerth", level: 2, message: "HELLO", timestamp: "08:10" },
  { id: "msg8", username: "osa", level: 2, message: "zorooo", timestamp: "08:10" },
  { id: "msg9", username: "osa", level: 2, message: "GG", timestamp: "08:10" },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className={cn(
      "fixed top-16 left-0 bottom-0 z-10 transition-all duration-300",
      isExpanded ? "w-64" : "w-12"
    )}>
      <Card className="h-full flex flex-col bg-solpot-black bg-opacity-90 border-0 rounded-none">
        <div className="flex items-center justify-between p-3 border-b border-solpot-gray-dark/50">
          <div className={cn("flex items-center gap-2", !isExpanded && "hidden")}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21ZM12 19C14.1217 19 16.1566 18.1571 17.6569 16.6569C19.1571 15.1566 20 13.1217 20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84285 6.84344 4 8.87827 4 11C4 13.1217 4.84285 15.1566 6.34315 16.6569C7.84344 18.1571 9.87827 19 12 19ZM7 13H17V11H7V13ZM10 17H14V15H10V17ZM10 8H14V6H10" fill="currentColor"/>
            </svg>
            <span className="font-medium text-white">Degen Chat</span>
          </div>

          <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded bg-solpot-purple text-xs font-medium">
            795
          </span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>

        {isExpanded && (
          <>
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-b border-solpot-gray-dark/50">
              <div className="flex items-center space-x-2">
                <div className="text-lg uppercase text-indigo-300 font-bold pixel-font tracking-wider">Live</div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C10.4 22 9.05833 21.6125 7.975 20.8375C6.89167 20.0625 6.05 19.0375 5.45 17.7625C4.85 16.4875 4.55 15.05 4.55 13.45C4.55 13.35 4.55 13.25 4.55 13.15C4.55 13.05 4.55833 12.95 4.575 12.85L11 14.25L8.4 7.60001L9.10001 4.90001C9.53334 5.06667 9.95 5.271 10.35 5.513C10.75 5.755 11.1333 6.02567 11.5 6.325L14 13.25L17.75 9.50001C17.9 9.83334 18.025 10.175 18.125 10.525C18.225 10.875 18.3 11.2417 18.35 11.625L14.25 15.75L17.9 17.75C17.6333 18.65 17.25 19.4583 16.75 20.175C16.25 20.8917 15.6667 21.5 15 22H12ZM12 20H13.925C14.275 19.75 14.5833 19.45 14.85 19.1C15.1167 18.75 15.35 18.3833 15.55 18L13.15 16.675L16.45 13.375C16.3833 12.9917 16.275 12.6333 16.125 12.3C15.975 11.9667 15.7833 11.65 15.55 11.35L12.35 14.55L10.3 8.85001L11.05 7.65001C10.8167 7.51667 10.575 7.39167 10.325 7.275C10.075 7.15833 9.81667 7.05 9.55 6.95001L9.15 8.35001L11.1 13.6L6.6 12.6C6.61667 13.9333 6.84167 15.1333 7.275 16.2C7.70833 17.2667 8.33333 18.1333 9.15 18.8C9.96667 19.4667 10.9167 19.8833 12 20Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-lg uppercase text-pink-400 font-bold pixel-font tracking-wider">Airdrop</div>
            </div>

            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-3 flex items-center justify-between">
              <div>
                <div className="text-lg uppercase text-pink-400 font-bold pixel-font tracking-wider">Airdrop Live</div>
                <div className="text-sm text-white font-medium">0.019</div>
              </div>
              <div className="text-lg text-white font-medium">25:53</div>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-solpot-gray-dark">
              <ChatWinStreak username="OGKay" streakCount={4} />

              {mockChatMessages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  username={msg.username}
                  level={msg.level}
                  message={msg.message}
                  timestamp={msg.timestamp}
                  avatarUrl={msg.avatarUrl}
                  id={msg.id}
                />
              ))}
            </div>

            <div className="p-3 border-t border-solpot-gray-dark/50">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  placeholder="Type Message Here..."
                  className="bg-solpot-gray-dark/50 border-solpot-gray-dark focus-visible:ring-solpot-purple/50"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <Button type="submit" size="icon" className="bg-solpot-purple hover:bg-solpot-purple/90">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="currentColor"/>
                  </svg>
                </Button>
              </form>

              <div className="mt-2 flex items-center justify-between">
                <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                  </svg>
                  <span>Chat Rules</span>
                </button>
                <span className="text-sm text-gray-400">160</span>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
