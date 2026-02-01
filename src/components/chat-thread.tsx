"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ChatThread({
  initialMessages,
  currentUserId,
}: {
  initialMessages: Message[];
  currentUserId: string;
}) {
  const [messageList, setMessageList] = useState(initialMessages);
  const [text, setText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messageList.length]);

  function sendMessage() {
    if (!text.trim()) return;
    const newMsg: Message = {
      id: `new-${Date.now()}`,
      senderId: currentUserId,
      text: text.trim(),
      sentAt: new Date().toISOString(),
    };
    setMessageList((prev) => [...prev, newMsg]);
    setText("");
  }

  function formatTime(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messageList.map((msg) => {
          const isMine = msg.senderId === currentUserId;
          return (
            <div
              key={msg.id}
              className={cn("flex", isMine ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-2",
                  isMine
                    ? "bg-blue-500 text-white"
                    : "bg-neutral-100 text-black"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <p
                  className={cn(
                    "mt-0.5 text-[10px]",
                    isMine ? "text-white/60" : "text-neutral-400"
                  )}
                >
                  {formatTime(msg.sentAt)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="border-t bg-white px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Message..."
            className="rounded-full"
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={sendMessage}
            disabled={!text.trim()}
            className="shrink-0"
          >
            <Send size={20} className={cn(text.trim() ? "text-blue-500" : "text-neutral-300")} />
          </Button>
        </div>
      </div>
    </div>
  );
}
