import product_image1 from "../assets/image-product-1.jpg";
import product_image2 from "../assets/image-product-2.jpg";
import product_image3 from "../assets/image-product-3.jpg";
import product_image4 from "../assets/image-product-4.jpg";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import prev_icon from "../assets/icon-previous.svg";
import next_icon from "../assets/icon-next.svg";

interface Props {
  prevMobile: () => void;
  nextMobile: () => void;
  currentMobileImage: number;
  productQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  cartAdd: () => void;
}

const ContentMobile = ({
  prevMobile,
  nextMobile,
  currentMobileImage,
  productQuantity,
  increaseQuantity,
  decreaseQuantity,
  cartAdd
}: Props) => {
  const productImages = [
    {
      component: (
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={product_image1}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={product_image2}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={product_image3}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div className="h-full w-full ">
          <img
            className="h-full w-full object-cover"
            src={product_image4}
            alt=""
          />
        </div>
      )
    }
  ];
  const currentImageRender = productImages[currentMobileImage].component;
  return (
    <div>
      <div>
        <div className="flex items-center relative">
          <div
            onClick={prevMobile}
            className="absolute left-5 bg-white w-10 h-10 items-center justify-center flex rounded-[50%]"
          >
            <img className="w-3 h-3 brightness-50" src={prev_icon} alt="" />
          </div>
          <div className="h-[19rem] w-screen ">{currentImageRender}</div>
          <div
            onClick={nextMobile}
            className="absolute bg-white w-10 h-10 items-center justify-center flex rounded-[50%] right-5"
          >
            <img className="w-3 h-3 brightness-50" src={next_icon} alt="" />
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-bold pb-2 text-Orange opacity-80 uppercase text-xs">
            sneaker company
          </h4>
          <h2 className="font-bold text-vDarkBlue text-xl">
            Fall Limited Edition
          </h2>
          <h2 className="font-bold text-vDarkBlue text-xl">Sneakers</h2>
          <p className="text-dGrayishBlue text-[16px] font-normal">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable ruber outer sole, they'll withstand everything
            the weather can offer
          </p>
        </div>
        <div className="p-6">
          <div className="price_container flex flex-row justify-between items-center ">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-vDarkBlue font-bold text-2xl">$125.00</p>
              <p className="text-Orange font-bold bg-PaleOrange px-1 text-sm rounded-sm">
                50%
              </p>
            </div>
            <div>
              <p className="line-through text-sm text-GrayishBlue">$250.00</p>
            </div>
          </div>
          <div className="mt-4 flex justify-evenly items-center rounded-md bg-lGrayishBlue h-16 p-2 px-4">
            <div>
              <MinusIcon
                onClick={decreaseQuantity}
                className="w-5 text-Orange stroke-Orange"
              />
            </div>
            <div className="w-full text-center font-bold text-vDarkBlue">
              {productQuantity}
            </div>
            <div>
              <PlusIcon
                onClick={increaseQuantity}
                className="text-Orange stroke-Orange w-5"
              />
            </div>
          </div>
          <div
            onClick={cartAdd}
            className="bg-Orange text-lGrayishBlue gap-2 w-full flex justify-center mt-4 p-4 rounded-xl"
          >
            <ShoppingCartIcon className="w-5 stroke-2" />
            <p className="font-bold ">Add to cart </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMobile;
