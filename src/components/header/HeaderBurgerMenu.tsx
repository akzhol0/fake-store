import { useState } from "react";

function HeaderBurgerMenu() {
  const [headerBurgerTop, setHeaderBurgerTop] = useState<boolean>(false);
  
  return (
    <div className="w-full flex justify-between py-4 border-b border-gray-200 px-5 md:px-0">
      <div className={headerBurgerTop ? `block md:hidden fixed top-[57px] right-0 w-[350px] h-full bg-black z-10 duration-[.3s]`
        : 'block md:hidden fixed top-[57px] right-[-400px] w-[350px] h-full bg-black z-10 duration-[.3s]'}>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-400 cursor-pointer">Rus</span>
        <span className="text-red-500 cursor-pointer">Eng</span>
      </div>
      <div onClick={() => setHeaderBurgerTop(headerBurgerTop ? false : true)} className="flex md:hidden w-[30px] h-[20px] cursor-pointer flex-col justify-between">
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
      </div>
      <ul className="hidden md:flex gap-5 text-gray-400">
        <li className="cursor-pointer">Discounts</li>
        <li className="cursor-pointer">Delivery</li>
        <li className="cursor-pointer">Help</li>
        <li className="cursor-pointer">Installment</li>
        <div className="ms-5 cursor-pointer">Dark Mode</div>
      </ul>
    </div>
  );
}

export default HeaderBurgerMenu;
