import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

type BlogPostItemProps = {
  post: Post;
};

const BlogPostItem = ({ post }: BlogPostItemProps) => {
  return (
    <Link href={`/blog/${post._raw.flattenedPath}`} className="w-full flex flex-col p-2">
      <p className="text-base mb-2 text-main font-medium">{post.date}</p>
      <h2 className="text-2xl font-bold hover:text-main 0 mb-2 hover:transition-colors hover:duration-500">{post.title}</h2>
      <p className="text-gray-600 text-lg">{post.description}</p>
    </Link>
  );
};

export default BlogPostItem;