import { allPosts } from "@/.contentlayer/generated";
import { notFound } from 'next/navigation';

type PostProps = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: PostProps) => {
  const post = allPosts.find(post => post._raw.flattenedPath === slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      Post
    </div>
  );
};

// SSG 처리
export const generateStaticParams = async () => {
  const posts = allPosts;
  return posts.map(post => ({ slug: post._raw.flattenedPath }));
};

export default Post;