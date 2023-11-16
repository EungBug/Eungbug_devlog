import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

// 이전, 다음 게시글 링크
type AnotherPostLinkProps = {
  prevPost?: Post | null;
  nextPost?: Post | null;
};

const AnotherPostLink = ({ prevPost, nextPost }: AnotherPostLinkProps) => {
  const postNavBox =
    'group flex flex-col gap-2 p-[10px] rounded-lg border border-main hover:bg-main hover:transition-colors hover:duration-500 hover:border-transparent ';
  const navTitle =
    'text-xs group-hover:text-white group-hover:transition-colors group-hover:duration-500 dark:text-white';
  const postTitle =
    'break-words text-ellipsis overflow-hidden line-clamp-1 mb-1 group-hover:text-white group-hover:transition-colors group-hover:duration-500 dark:text-white';
  const navIcon =
    'text-lg group-hover:text-white group-hover:transition-colors group-hover:duration-500 dark:text-white';

  return (
    <div className="flex mt-20 gap-5">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost._raw.flattenedPath}`}
          className="flex-1">
          <div className={postNavBox}>
            <div className="flex gap-1 items-center">
              <BiChevronLeft className={navIcon} />
              <span className={navTitle}>이전 게시물</span>
            </div>
            <h4 className={postTitle}>{prevPost.title}</h4>
          </div>
        </Link>
      ) : (
        <div className="flex-1 shrink-0"></div>
      )}
      {nextPost ? (
        <Link
          href={`/blog/${nextPost._raw.flattenedPath}`}
          className="flex-1">
          <div className={postNavBox}>
            <div className="flex gap-1 items-center justify-end">
              <span className={navTitle}>다음 게시물</span>
              <BiChevronRight className={navIcon} />
            </div>
            <h4 className={`${postTitle} text-right`}>{nextPost.title}</h4>
          </div>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}
    </div>
  );
};

export default AnotherPostLink;
