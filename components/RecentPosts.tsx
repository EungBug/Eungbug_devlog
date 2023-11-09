import { Post } from "contentlayer/generated";
import Link from "next/link";
import PostItem from "./PostItem";


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
          posts.map(post => (<PostItem post={post} key={post._id} />))
        }
      </div>

    </section>
  );
};



export default RecentPosts;