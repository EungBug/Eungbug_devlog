'use client';

type Props = {
  categories: string[];
  selected: string;
  onClickCategory: (category: string) => void;
};

const CategoryTab = ({ categories, selected, onClickCategory }: Props) => {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-gray-800 sm:self-center sm:text-center">
        🗂️ Category
      </h3>
      <ul className="flex sm:flex-col gap-2 flex-wrap sm:min-w-[120px] sm:items-end mb-5">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => onClickCategory(category)}
              className={`w-fit py-1 px-3 rounded-2xl  border-2 border-category text-gray-900 text-sm hover:bg-category hover:text-white transition-colors duration-150 ${
                selected === category ? 'bg-category text-white' : ''
              }`}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTab;
