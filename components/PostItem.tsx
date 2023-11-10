import { Post } from "@/.contentlayer/generated";
import Link from "next/link";
import { getCategoryColor } from "@/utils/utils";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/blog/${post._raw.flattenedPath}`} className="w-full flex flex-col p-2">
      <p className="text-sm mb-2 text-main font-medium">{post.date}</p>
      <h2 className="text-xl font-bold hover:text-main 0 mb-2 hover:transition-colors hover:duration-500">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
      <div className="flex gap-1 mt-2">
        {
          post.category.map(category => (
            <span className={`py-1 px-2 rounded-2xl text-sm ${getCategoryColor(category)}`}>{category}</span>
          ))
        }
      </div>
    </Link>
  );
};

export default PostItem;