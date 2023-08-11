import delete_icon from "../assets/icon-delete.svg";
import product_image from "../assets/image-product-1-thumbnail.jpg";

interface Props {
  cartDelete: () => void;
  quantity: number;
}

const Product = ({ cartDelete, quantity }: Props) => {
  const amount = 125.0;
  const total = amount * quantity;
  return (
    <div className="relative h-[12rem] md:mt-10 mt-54 bg-red-60 z-30">
      <div className="flex flex-row justify-between absolute top-12 gap-2 items-center w-full">
        <div>
          <img className="w-16 rounded-md" src={product_image} alt="no_image" />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <p className="text-dGrayishBlue text-sm">
              Fall Limited Edition Sneakers
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="text-dGrayishBlue">
              ${amount}.00 x {quantity}
            </p>
            <p className="text-vDarkBlue font-bold">${total}.00</p>
          </div>
        </div>
        <div>
          <img
            src={delete_icon}
            className="w-5 hover:brightness-50"
            onClick={cartDelete}
            alt=""
          />
        </div>
      </div>
      <div className="mt-28 absolute w-full bottom-0 ">
        <button className="text-white w-full p-6 font-bold hover:bg-PaleOrange bg-Orange rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Product;
