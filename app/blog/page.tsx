import { allPosts } from "@/.contentlayer/generated";
import BlogPostItem from "@/components/BlogPostItem";
import PostItem from "@/components/PostItem";

const Blog = () => {
  const posts = allPosts;

  return (
    <section>
      {/* 타이틀 */}
      <div className={'flex gap-5 text-3xl font-extrabold mb-10'}>
        <span>📒</span>
        <span>Blog</span>
      </div>
      {/* 게시글 목록 */}
      <div>
        {
          posts.map(post => <BlogPostItem post={post} key={post._id} />)
        }
      </div>
    </section>
  );
};

export default Blog;