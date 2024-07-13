import { useEffect, useState } from "react";
import HomePageCollection from "../home-page/HomePageCollection";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";

function AllProducts() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  
  const getProducts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      result.forEach((item: any) => {
        setProducts((prev: any) => [...prev, item])
      })
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    !loaded && getProducts()  
  }, [])

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] 2xl:w-[70%]">
        {loaded ? (
          <HomePageCollection titleBoolean={true} products={products} loaded={loaded} />
        ) : (
          <div className="h-[500px] text-center"><MyLoading></MyLoading></div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
