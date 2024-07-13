import { Link } from "react-router-dom";
import { contextData } from "../../context/logic";
import { useContext } from "react";

type HeaderCategoriesProps = {
  loadedCategories: boolean;
  categories: any;
}

function HeaderCategories({ loadedCategories, categories }: HeaderCategoriesProps) {
  const { setSearchBar } = useContext(contextData)

  return (
    <div className="w-full flex gap-2 overflow-x-scroll">
      {loadedCategories ? (
        categories.map((item: any) => (
          <Link className="flex items-center rounded-lg text-center py-2 px-2 md:px-4 bg-[#e4e4e4]" key={item} to={`/category/${item}`}>
            <span onClick={() => setSearchBar('')} className="cursor-pointer">
              {item}
            </span>
          </Link>
        ))
      ) : (
        <p className="py-2">Loading...</p>
      )}
    </div>
  );
}

export default HeaderCategories;
