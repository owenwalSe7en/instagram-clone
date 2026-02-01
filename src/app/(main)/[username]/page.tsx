"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Grid3X3, Film, ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUserByUsername, getPostsByAuthor, formatCount, currentUser } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const user = getUserByUsername(username);
  const [following, setFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "reels">("posts");

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-lg font-semibold">User not found</p>
        <Link href="/feed" className="text-blue-500">
          Go back to feed
        </Link>
      </div>
    );
  }

  const isOwnProfile = user.id === currentUser.id;
  const userPosts = getPostsByAuthor(user.id);

  return (
    <div>
      {/* Back navigation */}
      <div className="flex items-center gap-4 px-4 py-3 border-b">
        <Link href="/feed">
          <ArrowLeft size={24} />
        </Link>
        <span className="text-lg font-semibold">{user.username}</span>
      </div>

      {/* Profile header */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="text-2xl">
              {user.displayName[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-1 justify-around text-center">
            <div>
              <div className="text-lg font-semibold">{user.postsCount}</div>
              <div className="text-xs text-neutral-500">posts</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {formatCount(user.followersCount)}
              </div>
              <div className="text-xs text-neutral-500">followers</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {formatCount(user.followingCount)}
              </div>
              <div className="text-xs text-neutral-500">following</div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-sm font-semibold">{user.displayName}</div>
          <div className="text-sm text-neutral-600">{user.bio}</div>
        </div>

        <div className="mt-4">
          {isOwnProfile ? (
            <Button variant="outline" className="w-full" size="sm">
              Edit profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                className={cn(
                  "flex-1",
                  following
                    ? "bg-neutral-100 text-black hover:bg-neutral-200"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                )}
                size="sm"
                onClick={() => setFollowing((f) => !f)}
              >
                {following ? "Following" : "Follow"}
              </Button>
              <Button variant="outline" className="flex-1" size="sm">
                Message
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-b">
        <button
          className={cn(
            "flex flex-1 items-center justify-center gap-1 py-3 transition-colors",
            activeTab === "posts"
              ? "border-b-2 border-black text-black"
              : "text-neutral-400"
          )}
          onClick={() => setActiveTab("posts")}
        >
          <Grid3X3 size={20} />
        </button>
        <button
          className={cn(
            "flex flex-1 items-center justify-center gap-1 py-3 transition-colors",
            activeTab === "reels"
              ? "border-b-2 border-black text-black"
              : "text-neutral-400"
          )}
          onClick={() => setActiveTab("reels")}
        >
          <Film size={20} />
        </button>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {userPosts.map((post) => (
          <div key={post.id} className="relative aspect-square">
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
        {userPosts.length === 0 && (
          <div className="col-span-3 py-20 text-center text-neutral-400">
            No posts yet
          </div>
        )}
      </div>
    </div>
  );
}
