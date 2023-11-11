'use client';

import { useState } from 'react';
import { Post, allPosts } from '@/.contentlayer/generated';
import BlogPostItem from '@/components/BlogPostItem';
import CategoryTab from '@/components/CategoryTab';

const ALL_POST = 'All';

type Props = {
  posts: Post[];
  categories: string[];
};

const PostList = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered =
    selected === ALL_POST ? posts : posts.filter(post => post.category.includes(selected));

  return (
    <div className="flex flex-col sm:flex-row-reverse">
      <CategoryTab
        categories={categories}
        selected={selected}
        onClickCategory={setSelected}
      />
      {/* 게시글 목록 */}
      <div className="flex-1">
        {filtered.map(post => (
          <BlogPostItem
            post={post}
            key={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
