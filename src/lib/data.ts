import { User, Post, Story, Reel, Conversation, Message } from "./types";

export const currentUser: User = {
  id: "0",
  username: "you",
  displayName: "Your Name",
  avatar: "https://i.pravatar.cc/150?u=you",
  bio: "Living my best life",
  followersCount: 543,
  followingCount: 321,
  postsCount: 42,
};

export const users: User[] = [
  {
    id: "1",
    username: "travel_jane",
    displayName: "Jane Doe",
    avatar: "https://i.pravatar.cc/150?u=travel_jane",
    bio: "Exploring the world one city at a time",
    followersCount: 12400,
    followingCount: 890,
    postsCount: 234,
  },
  {
    id: "2",
    username: "foodie_mike",
    displayName: "Mike Chen",
    avatar: "https://i.pravatar.cc/150?u=foodie_mike",
    bio: "Food photographer & ramen enthusiast",
    followersCount: 8920,
    followingCount: 445,
    postsCount: 189,
  },
  {
    id: "3",
    username: "sarah_creates",
    displayName: "Sarah Kim",
    avatar: "https://i.pravatar.cc/150?u=sarah_creates",
    bio: "Digital artist | Illustrator | Dreamer",
    followersCount: 34500,
    followingCount: 612,
    postsCount: 567,
  },
  {
    id: "4",
    username: "alex.fit",
    displayName: "Alex Rivera",
    avatar: "https://i.pravatar.cc/150?u=alex.fit",
    bio: "Personal trainer | Health & wellness",
    followersCount: 15600,
    followingCount: 330,
    postsCount: 412,
  },
  {
    id: "5",
    username: "urban_lens",
    displayName: "David Park",
    avatar: "https://i.pravatar.cc/150?u=urban_lens",
    bio: "Street photography | NYC",
    followersCount: 22100,
    followingCount: 198,
    postsCount: 890,
  },
  {
    id: "6",
    username: "emma.wanders",
    displayName: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?u=emma.wanders",
    bio: "Adventure seeker | Mountain lover",
    followersCount: 9800,
    followingCount: 567,
    postsCount: 156,
  },
  {
    id: "7",
    username: "chef_marco",
    displayName: "Marco Rossi",
    avatar: "https://i.pravatar.cc/150?u=chef_marco",
    bio: "Italian chef | Farm to table",
    followersCount: 45200,
    followingCount: 234,
    postsCount: 678,
  },
  {
    id: "8",
    username: "luna.style",
    displayName: "Luna Zhang",
    avatar: "https://i.pravatar.cc/150?u=luna.style",
    bio: "Fashion designer | Minimalist",
    followersCount: 67800,
    followingCount: 412,
    postsCount: 345,
  },
  {
    id: "9",
    username: "nature_nate",
    displayName: "Nate Brooks",
    avatar: "https://i.pravatar.cc/150?u=nature_nate",
    bio: "Wildlife photographer | National Geographic",
    followersCount: 128000,
    followingCount: 89,
    postsCount: 1234,
  },
  {
    id: "10",
    username: "mia.music",
    displayName: "Mia Johnson",
    avatar: "https://i.pravatar.cc/150?u=mia.music",
    bio: "Singer-songwriter | New album out now",
    followersCount: 256000,
    followingCount: 156,
    postsCount: 789,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    authorId: "1",
    imageUrl: "https://picsum.photos/seed/post1/1080/1080",
    caption: "Beautiful sunset at the beach. Nothing beats this view.",
    likesCount: 1243,
    commentsCount: 48,
    createdAt: "2026-01-30T18:00:00Z",
  },
  {
    id: "2",
    authorId: "2",
    imageUrl: "https://picsum.photos/seed/post2/1080/1080",
    caption: "Best ramen in town. The broth was incredible!",
    likesCount: 892,
    commentsCount: 23,
    createdAt: "2026-01-30T14:30:00Z",
  },
  {
    id: "3",
    authorId: "3",
    imageUrl: "https://picsum.photos/seed/post3/1080/1080",
    caption: "New digital painting. Spent 12 hours on this one.",
    likesCount: 3456,
    commentsCount: 112,
    createdAt: "2026-01-30T10:00:00Z",
  },
  {
    id: "4",
    authorId: "4",
    imageUrl: "https://picsum.photos/seed/post4/1080/1080",
    caption: "Morning workout done. Consistency is key.",
    likesCount: 567,
    commentsCount: 34,
    createdAt: "2026-01-29T08:00:00Z",
  },
  {
    id: "5",
    authorId: "5",
    imageUrl: "https://picsum.photos/seed/post5/1080/1080",
    caption: "City lights after the rain. NYC never disappoints.",
    likesCount: 2890,
    commentsCount: 67,
    createdAt: "2026-01-29T22:00:00Z",
  },
  {
    id: "6",
    authorId: "6",
    imageUrl: "https://picsum.photos/seed/post6/1080/1080",
    caption: "Summit reached! The view from up here is unreal.",
    likesCount: 1567,
    commentsCount: 89,
    createdAt: "2026-01-29T15:00:00Z",
  },
  {
    id: "7",
    authorId: "7",
    imageUrl: "https://picsum.photos/seed/post7/1080/1080",
    caption: "Fresh pasta, made from scratch. Simple ingredients, incredible flavor.",
    likesCount: 4521,
    commentsCount: 156,
    createdAt: "2026-01-28T12:00:00Z",
  },
  {
    id: "8",
    authorId: "8",
    imageUrl: "https://picsum.photos/seed/post8/1080/1080",
    caption: "New collection dropping next week. Stay tuned.",
    likesCount: 8934,
    commentsCount: 234,
    createdAt: "2026-01-28T16:00:00Z",
  },
  {
    id: "9",
    authorId: "9",
    imageUrl: "https://picsum.photos/seed/post9/1080/1080",
    caption: "Caught this fox at golden hour. Patience pays off.",
    likesCount: 12300,
    commentsCount: 345,
    createdAt: "2026-01-28T07:00:00Z",
  },
  {
    id: "10",
    authorId: "10",
    imageUrl: "https://picsum.photos/seed/post10/1080/1080",
    caption: "Studio session vibes. Something special is coming.",
    likesCount: 23400,
    commentsCount: 890,
    createdAt: "2026-01-27T20:00:00Z",
  },
  {
    id: "11",
    authorId: "1",
    imageUrl: "https://picsum.photos/seed/post11/1080/1080",
    caption: "Morning coffee in Paris. This city never gets old.",
    likesCount: 2100,
    commentsCount: 56,
    createdAt: "2026-01-27T09:00:00Z",
  },
  {
    id: "12",
    authorId: "3",
    imageUrl: "https://picsum.photos/seed/post12/1080/1080",
    caption: "Character design for my upcoming project.",
    likesCount: 4567,
    commentsCount: 134,
    createdAt: "2026-01-27T11:00:00Z",
  },
  {
    id: "13",
    authorId: "5",
    imageUrl: "https://picsum.photos/seed/post13/1080/1080",
    caption: "The quiet streets at 5am. My favorite time to shoot.",
    likesCount: 1890,
    commentsCount: 45,
    createdAt: "2026-01-26T05:00:00Z",
  },
  {
    id: "14",
    authorId: "7",
    imageUrl: "https://picsum.photos/seed/post14/1080/1080",
    caption: "Sunday brunch special. Truffle eggs on sourdough.",
    likesCount: 3200,
    commentsCount: 98,
    createdAt: "2026-01-26T11:00:00Z",
  },
  {
    id: "15",
    authorId: "9",
    imageUrl: "https://picsum.photos/seed/post15/1080/1080",
    caption: "Eagle in flight. One of my best shots this year.",
    likesCount: 18900,
    commentsCount: 567,
    createdAt: "2026-01-25T14:00:00Z",
  },
  {
    id: "16",
    authorId: "2",
    imageUrl: "https://picsum.photos/seed/post16/1080/1080",
    caption: "Street food tour in Bangkok. This pad thai was incredible.",
    likesCount: 1456,
    commentsCount: 67,
    createdAt: "2026-01-25T18:00:00Z",
  },
  {
    id: "17",
    authorId: "4",
    imageUrl: "https://picsum.photos/seed/post17/1080/1080",
    caption: "New PR on deadlift! Hard work pays off.",
    likesCount: 789,
    commentsCount: 45,
    createdAt: "2026-01-24T17:00:00Z",
  },
  {
    id: "18",
    authorId: "6",
    imageUrl: "https://picsum.photos/seed/post18/1080/1080",
    caption: "Lake reflection at dawn. Nature is the best artist.",
    likesCount: 2345,
    commentsCount: 78,
    createdAt: "2026-01-24T06:00:00Z",
  },
  {
    id: "19",
    authorId: "8",
    imageUrl: "https://picsum.photos/seed/post19/1080/1080",
    caption: "Behind the scenes at fashion week.",
    likesCount: 6789,
    commentsCount: 189,
    createdAt: "2026-01-23T15:00:00Z",
  },
  {
    id: "20",
    authorId: "10",
    imageUrl: "https://picsum.photos/seed/post20/1080/1080",
    caption: "Acoustic set at the rooftop bar last night. Magical evening.",
    likesCount: 34500,
    commentsCount: 1234,
    createdAt: "2026-01-23T23:00:00Z",
  },
];

