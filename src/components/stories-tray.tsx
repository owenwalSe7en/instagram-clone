"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { stories, currentUser, getUserById } from "@/lib/data";
import { StoryViewer } from "@/components/story-viewer";

export function StoriesTray() {
  const [viewingIndex, setViewingIndex] = useState<number | null>(null);

  // "Your story" + other stories
  const storyUsers = stories.map((s) => getUserById(s.userId)!).filter(Boolean);

  return (
    <>
      <ScrollArea className="w-full border-b">
        <div className="flex gap-4 px-4 py-3">
          {/* Your Story */}
          <button className="flex flex-col items-center gap-1">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src={currentUser.avatar} alt="Your story" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white ring-2 ring-white">
                +
              </div>
            </div>
            <span className="w-16 truncate text-center text-[10px]">
              Your story
            </span>
          </button>

          {/* Other stories */}
          {storyUsers.map((user, i) => (
            <button
              key={stories[i].id}
              className="flex flex-col items-center gap-1"
              onClick={() => setViewingIndex(i)}
            >
              <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
                <div className="rounded-full bg-white p-[2px]">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} alt={user.username} />
                    <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <span className="w-16 truncate text-center text-[10px]">
                {user.username}
              </span>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {viewingIndex !== null && (
        <StoryViewer
          stories={stories}
          startIndex={viewingIndex}
          onClose={() => setViewingIndex(null)}
        />
      )}
    </>
  );
}
