import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import { contextData } from "../../context/logic";
import { useContext } from "react";

type CartItemProps = {
  item: any;
}

function CartItem({ item }: CartItemProps) {
  const { deleteItemCart, check, setCheck } = useContext(contextData);

  return (
    <div className="w-full h-[80px] flex justify-between items-center rounded-md">
      <div className="w-full h-[80px] flex gap-2 items-center justify-start rounded-md">
        <span className="w-[50px] md:w-[100px] h-full">
          <img className="w-full h-full object-contain" src={item.image} alt="prod-picture" />
        </span>
        <span className="w-[100px] md:w-[350px] h-[44px] flex overflow-y-hidden">
          <p>{item.title}</p>
        </span>
        {check ? <p>{item.quantity}</p> : <p>{item.quantity}</p>}
      </div>
      <p className="text-[20px] me-2 md:me-4">{item.price}$</p>
      <span onClick={() => { deleteItemCart(item.id); setCheck(check ? false : true)}}>
        <MyDefaultButton>Delete</MyDefaultButton>
      </span>
    </div>
  );
}

export default CartItem;
