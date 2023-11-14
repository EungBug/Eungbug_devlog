import { allPosts } from '@/.contentlayer/generated';
import PostList from '@/components/PostList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Eungbug 개발 블로그 포스트'
};

const Blog = () => {
  const posts = allPosts;

  // 카테고리 추출
  const categories: Set<string> = new Set(posts.map(post => post.category).flat());

  return (
    <section>
      {/* 타이틀 */}
      <div className="flex gap-5 text-3xl font-extrabold mb-10">
        <span>📒</span>
        <span>Blog</span>
      </div>
      <PostList
        posts={posts}
        categories={['All', ...Array.from(categories)]}
      />
    </section>
  );
};

export default Blog;
