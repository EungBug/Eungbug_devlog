import { categories } from '@/data/categories';

export const getCategoryColor = (name: string) => {
  const category = categories.find(c => c.tag === name);
  return category ? category.color : 'bg-tag';
};
