'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const COMMENTS_ID = 'comments-container';

export const Comments = () => {
  const { resolvedTheme } = useTheme();
  const utterancesTheme = resolvedTheme === 'light' ? 'github-light' : 'github-dark';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'EungBug/eungbug_devlog_comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', utterancesTheme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, []);

  return <div id={COMMENTS_ID} />;
};

export default Comments;
