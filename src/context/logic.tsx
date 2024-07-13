import React, { createContext, useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
  token: any;
  setToken: (arg0: any) => void;
  savedProducts: any;
  addSaveditem: (arg0: any) => void;
  deleteSaveditem: (arg0: number) => void;
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
  const [token, setToken] = useState(cookies.get('auth-token'));
  const [savedProducts, setSavedProducts] = useState<any>([]);

  // add to saved
  const addSaveditem = (item: any) => {
    const addIds: number[] = [];
    savedProducts.map((item: any) => addIds.push(item.id))

    if (!addIds.includes(item.id)) {
      setSavedProducts((prev: any) => [...prev, item]);
    }
  }

  // delete  saved
  const deleteSaveditem = (id: number) => {
    setSavedProducts(savedProducts.filter((item: any) => item.id !== id));
  }

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
      setCartProducts((prev: any) => [...prev, { ...item, quantity: 1 }]);
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
      token,
      setToken,
      savedProducts,
      addSaveditem,
      deleteSaveditem,
    }}>
      {children}
    </contextData.Provider>
  );
}