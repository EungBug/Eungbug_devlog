import { allPosts } from 'contentlayer/generated';
import Introduce from '@/components/Introduce';
import RecentPosts from '@/components/RecentPosts';

const Home = () => {
  // 최근 게시물 5개만 조회
  const recentPosts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-10">
      <Introduce />
      <RecentPosts posts={recentPosts} />
    </div>
  );
};

export default Home;
