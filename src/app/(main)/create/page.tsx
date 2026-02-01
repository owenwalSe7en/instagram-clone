"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreatePage() {
  const [caption, setCaption] = useState("");
  const [shared, setShared] = useState(false);

  if (shared) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold">Post shared!</p>
        <p className="text-sm text-neutral-500">Your post has been shared (prototype mode)</p>
        <Button variant="outline" onClick={() => setShared(false)}>
          Create another
        </Button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-lg font-semibold mb-6">New Post</h1>

      {/* Image placeholder */}
      <div className="flex aspect-square w-full items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 mb-4">
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <ImagePlus size={48} strokeWidth={1} />
          <span className="text-sm">Tap to select a photo</span>
        </div>
      </div>

      {/* Caption */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full resize-none rounded-lg border p-3 text-sm outline-none focus:border-neutral-400"
        rows={3}
      />

      <Button
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => setShared(true)}
      >
        Share
      </Button>
    </div>
  );
}
