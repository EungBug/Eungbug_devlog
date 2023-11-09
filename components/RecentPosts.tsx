import { Post } from "contentlayer/generated";
import Link from "next/link";


type RecentPostsProps = {
  posts: Post[];
};

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section>
      <div className={'flex gap-5 text-3xl font-extrabold mb-5'}>
        <span>📚</span>
        <span>최근 게시물</span>
      </div>
      {/* 게시글 목록 */}
      <div>
        {
          posts.map(post => (
            <Link href={`/blog/${post._id}`} className="w-full flex flex-col p-2">
              <p className="text-sm mb-2 text-main font-medium">{post.date}</p>
              <h2 className="text-xl font-bold hover:text-main 0 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </Link>
          ))
        }
      </div>

    </section>
  );
};



export default RecentPosts;