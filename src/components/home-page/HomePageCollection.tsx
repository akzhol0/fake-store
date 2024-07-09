import { useParams } from "react-router";
import HomePageItem from "./HomePageItem";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";
import { contextData } from "../../context/logic";
import { useContext} from "react";

type HomePageCollectionProps = {
  loaded: boolean;
  products: any;
}

function HomePageCollection({ loaded, products }: HomePageCollectionProps) {
  const { categoryTitle } = useParams();
  const { searchBar } = useContext(contextData);

  return (
    <>
      <div className='flex flex-col py-5'>
        <strong className='text-[40px]'>Popular {categoryTitle ? categoryTitle : 'goods'} of the month</strong>
        <small className='text-[15px] text-gray-400'>According to the search engine results, review on the platform, and number of likes on social medias</small>
      </div>
      {loaded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 place-items-center">
          {
            products.filter((item: any) => (
              item.title.toLowerCase().includes(searchBar.toLowerCase()))
            ).map((item: any) => (
              <HomePageItem key={item.id} item={item} />
            ))
          }
        </div>
      ) : (
        <div className='h-[200px] flex justify-center items-center'>
          <MyLoading></MyLoading>
        </div>
      )}
    </>
  );
}

export default HomePageCollection;
