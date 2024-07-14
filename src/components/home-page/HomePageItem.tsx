import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "../../context/logic";

type HomePageItemProps = {
  item: any;
}

function HomePageItem({ item }: HomePageItemProps) {
  const { addCartItem, addSaveditem, savedProducts, deleteSaveditem } = useContext(contextData);
  let isSaved;

  function foo() {
    const savedIds: number[] = [];
    savedProducts.map((item: any) => savedIds.push(item.id));
    return savedIds;
  }
  const savedItemsIds = foo();

  savedItemsIds.map((itemcb: number) => {
    if (itemcb === item.id) {
      isSaved = true;
    }
  })

  return (
    <div className="w-full h-[600px] md:h-[500px] relative">
      <div className="w-full h-[70%] overflow-hidden">
        <img className='w-full h-full object-contain hover:scale-105 duration-200 bg-white' src={item.image} />
      </div>
      <div className="w-full flex flex-col items-center">
        <span className='flex items-center gap-1 py-1 px-3 text-white bg-red-500 rounded-md my-1'>
          <p>{item.price} $</p>
          <sub className='line-through text-[#afafaf]'>{Math.round((item.price / 5) + item.price)}.99 $</sub>
        </span>
        <Link to={`/single-product/${item.id}`}>
          <p title={item.title} className='text-center h-[44px] overflow-y-hidden text-bold hover:underline'>{item.title}</p>
        </Link>
        <p>Category: {item.category}</p>
        <span className="absolute top-3 left-3 w-[30px] h-[30px] rounded flex justify-center items-center text-white bg-red-500">
          {item.rating.rate}
        </span>
        <span onClick={() => { addCartItem(item) }} className="w-[40px] h-[40px] p-1 absolute bottom-[153px] right-3 rounded bg-red-500 cursor-pointer">
          <img src="/img/cart.png" alt="cart picture" />
        </span>
        <span onClick={isSaved ? (
          () => deleteSaveditem(item.id)
        ) : (
          () => addSaveditem(item)
        )}
          className="w-[40px] h-[40px] p-1 absolute bottom-[153px] right-[55px] rounded bg-white cursor-pointer">
          <img className="w-full h-full" src={isSaved ? '/img/heart-fll.png' : "/img/heart-emptyw.png"} alt="cart picture" />
        </span>
      </div>
    </div>
  );
}

export default HomePageItem;
