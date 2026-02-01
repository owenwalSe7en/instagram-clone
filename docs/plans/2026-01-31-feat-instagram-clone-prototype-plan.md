---
title: "feat: Instagram Clone Prototype"
type: feat
date: 2026-01-31
---

# Instagram Clone Prototype

## Overview

Build a clickable Instagram clone prototype using Next.js 15 (App Router), shadcn/ui, and Tailwind CSS. Mobile-first, light theme, dummy data. The goal is to get something on screen fast that looks and feels like Instagram -- navigable, interactive, beautiful -- without any backend.

This is a **throwaway prototype**. Optimize for speed and visual fidelity, not architecture.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Components | shadcn/ui (install as needed) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Language | TypeScript |
| Images | picsum.photos (seeded), pravatar.cc (avatars) |
| State | Inline `useState` in components |
| Theme | Light only |

## Architecture

Flat and minimal. Extract components only when they exceed ~80 lines or are reused across pages.

```
src/
├── app/
│   ├── layout.tsx              # Root layout: font, metadata
│   ├── globals.css             # Tailwind + custom styles
│   ├── page.tsx                # Redirect to /feed
│   │
│   └── (main)/                 # Route group: shared bottom nav
│       ├── layout.tsx          # BottomNav + TopHeader wrapper
│       ├── feed/
│       │   └── page.tsx        # Stories tray + post cards (main screen)
│       ├── reels/
│       │   └── page.tsx        # Full-screen snap-scroll reels
│       ├── messages/
│       │   ├── page.tsx        # Conversation inbox
│       │   └── [id]/
│       │       └── page.tsx    # Chat thread
│       └── [username]/
│           └── page.tsx        # Profile page
│
├── components/
│   ├── ui/                     # shadcn/ui (installed on demand)
│   ├── bottom-nav.tsx          # Fixed bottom tab bar
│   ├── top-header.tsx          # Instagram-style header
│   ├── post-card.tsx           # Feed post (image, actions, caption, inline comments)
│   ├── stories-tray.tsx        # Horizontal scrollable story avatars
│   ├── story-viewer.tsx        # Full-screen story overlay with progress bars
│   ├── reel-card.tsx           # Single reel (poster image + action overlay)
│   └── chat-thread.tsx         # Message bubbles + input
│
├── lib/
│   ├── data.ts                 # ALL dummy data in one file
│   ├── types.ts                # User, Post, Story, Reel, Message, Conversation
│   └── utils.ts                # cn() helper
│
└── public/
    └── placeholder.jpg         # Fallback if external images fail
```

**~18 files** (excluding shadcn/ui components). No custom hooks directory, no services layer, no feature folders.

### shadcn/ui Components

Install as needed. Start with these and add more only when you hit a wall:

```
avatar button card input sheet scroll-area
```

That's 6. Add `tabs`, `dialog`, `dropdown-menu`, `skeleton` etc. only when a screen demands it.

### Key Decisions

- **No custom hooks.** `useState` inline in each component. State doesn't need to sync across pages for a throwaway prototype.
- **One data file.** All users, posts, stories, reels, messages in `lib/data.ts`. Easy to find, easy to change.
- **No desktop sidebar.** Mobile-first means mobile-only for v0. Desktop gets the same layout with more whitespace.
- **No notifications page.** Just a badge on the heart icon. Placeholder for later.
- **No create post page.** The "+" tab can show a "Coming soon" placeholder or a simple form that adds to local state.
- **Components stay flat.** `components/post-card.tsx`, not `components/feed/post-card.tsx`. Organize later if it gets messy.

## Screens

### 1. Feed (`/feed`) -- Primary Screen

The most important screen. Get this right first.

- **Top header:** "Instagram" text logo (or app name), heart icon (notifications), paper plane icon (links to `/messages`)
- **Stories tray:** Horizontal scroll of avatars with gradient rings. Tap to open story viewer (full-screen `Sheet` with progress bars, auto-advance 5s, tap left/right to navigate)
- **Post cards:** Scrollable feed of posts. Each card has:
  - User avatar + username row (links to `/{username}`)
  - Post image (1:1 aspect ratio, `next/image` with picsum.photos)
  - Action row: heart (toggles red + count), comment (opens inline or bottom sheet), share icon, bookmark (toggles filled)
  - Like count
  - Caption (username bold + text)
  - "View all N comments" text
