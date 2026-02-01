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
