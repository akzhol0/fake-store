import { useEffect, useState } from "react";
import MyCartIcon from "../UI/my-icons/MyCartIcon"
import MyHeartIcon from "../UI/my-icons/MyHeartIcon"

function Header() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loadedCategories, setLoadedCategories] = useState<boolean>(false);

  const getAllCategories = async () => {
    const url = 'https://api.escuelajs.co/api/v1/categories';
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      for (let i = 0; i < 5; i++) {
        setCategories((prev: any) => [...prev, result[i].name])
      }
      setLoadedCategories(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    !loadedCategories && getAllCategories()
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[70%] flex justify-between py-4 border-b border-gray-200">
        <div className="flex gap-4">
          <span className="text-gray-400 cursor-pointer">Rus</span>
          <span className="text-red-500 cursor-pointer">Eng</span>
        </div>
        <ul className="flex gap-5 text-gray-400">
          <li className="cursor-pointer">Discounts</li>
          <li className="cursor-pointer">Delivery</li>
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">Installment</li>
          <div className="ms-5 cursor-pointer">Dark Mode</div>
        </ul>
      </div>
      <div className="w-[70%] flex justify-between py-4">
        <div className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-red-500 rounded-[50%]">
            <img src="/img/cart.png" width={25} height={25} />
          </div>
          <p className="text-[35px] text-red-500 font-bold">iBuy</p>
        </div>
        <div className="flex items-center relative">
          <input className="w-[400px] h-full ps-4 border border-gray-400 rounded-md" type="text" placeholder="Search for an item" />
          <span className="absolute right-1">
            <div className="w-[45px] h-[45px] flex justify-center items-center rounded-md bg-red-500 cursor-pointer">
              <img src="/img/s.png" width={25} height={25} />
            </div>
          </span>
        </div>
        <div className="flex items-center gap-5 text-[18px]">
          <span className="cursor-pointer flex items-center gap-2"> <img className=" mt-[-2px]" src="/img/user.png" width={24} height={24} /> Profile</span>
          <span className="cursor-pointer flex items-center gap-2"> <span className="w-[22px] h-[22px] mt-[-1px]"><MyHeartIcon /></span> Saved</span>
          <span className="cursor-pointer flex items-center gap-2"> <span className="w-[22px] h-[22px] mt-[-1px]"><MyCartIcon /></span> Cart</span>
        </div>
      </div>
      <div className="w-[70%] flex gap-2">
        {loadedCategories ? (
          categories.map((item) => (
            <span key={item} className="cursor-pointer py-2 px-4 bg-[#e7e7e7] rounded-lg">{item}</span>
          ))
        ) : (
          <p>Empty...</p>
        )}
      </div>
    </div>
  )
}

export default Header