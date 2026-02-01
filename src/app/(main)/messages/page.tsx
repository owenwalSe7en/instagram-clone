import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { conversations, getUserById, timeAgo } from "@/lib/data";

export default function MessagesPage() {
  return (
    <div>
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <Link href="/feed">
          <ArrowLeft size={24} />
        </Link>
        <span className="text-lg font-semibold">Messages</span>
      </div>
      <div>
        {conversations.map((convo) => {
          const otherUserId = convo.participantIds.find((id) => id !== "0");
          const otherUser = otherUserId ? getUserById(otherUserId) : null;
          if (!otherUser) return null;

          return (
            <Link
              key={convo.id}
              href={`/messages/${convo.id}`}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-neutral-50 active:bg-neutral-100"
            >
              <div className="relative">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={otherUser.avatar} alt={otherUser.username} />
                  <AvatarFallback>{otherUser.displayName[0]}</AvatarFallback>
                </Avatar>
                {convo.unreadCount > 0 && (
                  <div className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                    {convo.unreadCount}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {otherUser.displayName}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {timeAgo(convo.lastMessageAt)}
                  </span>
                </div>
                <p className="truncate text-sm text-neutral-500">
                  {convo.lastMessage}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
