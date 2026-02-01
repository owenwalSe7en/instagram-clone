import Image from "next/image";
import { posts } from "@/lib/data";

export default function ExplorePage() {
  return (
    <div>
      <div className="px-4 py-3 border-b">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg bg-neutral-100 px-4 py-2 text-sm outline-none placeholder:text-neutral-400"
        />
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {posts.map((post) => (
          <div key={post.id} className="relative aspect-square">
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