export const stories: Story[] = [
  { id: "s1", userId: "3", imageUrl: "https://picsum.photos/seed/story1/1080/1920", createdAt: "2026-01-31T08:00:00Z" },
  { id: "s2", userId: "1", imageUrl: "https://picsum.photos/seed/story2/1080/1920", createdAt: "2026-01-31T07:30:00Z" },
  { id: "s3", userId: "5", imageUrl: "https://picsum.photos/seed/story3/1080/1920", createdAt: "2026-01-31T07:00:00Z" },
  { id: "s4", userId: "7", imageUrl: "https://picsum.photos/seed/story4/1080/1920", createdAt: "2026-01-31T06:30:00Z" },
  { id: "s5", userId: "10", imageUrl: "https://picsum.photos/seed/story5/1080/1920", createdAt: "2026-01-31T06:00:00Z" },
  { id: "s6", userId: "8", imageUrl: "https://picsum.photos/seed/story6/1080/1920", createdAt: "2026-01-31T05:30:00Z" },
  { id: "s7", userId: "4", imageUrl: "https://picsum.photos/seed/story7/1080/1920", createdAt: "2026-01-31T05:00:00Z" },
  { id: "s8", userId: "9", imageUrl: "https://picsum.photos/seed/story8/1080/1920", createdAt: "2026-01-31T04:30:00Z" },
  { id: "s9", userId: "2", imageUrl: "https://picsum.photos/seed/story9/1080/1920", createdAt: "2026-01-31T04:00:00Z" },
  { id: "s10", userId: "6", imageUrl: "https://picsum.photos/seed/story10/1080/1920", createdAt: "2026-01-31T03:30:00Z" },
];

