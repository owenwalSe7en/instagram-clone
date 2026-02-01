import { StoriesTray } from "@/components/stories-tray";
import { PostCard } from "@/components/post-card";
import { posts, getUserById } from "@/lib/data";

export default function FeedPage() {
  return (
    <div>
      <StoriesTray />
      <div>
        {posts.map((post) => {
          const author = getUserById(post.authorId);
          if (!author) return null;
          return <PostCard key={post.id} post={post} author={author} />;
        })}
      </div>
    </div>
  );
}
