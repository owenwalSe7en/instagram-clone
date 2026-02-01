"use client";

import { ReelCard } from "@/components/reel-card";
import { reels, getUserById } from "@/lib/data";

export default function ReelsPage() {
  return (
    <div className="fixed inset-0 z-30 flex snap-y snap-mandatory flex-col overflow-y-auto bg-black pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      {reels.map((reel) => {
        const author = getUserById(reel.authorId);
        if (!author) return null;
        return (
          <div key={reel.id} className="h-full w-full shrink-0 snap-start snap-always">
            <ReelCard reel={reel} author={author} />
          </div>
        );
      })}
    </div>
  );
}
