interface Category {
  tag: string;
  color: string;
}

// 필요한 카테고리들 추가
export const categories: Category[] = [
  { tag: 'react', color: 'bg-main' },
  { tag: 'TIL', color: 'bg-til' },
  { tag: 'Web', color: 'bg-web' },
  { tag: 'FE', color: 'bg-fe' },
  { tag: 'TDD', color: 'bg-tdd' },
  { tag: 'Flutter', color: 'bg-flutter' },
  { tag: 'Error', color: 'bg-error' }
];
