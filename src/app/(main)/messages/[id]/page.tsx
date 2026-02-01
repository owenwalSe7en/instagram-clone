"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChatThread } from "@/components/chat-thread";
import { conversations, messages, getUserById } from "@/lib/data";

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const convo = conversations.find((c) => c.id === id);
  const convoMessages = messages[id] || [];

  const otherUserId = convo?.participantIds.find((pid) => pid !== "0");
  const otherUser = otherUserId ? getUserById(otherUserId) : null;

  if (!convo || !otherUser) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-lg font-semibold">Conversation not found</p>
        <Link href="/messages" className="text-blue-500">
          Back to messages
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100dvh-3.5rem-4.5rem)] flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <Link href="/messages">
          <ArrowLeft size={24} />
        </Link>
        <Avatar className="h-8 w-8">
          <AvatarImage src={otherUser.avatar} alt={otherUser.username} />
          <AvatarFallback>{otherUser.displayName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-semibold">{otherUser.displayName}</div>
          <div className="text-xs text-neutral-500">Active now</div>
        </div>
      </div>

      {/* Chat */}
      <ChatThread initialMessages={convoMessages} currentUserId="0" />
    </div>
  );
}