- **All interactions use inline `useState`:** Liked state, bookmark state, comment list -- all local to the component instance

### 2. Reels (`/reels`)

- Full-viewport snap-scroll container (`h-dvh snap-y snap-mandatory overflow-y-auto`)
- Each reel: poster image (9:16 from picsum), bottom gradient overlay, username + caption at bottom-left, action buttons on right (heart, comment, share, audio)
- Reels layout can optionally hide the top header for immersion (keep bottom nav visible)
- Like toggles work inline

### 3. Messages (`/messages` + `/messages/[id]`)

- **Inbox:** List of conversation rows (avatar, name, last message preview, timestamp). Tap navigates to thread.
- **Thread:** Chat bubbles (sent = right-aligned bg-blue-500 text-white, received = left-aligned bg-gray-100). Fixed input + send button at bottom. New messages append to local state and scroll to bottom.

### 4. Profile (`/[username]`)

- Large avatar, display name, bio text
- Stats row: posts count | followers count | following count
- Follow/Unfollow button (toggles with `useState`)
- 3-column post grid (square thumbnails using `aspect-square` + `object-cover`)
- Tapping a grid item could open a detail view or just be a placeholder

## Dummy Data

All in `lib/data.ts`. One file, all arrays.

```typescript
// lib/data.ts
import { User, Post, Story, Reel, Conversation, Message } from './types';

export const currentUser: User = { id: '0', username: 'you', ... };

export const users: User[] = [
  { id: '1', username: 'travel_jane', displayName: 'Jane Doe', avatar: 'https://i.pravatar.cc/150?u=travel_jane', bio: 'Exploring the world', followersCount: 12400, followingCount: 890, postsCount: 234 },
  // ... 8-10 more users
];

export const posts: Post[] = [
  { id: '1', authorId: '1', imageUrl: 'https://picsum.photos/seed/post1/1080/1080', caption: 'Beautiful sunset at the beach', likesCount: 1243, commentsCount: 48, createdAt: '2026-01-28T10:00:00Z' },
  // ... 15-20 posts
];

export const stories: Story[] = [ ... ];  // 8-10 stories
export const reels: Reel[] = [ ... ];     // 8-10 reels
export const conversations: Conversation[] = [ ... ]; // 4-5 conversations
export const messages: Record<string, Message[]> = { ... }; // keyed by conversationId
```

**Image sources:**
- Avatars: `https://i.pravatar.cc/150?u={username}` (deterministic per username)
- Post images: `https://picsum.photos/seed/{postId}/1080/1080` (seeded, stable across refreshes)
- Reel posters: `https://picsum.photos/seed/reel{id}/1080/1920` (9:16)

## Types

```typescript
// lib/types.ts
export type User = {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
};

export type Post = {
  id: string;
  authorId: string;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
};

export type Story = {
  id: string;
  userId: string;
  imageUrl: string;
  createdAt: string;
};

export type Reel = {
  id: string;
  authorId: string;
  posterUrl: string;
  caption: string;
  audioName: string;
  likesCount: number;
  commentsCount: number;
};

export type Conversation = {
  id: string;
  participantIds: string[];
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  sentAt: string;
};
```

## Implementation Order

No phases. Build screen by screen, each one end-to-end:

### Step 1: Scaffolding + Feed

- `npx create-next-app@latest` with TypeScript, Tailwind, App Router, `src/` directory
- Install shadcn/ui: `npx shadcn@latest init`
- Add initial components: `npx shadcn@latest add avatar button card input sheet scroll-area`
- Configure `next.config.ts` remote image patterns for picsum.photos and pravatar.cc
- Create `lib/types.ts`, `lib/data.ts`, `lib/utils.ts`
- Build `components/bottom-nav.tsx` and `components/top-header.tsx`
- Create `app/(main)/layout.tsx` wiring up nav + header
- Build `components/post-card.tsx` with inline like/bookmark/comment state
- Build `components/stories-tray.tsx` (horizontal avatar scroll with gradient rings)
- Build `components/story-viewer.tsx` (full-screen Sheet with progress bars)
- Create `app/(main)/feed/page.tsx` assembling stories + posts
- **Milestone:** Feed page works. Stories open. Likes toggle. You can show this to someone.

