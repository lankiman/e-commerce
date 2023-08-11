import thumbnail_1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail_2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail_3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail_4 from "../assets/image-product-4-thumbnail.jpg";
import product_image1 from "../assets/image-product-1.jpg";
import product_image2 from "../assets/image-product-2.jpg";
import product_image3 from "../assets/image-product-3.jpg";
import product_image4 from "../assets/image-product-4.jpg";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/solid";

interface Props {
  next: () => void;
  prev: () => void;
  handleProductImage: () => void;
  currentImage: number;
  thumbnailClick: (index: number) => void;
}

const Lightbox = ({
  next,
  prev,
  currentImage,
  thumbnailClick,
  handleProductImage
}: Props) => {
  const productImages = [
    {
      component: (
        <div className={`h-full w-full`}>
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
        <div className={`h-full w-full `}>
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
        <div className={`h-full w-full `}>
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
        <div className={`h-full w-full`}>
          <img
            className="h-full w-full rounded-xl  object-cover"
            src={product_image4}
            alt=""
          />
        </div>
      )
    }
  ];
  const currentImageRender = productImages[currentImage].component;
  return (
    <div>
      <aside className="lightbox_conatianer flex justify-center w-screen h-screen z-50">
        <div className="image_container flex flex-col items-center p-6 h-full w-1/2 gap-6">
          <div className="w-[28rem] flex justify-end">
            <XMarkIcon
              onClick={handleProductImage}
              className="text-Orange hover:animate__animated hover:animate-spin w-7 just flex stroke-Orange cursor-pointer"
            />
            {/* <PlusIcon
              onClick={increaseQuantity}
              className="text-Orange stroke-Orange w-5 cursor-pointer"
            /> */}
          </div>
          <div className="large_image_conatainer w-[28rem] relative flex items-center ">
            <div
              onClick={prev}
              className="group w-16 h-16 absolute rounded-[50%] -left-8 bg-white flex items-center justify-center"
            >
              <ChevronLeftIcon className="w-5 stroke-2 stroke-black group-hover:stroke-Orange" />
            </div>
            <div>{currentImageRender}</div>
            <div
              onClick={next}
              className="group w-16 h-16 absolute rounded-[50%]  -right-8 bg-white flex items-center justify-center"
            >
              <ChevronRightIcon className="w-5 stroke-2 stroke-black group-hover:stroke-Orange" />
            </div>
          </div>
          <div className="thumbnails_container gap-6 flex flex-row">
            <div
              className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                currentImage == 0 ? "border-[0.15rem] border-Orange" : ""
              }  `}
              onClick={() => thumbnailClick(0)}
            >
              <img src={thumbnail_1} alt="" className="rounded-md" />
              <div
                className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                  currentImage == 0 ? "bg-PaleOrange opacity-75" : ""
                }`}
              ></div>
            </div>
            <div
              className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                currentImage == 1 ? "border-[0.15rem] border-Orange" : ""
              }  `}
              onClick={() => thumbnailClick(1)}
            >
              <img src={thumbnail_2} alt="" className="rounded-md" />
              <div
                className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                  currentImage == 1 ? "bg-PaleOrange opacity-75" : ""
                }`}
              ></div>
            </div>

            <div
              className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                currentImage == 2 ? "border-[0.15rem] border-Orange" : ""
              }  `}
              onClick={() => thumbnailClick(2)}
            >
              <img src={thumbnail_3} alt="" className="rounded-md" />
              <div
                className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                  currentImage == 2 ? "bg-PaleOrange opacity-75" : ""
                }`}
              ></div>
            </div>
            <div
              className={`w-[5rem] relative  rounded-lg overflow-hidden cursor-pointer ${
                currentImage == 3 ? "border-[0.15rem] border-Orange" : ""
              }  `}
              onClick={() => thumbnailClick(3)}
            >
              <img src={thumbnail_4} alt="" className="rounded-md" />
              <div
                className={`absolute inset-0 hover:bg-PaleOrange hover:opacity-75 ${
                  currentImage == 3 ? "bg-PaleOrange opacity-75" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Lightbox;
