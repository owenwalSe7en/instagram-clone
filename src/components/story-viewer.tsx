"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Story } from "@/lib/types";
import { getUserById, timeAgo } from "@/lib/data";

const STORY_DURATION = 5000;

export function StoryViewer({
  stories,
  startIndex,
  onClose,
}: {
  stories: Story[];
  startIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [progress, setProgress] = useState(0);

  const story = stories[currentIndex];
  const author = getUserById(story.userId);

  const goNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((i) => i + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, stories.length, onClose]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goNext();
          return 0;
        }
        return prev + 100 / (STORY_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [currentIndex, goNext]);

  function handleTap(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 3) {
      goPrev();
    } else {
      goNext();
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black" onClick={handleTap}>
      {/* Progress bars */}
      <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 px-2 pt-2">
        {stories.map((_, i) => (
          <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full bg-white transition-all duration-75 ease-linear"
              style={{
                width:
                  i < currentIndex
                    ? "100%"
                    : i === currentIndex
                      ? `${progress}%`
                      : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-4 left-0 right-0 z-10 flex items-center justify-between px-4 pt-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-white/50">
            <AvatarImage src={author?.avatar} alt={author?.username} />
            <AvatarFallback className="text-xs">
              {author?.displayName[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-white">
            {author?.username}
          </span>
          <span className="text-xs text-white/60">
            {timeAgo(story.createdAt)}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Story image */}
      <Image
        src={story.imageUrl}
        alt="Story"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
