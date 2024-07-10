import React, { createContext, useState } from "react";

type ContextProps = {
  cartProducts: any;
  addCartItem: (arg0: any) => any;
  calculateResult: () => React.ReactNode;
  deleteItemCart: (arg0: number) => void;
  check: boolean;
  setCheck: (arg0: boolean) => void;
  modal: boolean;
  setModal: (arg0: boolean) => void;
  searchBar: string;
  setSearchBar: (arg0: string) => void;
  langIsEng: boolean;
  setLangIsEng: (arg0: boolean) => void;
};

export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {
  const [check, setCheck] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<string>('');
  const [langIsEng, setLangIsEng] = useState<boolean>(true);

  // add cart item
  const addCartItem = (item: any) => {
    const addIds: number[] = [];
    cartProducts.map((item: any) => addIds.push(item.id))

    if (addIds.includes(item.id)) {
      cartProducts.map((itemProd: any) => {
        if (item.id === itemProd.id) {
          itemProd.quantity += 1;
        }
      });
    } else {
      setCartProducts((prev: any) => [...prev, {...item, quantity: 1}]);
    }
  }

  // delete cart item
  function deleteItemCart(itemId: number) {
    cartProducts.map((item: any) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          setCartProducts(cartProducts.filter((item: any) => item.id !== itemId));
        }
      }
    });
  }

  // calculate result
  const calculateResult = () => {
    let result = 0;

    cartProducts.forEach((item: any) => {
      result += Number(item.price * item.quantity);
    })

    return result;
  }

  return (
    <contextData.Provider value={{
      cartProducts,
      addCartItem,
      calculateResult,
      deleteItemCart,
      check,
      setCheck,
      modal,
      setModal,
      searchBar,
      setSearchBar,
      langIsEng,
      setLangIsEng,
    }}>
      {children}
    </contextData.Provider>
  );
}