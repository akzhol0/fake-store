import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import HomePageCollection from "../home-page/HomePageCollection";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";
import { contextData } from "../../context/logic";

function CategoryProd() {
  const {langIsEng} = useContext(contextData)
  const { categoryTitle } = useParams()
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);

  const getCategoryProducts = async () => {
    const url = `https://fakestoreapi.com/products/category/${categoryTitle}`;
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      setProducts(result)
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    setLoaded(false)
    getCategoryProducts()
  }, [categoryTitle])

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] 2xl:w-[70%]">
        <span onClick={() => navigate('/')}>
          <MyDefaultButton className="mt-2">{langIsEng ? 'Go Back' : 'Назад'}</MyDefaultButton>
        </span>
        {loaded ? (
          <HomePageCollection products={products} loaded={loaded} />
        ) : (
          <div className="h-[500px] text-center">
            <MyLoading></MyLoading>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryProd;