export const reels: Reel[] = [
  { id: "r1", authorId: "3", posterUrl: "https://picsum.photos/seed/reel1/1080/1920", caption: "Speed painting a dragon. 30 seconds of magic.", audioName: "Epic Vibes - Studio Mix", likesCount: 45600, commentsCount: 890 },
  { id: "r2", authorId: "7", posterUrl: "https://picsum.photos/seed/reel2/1080/1920", caption: "How to make perfect carbonara in 60 seconds", audioName: "Italian Kitchen - Cooking Beats", likesCount: 23400, commentsCount: 567 },
  { id: "r3", authorId: "4", posterUrl: "https://picsum.photos/seed/reel3/1080/1920", caption: "5 exercises you should be doing every day", audioName: "Pump It Up - Gym Mix", likesCount: 12300, commentsCount: 345 },
  { id: "r4", authorId: "10", posterUrl: "https://picsum.photos/seed/reel4/1080/1920", caption: "Unreleased track snippet. What do you think?", audioName: "Original Sound - mia.music", likesCount: 89000, commentsCount: 4500 },
  { id: "r5", authorId: "5", posterUrl: "https://picsum.photos/seed/reel5/1080/1920", caption: "NYC subway stories - episode 47", audioName: "City Ambient - Urban Sounds", likesCount: 5670, commentsCount: 234 },
  { id: "r6", authorId: "8", posterUrl: "https://picsum.photos/seed/reel6/1080/1920", caption: "Styling a capsule wardrobe with 10 pieces", audioName: "Trending Audio - Fashion Week", likesCount: 34500, commentsCount: 1200 },
  { id: "r7", authorId: "9", posterUrl: "https://picsum.photos/seed/reel7/1080/1920", caption: "Close encounter with a grizzly bear", audioName: "Nature Sounds - Wild", likesCount: 67800, commentsCount: 2300 },
  { id: "r8", authorId: "1", posterUrl: "https://picsum.photos/seed/reel8/1080/1920", caption: "Hidden gem cafe in Tokyo. You need to visit.", audioName: "Lo-fi Tokyo - Chill Beats", likesCount: 8900, commentsCount: 456 },
  { id: "r9", authorId: "6", posterUrl: "https://picsum.photos/seed/reel9/1080/1920", caption: "Paragliding over the Swiss Alps", audioName: "Freedom - Adventure Mix", likesCount: 15600, commentsCount: 678 },
  { id: "r10", authorId: "2", posterUrl: "https://picsum.photos/seed/reel10/1080/1920", caption: "Rating every dumpling spot in Chinatown", audioName: "Foodie Beats - Taste Tour", likesCount: 7800, commentsCount: 345 },
];

