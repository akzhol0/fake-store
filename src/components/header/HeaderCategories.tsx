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
    <div className="w-full scrscr flex gap-2 overflow-x-scroll">
      {loadedCategories ? (
        categories.map((item: any) => (
          <Link className="py-2" to={`/category/${item}`}>
            <span onClick={() => setSearchBar('')} key={item} className="cursor-pointer py-2 px-4 bg-[#e7e7e7] rounded-lg">
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
