import { useContext } from "react";
import HomePageCollection from "../home-page/HomePageCollection";
import { contextData } from "../../context/logic";

function SavedProducts() {
  const { savedProducts, langIsEng } = useContext(contextData);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[70%] min-h-[400px] border rounded-md">
        <h1 className="text-center my-2 font-semibold text-[25px]">{langIsEng ? 'Saved Products' : 'Сохраненные товары'}</h1>
        <HomePageCollection titleBoolean={false} loaded={true} products={savedProducts} />
      </div>
    </div>
  );
}

export default SavedProducts;