export const conversations: Conversation[] = [
  { id: "c1", participantIds: ["0", "3"], lastMessage: "Love your latest artwork!", lastMessageAt: "2026-01-31T10:30:00Z", unreadCount: 2 },
  { id: "c2", participantIds: ["0", "1"], lastMessage: "When are you visiting next?", lastMessageAt: "2026-01-31T09:15:00Z", unreadCount: 0 },
  { id: "c3", participantIds: ["0", "7"], lastMessage: "That recipe was amazing, thanks!", lastMessageAt: "2026-01-30T22:00:00Z", unreadCount: 1 },
  { id: "c4", participantIds: ["0", "10"], lastMessage: "Can't wait for the album drop!", lastMessageAt: "2026-01-30T18:45:00Z", unreadCount: 0 },
  { id: "c5", participantIds: ["0", "5"], lastMessage: "Great shots from last night", lastMessageAt: "2026-01-29T16:20:00Z", unreadCount: 0 },
];

export const messages: Record<string, Message[]> = {
  c1: [
    { id: "m1", senderId: "3", text: "Hey! Did you see my latest piece?", sentAt: "2026-01-31T10:00:00Z" },
    { id: "m2", senderId: "0", text: "Yes! The colors are incredible", sentAt: "2026-01-31T10:05:00Z" },
    { id: "m3", senderId: "3", text: "Thanks! Took me about 15 hours", sentAt: "2026-01-31T10:10:00Z" },
    { id: "m4", senderId: "0", text: "Wow, the detail shows. What brushes did you use?", sentAt: "2026-01-31T10:15:00Z" },
    { id: "m5", senderId: "3", text: "Mostly custom ones I made. I can share the pack!", sentAt: "2026-01-31T10:20:00Z" },
    { id: "m6", senderId: "3", text: "Love your latest artwork!", sentAt: "2026-01-31T10:30:00Z" },
  ],
  c2: [
    { id: "m7", senderId: "1", text: "Just landed in Barcelona!", sentAt: "2026-01-31T08:00:00Z" },
    { id: "m8", senderId: "0", text: "No way! How's the weather?", sentAt: "2026-01-31T08:30:00Z" },
    { id: "m9", senderId: "1", text: "Perfect. 22 degrees and sunny", sentAt: "2026-01-31T08:45:00Z" },
    { id: "m10", senderId: "0", text: "So jealous. Send pics!", sentAt: "2026-01-31T09:00:00Z" },
    { id: "m11", senderId: "1", text: "When are you visiting next?", sentAt: "2026-01-31T09:15:00Z" },
  ],
  c3: [
    { id: "m12", senderId: "0", text: "Made your carbonara recipe last night", sentAt: "2026-01-30T20:00:00Z" },
    { id: "m13", senderId: "7", text: "How did it turn out?", sentAt: "2026-01-30T20:30:00Z" },
    { id: "m14", senderId: "0", text: "Incredible! Best pasta I've ever made", sentAt: "2026-01-30T21:00:00Z" },
    { id: "m15", senderId: "7", text: "That recipe was amazing, thanks!", sentAt: "2026-01-30T22:00:00Z" },
  ],
  c4: [
    { id: "m16", senderId: "10", text: "Just finished mixing the new single", sentAt: "2026-01-30T17:00:00Z" },
    { id: "m17", senderId: "0", text: "When can we hear it?!", sentAt: "2026-01-30T17:30:00Z" },
    { id: "m18", senderId: "10", text: "Dropping next Friday! You'll be the first to know", sentAt: "2026-01-30T18:00:00Z" },
    { id: "m19", senderId: "0", text: "Can't wait for the album drop!", sentAt: "2026-01-30T18:45:00Z" },
  ],
  c5: [
    { id: "m20", senderId: "5", text: "Check out these shots from the Brooklyn Bridge", sentAt: "2026-01-29T15:00:00Z" },
    { id: "m21", senderId: "0", text: "The lighting is perfect. What lens?", sentAt: "2026-01-29T15:30:00Z" },
    { id: "m22", senderId: "5", text: "35mm f/1.4. My go-to for street work", sentAt: "2026-01-29T16:00:00Z" },
    { id: "m23", senderId: "0", text: "Great shots from last night", sentAt: "2026-01-29T16:20:00Z" },
  ],
};

export function getUserById(id: string): User | undefined {
  if (id === "0") return currentUser;
  return users.find((u) => u.id === id);
}

export function getUserByUsername(username: string): User | undefined {
  if (username === "you") return currentUser;
  return users.find((u) => u.username === username);
}

export function getPostsByAuthor(authorId: string): Post[] {
  return posts.filter((p) => p.authorId === authorId);
}

export function formatCount(count: number): string {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w`;
}
