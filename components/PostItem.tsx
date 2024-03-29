import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import { getCategoryColor } from '@/utils/utils';
import dayjs from 'dayjs';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link
      href={`/blog/${post._raw.flattenedPath}`}
      className="w-full flex flex-col p-2">
      <p className="text-sm mb-2 text-main font-medium">{dayjs(post.date).format('YYYY-MM-DD')}</p>
      <h2 className="text-xl font-bold hover:text-main 0 mb-2 hover:transition-colors hover:duration-500 dark:text-white dark:hover:text-main">
        {post.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
      <ul className="flex flex-wrap gap-1 mt-2">
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

export default PostItem;
