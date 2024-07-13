import { useContext, useEffect, useState } from 'react';
import '../../assets/styles/styles.scss'
import HomePageCollection from './HomePageCollection';
import { Link } from 'react-router-dom';
import { contextData } from '../../context/logic';
import HomePageUnitPost from './HomePageUnitPost';
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';
import HomePageGallery from './HomePageGallery';
import HomePageCollWrapper from './HomePageCollWrapper';

function HomePage() {
  const [firstPostLoaded, setFirstPostLoaded] = useState<boolean>(false);
  const [secondPostLoaded, setSecondPostLoaded] = useState<boolean>(false);
  const [firstPostProducts, setFirstPostProducts] = useState<any>([]);
  const [secondPostProducts, setSecondPostProducts] = useState<any>([]);
  const { langIsEng } = useContext(contextData);

  useEffect(() => {
    !firstPostLoaded && getFirstPostProducsts();
    !secondPostLoaded && getSecondPostProducsts();
  }, [])

  const getFirstPostProducsts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      for (let i = 0; i < 8; i++) {
        setFirstPostProducts((prev: any) => [...prev, result[i]])
      }
      setFirstPostLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  const getSecondPostProducsts = async () => {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      result.forEach((item: any) => {
        setSecondPostProducts((prev: any) => [...prev, item])
      })
      setSecondPostLoaded(true)
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
      <HomePageCollWrapper loaded={firstPostLoaded} products={firstPostProducts} />
      <div className="w-[95%] xl:w-[70%]">
        <HomePageUnitPost
          title={langIsEng ? en.homePage.titlefirst : ru.homePage.titlefirst}
          small1={langIsEng ? en.homePage.smallfirst1 : ru.homePage.smallfirst1}
          small2={langIsEng ? en.homePage.smallfirst2 : ru.homePage.smallfirst2}
          img="/img/hp-pic-4.png"
        />
      </div>
      <div className="hidden w-full md:flex flex-nowrap justify-center my-[50px]">
        <HomePageGallery />
      </div>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageUnitPost
          title={langIsEng ? en.homePage.titlesecond : ru.homePage.titlesecond}
          small1={langIsEng ? en.homePage.smallsecond1 : ru.homePage.smallsecond1}
          small2={langIsEng ? en.homePage.smallsecond2 : ru.homePage.smallsecond2}
          img="/img/hp-pic-5.png"
        />
      </div>
      <div className="w-[95%] xl:w-[70%]">
        <HomePageCollection loaded={secondPostLoaded} products={secondPostProducts} />
        <div className='w-full flex justify-center py-5'>
          <Link to='/category/electronics'>
            <button className='py-2 px-5 border border-gray-500 rounded-lg hover:bg-gray-200 duration-200'>
              {langIsEng ? 'All popular electronic goods' : 'Все популярные электронные товары'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage