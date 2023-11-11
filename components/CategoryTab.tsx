'use client';

type Props = {
  categories: string[];
  selected: string;
  onClickCategory: (category: string) => void;
};

const CategoryTab = ({ categories, selected, onClickCategory }: Props) => {
  return (
    <ul className="flex sm:flex-col gap-2 flex-wrap sm:min-w-[100px] sm:items-end">
      {categories.map(category => (
        <li key={category}>
          <button
            onClick={() => onClickCategory(category)}
            className={`w-fit py-1 px-3 rounded-2xl  border border-category hover:bg-category hover:text-white transition-colors duration-150 ${
              selected === category ? 'bg-category text-white' : ''
            }`}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTab;
