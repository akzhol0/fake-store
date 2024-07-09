import { useContext } from "react";
import { contextData } from "../../../context/logic";

function MyModal() {
  const { setModal } = useContext(contextData);

  setTimeout(() => {
    setModal(false);
  }, 1500)

  return (
    <div className="fixed anim top-5 right-5 py-2 px-4 bg-red-500 text-white rounded-lg cursor-default">
      Added to cart
    </div>
  );
}

export default MyModal;
