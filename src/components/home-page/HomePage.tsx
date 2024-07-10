import { useContext, useEffect, useState } from 'react';
import '../../assets/styles/styles.scss'
import HomePageCollection from './HomePageCollection';
import { Link } from 'react-router-dom';
import { contextData } from '../../context/logic';

function HomePage() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  const {langIsEng} = useContext(contextData);

  useEffect(() => {
    !loaded && getProducsts()
  }, [])

  const getProducsts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      for (let i = 0; i < 8; i++) {
        setProducts((prev: any) => [...prev, result[i]])
      }
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="w-[95%] xl:w-[70%] h-auto">
        <div className="w-full h-auto">
          <img className='w-full h-auto mt-[20px]' src="/img/bg.png" />
        </div>
      </div>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageCollection loaded={loaded} products={products}/>
        <div className='w-full flex justify-center py-5'>
          <Link to='/all-products'>
            <button className='py-2 px-5 border border-gray-500 rounded-lg hover:bg-gray-200 duration-200'>
              {langIsEng ? (
                'All popular goods'
              ) : (
                'Все популярные товары'
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage