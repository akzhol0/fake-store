import { useContext, useEffect, useState } from "react";
import MyCartIcon from "../UI/my-icons/MyCartIcon"
import MyHeartIcon from "../UI/my-icons/MyHeartIcon"
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderCategories from "./HeaderCategories";
import { Link } from "react-router-dom";
import MyModal from "../UI/my-modals/MyModal";
import { contextData } from "../../context/logic";

function Header() {
  const { modal, setSearchBar } = useContext(contextData);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadedCategories, setLoadedCategories] = useState<boolean>(false);
  const [tempSearchBar, setTempSearchBar] = useState<string>('');

  const getAllCategories = async () => {
    const url = 'https://fakestoreapi.com/products/categories';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setCategories(result)
      setLoadedCategories(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    !loadedCategories && getAllCategories();
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] xl:w-[70%]">
        <HeaderBurgerMenu />
        <div className="w-full flex justify-between py-4 px-4">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-red-500 rounded-[50%]">
              <img src="/img/cart.png" width={25} height={25} />
            </div>
            <Link to='/'><p className="text-[35px] text-red-500 font-bold">iBuy</p></Link>
          </div>
          <div className="hidden md:flex items-center relative">
            <input
              onChange={(e) => setTempSearchBar(e.target.value)}
              value={tempSearchBar}
              className="md:w-[350px] xl:w-[500px] h-full ps-4 border border-gray-400 rounded-md"
              type="text"
              placeholder="Search for an item" />
            <span onClick={() => setSearchBar(tempSearchBar)} className="absolute right-1">
              <Link to='/all-products'>
                <div className="w-[45px] h-[45px] flex justify-center items-center rounded-md bg-red-500 cursor-pointer">
                  <img src="/img/s.png" width={25} height={25} />
                </div>
              </Link>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-5 text-[18px]">
            <span className="cursor-pointer flex items-center gap-2"> <img className=" mt-[-2px]" src="/img/user.png" width={24} height={24} /> Profile</span>
            <span className="cursor-pointer flex items-center gap-2"> <span className="w-[22px] h-[22px] mt-[-1px]"><MyHeartIcon /></span> Saved</span>
            <Link to='/cart'><span className="cursor-pointer flex items-center gap-2"> <span className="w-[22px] h-[22px] mt-[-1px]"><MyCartIcon /></span> Cart</span></Link>
          </div>
        </div>
        <div className="flex md:hidden items-center relative">
          <input
            onChange={(e) => setTempSearchBar(e.target.value)}
            value={tempSearchBar}
            className="w-full h-[60px] mb-4 ps-4 z-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Search for an item" />
          <Link to='/all-products'>
            <span className="absolute right-2 bottom-[24px]">
              <div className="w-[45px] h-[45px] flex justify-center items-center rounded-md bg-red-500 cursor-pointer">
                <img src="/img/s.png" width={25} height={25} />
              </div>
            </span>
          </Link>
        </div>
        <HeaderCategories categories={categories} loadedCategories={loadedCategories} />
        {modal && (
          <MyModal></MyModal>
        )}
      </div>
    </div>
  )
}

export default Header