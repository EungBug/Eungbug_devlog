import { Metadata } from 'next';
import { Post, allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import AnotherPostLink from '@/components/AnotherPostLink';
import Comments from '@/components/Comments';

type PostProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params: { slug } }: PostProps): Promise<Metadata> => {
  const post = allPosts.find(post => post._raw.flattenedPath === slug);
  return {
    title: post?.title,
    description: post?.description
  };
};

const PostPage = ({ params: { slug } }: PostProps) => {
  const post = allPosts.find(post => post._raw.flattenedPath === slug);
  // post가 없는 경우 예외처리
  if (!post) {
    notFound();
  }

  // MarkDown 컴포넌트 생성
  const MDXComponent = useMDXComponent(post.body.code);

  // 현재 포스트의 인덱스 찾기
  const postIndex = allPosts.findIndex(p => p._id === post?._id);
  // 이전글, 다음글 찾기
  const prevPost: Post | null = allPosts[postIndex - 1] ?? null;
  const nextPost: Post | null = allPosts[postIndex + 1] ?? null;

  return (
    <>
      {/* prose 옵션 => Markdown 같은 언어의 스타일 지정 */}
      <article className="prose max-w-full dark:prose-invert">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="font-medium text-right">{new Date(post.date).toDateString()}</p>
        <MDXComponent />
      </article>

      {/* 이전 게시글 / 다음 게시글 링크 */}
      {allPosts.length > 1 && (
        <AnotherPostLink
          prevPost={prevPost}
          nextPost={nextPost}
        />
      )}

      {/* 댓글 */}
      <Comments />
    </>
  );
};

// SSG 처리
export const generateStaticParams = async () => {
  const posts = allPosts;
  return posts.map(post => ({ slug: post._raw.flattenedPath }));
};

export default PostPage;
