import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import { contextData } from "../../context/logic";
import MyLoading from "../UI/myLoadingPerfs/MyLoading";
import ru from '../../text/ru/textRus';
import en from '../../text/en/textEng';

function SinglePage() {
  const { addCartItem, setModal, langIsEng } = useContext(contextData)
  const { id } = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [product, setProduct] = useState<any>([]);
  let navigate = useNavigate();

  const getSingleProd = async () => {
    const url = `https://fakestoreapi.com/products/${id}`
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()

      setProduct(result)
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    !loaded && getSingleProd()
  }, [])


  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] xl:w-[70%]">
        <div className="w-full my-2">
          <span onClick={() => navigate('/')}>
            <MyDefaultButton>
              {langIsEng ? 'Go Back': 'Назад'}
            </MyDefaultButton>
          </span>
        </div>
        {loaded ? (
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full md:w-[50%] md:h-[600px] relative overflow-hidden">
              <img className="w-full h-full object-contain bg-white" src={product.image} alt="picture-product" />
              <span className="absolute top-3 left-3 w-[30px] h-[30px] rounded flex justify-center items-center text-white bg-red-500">
                {product.rating.rate}
              </span>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="w-full flex flex-col item-center">
                <p title={product.title} className='text-[30px] text-bold'>{product.title}</p>
                <p className="text-[20px] -mt-2">Category: {product.category}</p>
                <p className="text-[20px] mt-4">Description: {product.description}</p>
                <span className='w-auto flex justify-center items-center gap-1 py-2 text-white text-[20px] bg-red-500 rounded-md my-1'>
                  <p>{product.price} $</p>
                  <sub className='line-through text-[#afafaf]'>{Math.round((product.price / 5) + product.price)}.99 $</sub>
                </span>
                <div onClick={() => { addCartItem(product); setModal(true) }}>
                  <MyDefaultButton className="w-full py-3 mt-2">{langIsEng ? en.singlePage.addToCart : ru.singlePage.addToCart}</MyDefaultButton>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center h-[400px]'><MyLoading></MyLoading></div>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
