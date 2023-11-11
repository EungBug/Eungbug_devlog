'use client';

import { allPosts } from '@/.contentlayer/generated';
import { useState } from 'react';
import BlogPostItem from './BlogPostItem';
import CategoryTab from './CategoryTab';

const ALL_POST = 'ALL_POST';

type Props = {
  categories: string[];
};

const PostList = ({ categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered =
    selected === ALL_POST ? allPosts : allPosts.filter(post => post.category.includes(selected));

  return (
    <div className="flex flex-col sm:flex-row-reverse gap-5">
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