**Files created:**
- `src/lib/types.ts`, `src/lib/data.ts`, `src/lib/utils.ts`
- `src/components/bottom-nav.tsx`, `src/components/top-header.tsx`
- `src/components/post-card.tsx`, `src/components/stories-tray.tsx`, `src/components/story-viewer.tsx`
- `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`
- `src/app/(main)/layout.tsx`, `src/app/(main)/feed/page.tsx`

### Step 2: Profile

- Build `app/(main)/[username]/page.tsx` with inline profile header, stats, grid
- Clicking a username in the feed navigates to their profile
- Follow/unfollow button toggles with `useState`
- 3-column grid shows the user's posts
- **Milestone:** Feed + Profile navigation loop works.

**Files created:**
- `src/app/(main)/[username]/page.tsx`

### Step 3: Reels

- Build `components/reel-card.tsx` (poster image, gradient overlay, action sidebar)
- Create `app/(main)/reels/page.tsx` with snap-scroll container
- Like toggles on each reel
- **Milestone:** Three main tabs (Feed, Reels, Profile) all working.

**Files created:**
- `src/components/reel-card.tsx`
- `src/app/(main)/reels/page.tsx`

### Step 4: Messages

- Create `app/(main)/messages/page.tsx` (conversation list with avatars and previews)
- Build `components/chat-thread.tsx` (bubbles + input)
- Create `app/(main)/messages/[id]/page.tsx` using chat-thread component
- Typing a message appends it to local state
- **Milestone:** All four main features working. Prototype is complete.

**Files created:**
- `src/app/(main)/messages/page.tsx`
- `src/app/(main)/messages/[id]/page.tsx`
- `src/components/chat-thread.tsx`

### Step 5: Polish (if time/energy permits)

- Smooth out spacing, typography, color consistency
- Add subtle hover/tap animations (Tailwind `transition`, `active:scale-95`)
- Test at 375px width (iPhone SE) and fix any overflow
- Add skeleton loading shimmer if any screen feels slow
- Add `Sheet` for comments if not already done
- Consider a simple "create post" placeholder on the "+" tab

## Acceptance Criteria

- [x] `npm run dev` launches the app and shows the feed
- [x] Bottom nav switches between Feed, Reels, Messages, and Profile tabs
- [x] Tapping a story avatar opens a full-screen viewer with progress bars
- [x] Posts show images, like/bookmark toggles work with visual feedback
- [x] Reels page snap-scrolls vertically through full-screen cards
- [x] Messages inbox lists conversations; tapping opens a chat thread
- [x] Chat thread shows bubbles; typing + sending appends a new message
- [x] Profile page shows avatar, bio, stats, post grid, follow button
- [x] Works correctly at 375px mobile width
- [x] No dead-end navigation (every screen links back or has tab nav)

## Risks

| Risk | Mitigation |
|---|---|
| picsum.photos or pravatar.cc down | Keep one `public/placeholder.jpg` as fallback |
| Snap-scroll jank on some browsers | Use `scroll-snap-type: y mandatory` + test on Chrome/Safari |
| State resets on refresh | Expected for throwaway prototype |
| Remote images need `next.config.ts` setup | Add `remotePatterns` for both domains in scaffolding step |

## References

- [shadcn/ui](https://ui.shadcn.com/docs/components) -- Avatar, Card, Sheet, ScrollArea, Button, Input
- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [Lucide Icons](https://lucide.dev)
- [Lorem Picsum](https://picsum.photos) -- seeded placeholder photos
- [Pravatar](https://pravatar.cc) -- deterministic avatars
- [trpc-insta](https://github.com/99Yash/trpc-insta) -- Next.js + shadcn Instagram clone reference
