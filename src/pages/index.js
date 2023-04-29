import Image from "next/image";
import { Inter } from "next/font/google";
import { PostCard, Categories, PostWidget, Header } from "../components";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing",
  },
  {
    title: "React TypeScript",
    excerpt: "Learn React Tailwindcss",
  },
];
export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map(post => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
