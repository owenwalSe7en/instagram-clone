"use client";

import Link from "next/link";
import { Heart, Send } from "lucide-react";

export function TopHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <Link href="/feed" className="text-xl font-semibold italic">
          Instagram
        </Link>
        <div className="flex items-center gap-5">
          <button className="relative">
            <Heart size={24} strokeWidth={1.5} />
          </button>
          <Link href="/messages">
            <Send size={24} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
