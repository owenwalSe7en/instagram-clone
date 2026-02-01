"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Send, Music } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Reel, User } from "@/lib/types";
import { formatCount } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ReelCard({ reel, author }: { reel: Reel; author: User }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(reel.likesCount);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <div className="relative h-full w-full">
      {/* Background image */}
      <Image
        src={reel.posterUrl}
        alt={reel.caption}
        fill
        className="object-cover"
        priority
      />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Bottom left info */}
      <div className="absolute bottom-6 left-4 right-16 z-10">
        <Link
          href={`/${author.username}`}
          className="flex items-center gap-2"
        >
          <Avatar className="h-8 w-8 border border-white/50">
            <AvatarImage src={author.avatar} alt={author.username} />
            <AvatarFallback className="text-xs">
              {author.displayName[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-white">
            {author.username}
          </span>
        </Link>
        <p className="mt-2 text-sm text-white/90 line-clamp-2">
          {reel.caption}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-white/70">
          <Music size={12} />
          <span className="text-xs truncate">{reel.audioName}</span>
        </div>
      </div>

      {/* Right side actions */}
      <div className="absolute bottom-8 right-3 z-10 flex flex-col items-center gap-5">
        <button
          onClick={toggleLike}
          className="flex flex-col items-center gap-1 transition-transform active:scale-125"
        >
          <Heart
            size={28}
            strokeWidth={1.5}
            className={cn(
              "text-white",
              liked && "fill-red-500 text-red-500"
            )}
          />
          <span className="text-xs text-white">
            {formatCount(likesCount)}
          </span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MessageCircle size={28} strokeWidth={1.5} className="text-white" />
          <span className="text-xs text-white">
            {formatCount(reel.commentsCount)}
          </span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Send size={28} strokeWidth={1.5} className="text-white" />
        </button>
      </div>
    </div>
  );
}
