import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import { getCategoryColor } from '@/utils/utils';
import dayjs from 'dayjs';

type BlogPostItemProps = {
  post: Post;
};

const BlogPostItem = ({ post }: BlogPostItemProps) => {
  return (
    <Link
      href={`/blog/${post._raw.flattenedPath}`}
      className="w-full flex flex-col p-2">
      <p className="text-base mb-2 text-main font-medium">
        {dayjs(post.date).format('YYYY-MM-DD')}
      </p>
      <h2 className="text-2xl font-bold hover:text-main 0 mb-2 hover:transition-colors hover:duration-500 dark:text-white dark:hover:text-main">
        {post.title}
      </h2>
      <p className="text-gray-600 text-lg dark:text-gray-400">{post.description}</p>
      <ul className="flex gap-2 mt-2 flex-wrap">
        {post.category.map(category => (
          <li
            key={category}
            className={`py-1 px-2 rounded-2xl text-sm text-white ${getCategoryColor(category)}`}>
            {category}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default BlogPostItem;
