"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusSquare, Film, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/feed", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/create", label: "Create", icon: PlusSquare },
  { href: "/reels", label: "Reels", icon: Film },
  { href: "/you", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {tabs.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1 transition-colors",
                isActive ? "text-black" : "text-neutral-400"
              )}
            >
              <Icon
                size={24}
                strokeWidth={isActive ? 2.5 : 1.5}
                fill={isActive && href === "/feed" ? "currentColor" : "none"}
              />
              <span className="text-[10px]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
