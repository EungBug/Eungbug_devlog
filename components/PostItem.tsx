import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/blog/${post._raw.flattenedPath}`} className="w-full flex flex-col p-2">
      <p className="text-sm mb-2 text-main font-medium">{post.date}</p>
      <h2 className="text-xl font-bold hover:text-main 0 mb-2 hover:transition-colors hover:duration-500">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
    </Link>
  );
};

export default PostItem;