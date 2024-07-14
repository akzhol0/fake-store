import { useContext } from "react";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import CartItem from "./CartItem";
import { contextData } from "../../context/logic";
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';

function Cart() {
  const { cartProducts, calculateResult, langIsEng } = useContext(contextData);
  const result = calculateResult();

  return (
    <div className="w-full flex justify-center">
      <div className="w-[700px] flex flex-col gap-2 px-2 md:px-0 mt-4">
        <div className="w-full min-h-[250px] flex flex-col items-center justify-center gap-y-1">
          {cartProducts.length ? (
            cartProducts.map((item: any) => (
              <CartItem key={item.id} item={item}></CartItem>
            ))
          ) : (
              <p className="w-full h-[250px] flex items-center justify-center border text-[20px]">{langIsEng ? en.cart.cartState : ru.cart.cartState}</p>
          )}
        </div>
        <div className="w-full h-[100px] flex gap-4 justify-center items-center text-white bg-[#1b1b1b] rounded-lg">
          <span className="text-[25px]">{langIsEng ? <p>{en.cart.result} {result} $</p> : <p>{ru.cart.result} {result} $</p>}</span>
          <MyDefaultButton>{langIsEng ? 'Buy' : 'Купить'}</MyDefaultButton>
        </div>
      </div>
    </div>
  );
}

export default Cart;
