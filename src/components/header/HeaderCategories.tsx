type HeaderCategoriesProps = {
  loadedCategories: boolean;
  categories: any;
}

function HeaderCategories({ loadedCategories, categories }: HeaderCategoriesProps) {
  return (
    <div className="w-full scrscr flex gap-2 overflow-x-scroll">
      {loadedCategories ? (
        categories.map((item: any) => (
          <span key={item} className="cursor-pointer py-2 px-4 bg-[#e7e7e7] rounded-lg">{item}</span>
        ))
      ) : (
        <p className="py-2">Loading...</p>
      )}
    </div>
  );
}

export default HeaderCategories;
