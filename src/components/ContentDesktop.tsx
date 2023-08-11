import product_image1 from "../assets/image-product-1.jpg";
import product_image2 from "../assets/image-product-2.jpg";
import product_image3 from "../assets/image-product-3.jpg";
import product_image4 from "../assets/image-product-4.jpg";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import thumbnail_1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail_2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail_3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail_4 from "../assets/image-product-4-thumbnail.jpg";
// import Lightbox from "./Lightbox";

interface Props {
  currentDesktopImage: number;
  productQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  cartAdd: () => void;
  handleThumbnailClick: (number: number) => void;
  lightboxState: boolean;
  nextLightbox: () => void;
  prevLightbox: () => void;
  lightThumbnail: (index: number) => void;
  handleProductImage: () => void;
  currentLightboxImage: number;
}

const ContentDesktop = ({
  currentDesktopImage,
  productQuantity,
  increaseQuantity,
  decreaseQuantity,
  cartAdd,
  handleThumbnailClick,
  // lightboxState,
  // lightThumbnail,
  // nextLightbox,
  // prevLightbox,
  handleProductImage
}: // currentLightboxImage
Props) => {
  const productImages = [
    {
      component: (
        <div
          className={`h-full w-full ${
            currentDesktopImage == 0
              ? "animate__animated animate__zoomIn animate__faster"
              : "animate-none"
          }`}
        >
          <img
            className="h-full w-full rounded-xl object-fit"
            src={product_image1}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div
          className={`h-full w-full ${
            currentDesktopImage == 1
              ? "animate__animated animate__zoomIn animate__faster"
              : ""
          }`}
        >
          <img
            className="h-full w-full rounded-xl  object-cover"
            src={product_image2}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div
          className={`h-full w-full ${
            currentDesktopImage == 2
              ? "animate__animated animate__zoomIn animate__faster"
              : ""
          }`}
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={product_image3}
            alt=""
          />
        </div>
      )
    },
    {
      component: (
        <div
          className={`h-full w-full ${
            currentDesktopImage == 3
              ? "animate__animated animate__zoomIn animate__faster"
              : ""
          }`}
        >
          <img
            className="h-full w-full rounded-xl  object-cover"
            src={product_image4}
            alt=""
          />
        </div>
      )
    }
  ];
  const currentImageRender = productImages[currentDesktopImage].component;

  return (
    <div>
      <div className="w-fit justify-center items-center h-full flex">
        <main className="flex flex-row gap-12 w-[80%] items-center h-fit">
          <div className="image_container flex flex-col items-center p-6 h-full w-1/2 gap-6">
            <div
              onClick={handleProductImage}
              className="large_image_conatainer w-[25rem] cursor-pointer"
            >
              {currentImageRender}
            </div>
            <div className="thumbnails_container gap-6 flex flex-row">
              <div
                className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                  currentDesktopImage == 0
                    ? "border-[0.15rem] border-Orange"
                    : ""
                }  `}
                onClick={() => handleThumbnailClick(0)}
              >
                <img src={thumbnail_1} alt="" className="rounded-md" />
                <div
                  className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                    currentDesktopImage == 0 ? "bg-PaleOrange opacity-75" : ""
                  }`}
                ></div>
              </div>
              <div
                className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                  currentDesktopImage == 1
                    ? "border-[0.15rem] border-Orange"
                    : ""
                }  `}
                onClick={() => handleThumbnailClick(1)}
              >
                <img src={thumbnail_2} alt="" className="rounded-md" />
                <div
                  className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                    currentDesktopImage == 1 ? "bg-PaleOrange opacity-75" : ""
                  }`}
                ></div>
              </div>

              <div
                className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                  currentDesktopImage == 2
                    ? "border-[0.15rem] border-Orange"
                    : ""
                }  `}
                onClick={() => handleThumbnailClick(2)}
              >
                <img src={thumbnail_3} alt="" className="rounded-md" />
                <div
                  className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                    currentDesktopImage == 2 ? "bg-PaleOrange opacity-75" : ""
                  }`}
                ></div>
              </div>
              <div
                className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                  currentDesktopImage == 3
                    ? "border-[0.15rem] border-Orange"
                    : ""
                }  `}
                onClick={() => handleThumbnailClick(3)}
              >
                <img src={thumbnail_4} alt="" className="rounded-md" />
                <div
                  className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                    currentDesktopImage == 3 ? "bg-PaleOrange opacity-75" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="product-details_conatainer w-1/2">
            <div className="p-6">
              <h4 className="font-bold pb-2 text-Orange opacity-80 uppercase text-xs">
                sneaker company
              </h4>
              <h2 className="font-bold text-vDarkBlue text-3xl mt-2">
                Fall Limited Edition
              </h2>
              <h2 className="font-bold text-vDarkBlue text-3xl">Sneakers</h2>
              <p className="text-dGrayishBlue text-[16px] leading-6 mt-10 font-normal">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable ruber outer sole, they'll
                withstand everything the weather can offer
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
                  <p className="line-through text-sm text-GrayishBlue">
                    $250.00
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full h-12">
                <div className="mt-4 flex justify-evenly w-[35%] items-center rounded-md bg-lGrayishBlue h-full p-2 px-4">
                  <div>
                    <MinusIcon
                      onClick={decreaseQuantity}
                      className="w-5 text-Orange stroke-Orange cursor-pointer"
                    />
                  </div>
                  <div className="w-full text-center font-bold text-vDarkBlue">
                    {productQuantity}
                  </div>
                  <div>
                    <PlusIcon
                      onClick={increaseQuantity}
                      className="text-Orange stroke-Orange w-5 cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  onClick={cartAdd}
                  className="bg-Orange shadow-xl shadow-PaleOrange hover:opacity-75 cursor-pointer h-full text-lGrayishBlue gap-2 w-[65%] flex justify-center mt-4 p-4 rounded-xl"
                >
                  <ShoppingCartIcon className="w-5 stroke-2" />
                  <p className="font-bold ">Add to cart </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <aside
          className={`${
            lightboxState ? "absolute w-screen h-screen" : "hidden"
          }`}
        >
          <Lightbox
            currentImage={currentLightboxImage}
            next={nextLightbox}
            prev={prevLightbox}
            thumbnailClick={lightThumbnail}
            handleProductImage={handleProductImage}
          />
        </aside> */}
      </div>
    </div>
  );
};

export default ContentDesktop;
