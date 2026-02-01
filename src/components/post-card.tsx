"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Post, User } from "@/lib/types";
import { formatCount, timeAgo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PostCard({ post, author }: { post: Post; author: User }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [saved, setSaved] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState("");

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  function addComment() {
    if (!commentText.trim()) return;
    setComments((prev) => [commentText.trim(), ...prev]);
    setCommentText("");
  }

  return (
    <article className="border-b">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <Link href={`/${author.username}`}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.username} />
            <AvatarFallback>{author.displayName[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link
            href={`/${author.username}`}
            className="text-sm font-semibold hover:underline"
          >
            {author.username}
          </Link>
        </div>
        <button className="text-neutral-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="18" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full">
        <Image
          src={post.imageUrl}
          alt={post.caption}
          fill
          className="object-cover"
          sizes="(max-width: 512px) 100vw, 512px"
          onDoubleClick={toggleLike}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button onClick={toggleLike} className="transition-transform active:scale-125">
            <Heart
              size={24}
              strokeWidth={1.5}
              className={cn(
                "transition-colors",
                liked ? "fill-red-500 text-red-500" : "text-black"
              )}
            />
          </button>
          <button onClick={() => setShowCommentInput((s) => !s)}>
            <MessageCircle size={24} strokeWidth={1.5} />
          </button>
          <button>
            <Send size={24} strokeWidth={1.5} />
          </button>
        </div>
        <button onClick={() => setSaved((s) => !s)} className="transition-transform active:scale-110">
          <Bookmark
            size={24}
            strokeWidth={1.5}
            className={cn(saved && "fill-black")}
          />
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 text-sm font-semibold">
        {formatCount(likesCount)} likes
      </div>

      {/* Caption */}
      <div className="px-4 pt-1 text-sm">
        <Link href={`/${author.username}`} className="font-semibold">
          {author.username}
        </Link>{" "}
        {post.caption}
      </div>

      {/* Comments count */}
      {post.commentsCount > 0 && (
        <button
          className="px-4 pt-1 text-sm text-neutral-500"
          onClick={() => setShowCommentInput((s) => !s)}
        >
          View all {post.commentsCount} comments
        </button>
      )}

      {/* User-added comments */}
      {comments.length > 0 && (
        <div className="px-4 pt-1 space-y-1">
          {comments.map((c, i) => (
            <p key={i} className="text-sm">
              <span className="font-semibold">you</span> {c}
            </p>
          ))}
        </div>
      )}

      {/* Comment input */}
      {showCommentInput && (
        <div className="flex items-center gap-2 px-4 py-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addComment()}
            className="flex-1 text-sm outline-none"
          />
          {commentText.trim() && (
            <button
              onClick={addComment}
              className="text-sm font-semibold text-blue-500"
            >
              Post
            </button>
          )}
        </div>
      )}

      {/* Timestamp */}
      <div className="px-4 pb-3 pt-1 text-[10px] uppercase text-neutral-400">
        {timeAgo(post.createdAt)}
      </div>
    </article>
  );
}
