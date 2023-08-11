import Navigation from "./components/Navigation";
import SideMenu from "./components/SideMenu";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import ContentMobile from "./components/ContentMobile";
import ContentDesktop from "./components/ContentDesktop";
import Lightbox from "./components/Lightbox";

function App() {
  const [nav, setnav] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartMenu, setcartMenu] = useState(false);
  const [cartState, setcartState] = useState(false);
  const [cartItemsCount, setcartItemsCount] = useState(0);
  const [currentMobileImage, setCurrentMobileImage] = useState(0);
  const [productQuantity, setProductQuantiity] = useState(0);
  const [currentDesktopImage, setCurrentDesktopImage] = useState(0);
  const [lightboxState, setLightboxState] = useState(false);
  const [currentLightboxImage, setCurrentLightBoxImage] = useState(0);

  const nextLightbox = () => {
    if (currentLightboxImage == 3) {
      setCurrentLightBoxImage(0);
    } else setCurrentLightBoxImage(currentLightboxImage + 1);
  };
  const prevLightbox = () => {
    if (currentLightboxImage == 0) {
      setCurrentLightBoxImage(3);
    } else setCurrentLightBoxImage(currentLightboxImage - 1);
  };
  const lightThumbailclick = (index: number) => {
    setCurrentLightBoxImage(index);
  };
  const handleProductImage = () => {
    setLightboxState(!lightboxState);
  };

  const navClick = () => {
    setnav(!nav);
    setMenuVisible(true);
  };
  const cartClick = () => {
    setcartMenu(!cartMenu);
  };
  const cartAdd = () => {
    if (productQuantity > 0) {
      setcartState(true);
      setcartItemsCount(cartItemsCount + productQuantity);
    }
    setProductQuantiity(0);
    if (productQuantity == 0) {
      alert("invalid product quantity");
    }
  };
  const cartDelete = () => {
    setcartState(false);
    setcartItemsCount(0);
  };

  const prevMobile = () => {
    if (currentMobileImage == 0) {
      setCurrentMobileImage(3);
    } else setCurrentMobileImage(currentMobileImage - 1);
  };
  const nextMobile = () => {
    if (currentMobileImage == 3) {
      setCurrentMobileImage(0);
    } else setCurrentMobileImage(currentMobileImage + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileImage((currentMobileImage) =>
        currentMobileImage == 3
          ? currentMobileImage - 3
          : currentMobileImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDesktopImage((currentDesktopImage) =>
  //       currentDesktopImage == 3
  //         ? currentDesktopImage - 3
  //         : currentDesktopImage + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const increaseQuantity = () => {
    setProductQuantiity(productQuantity + 1);
  };
  const decreaseQuantity = () => {
    setProductQuantiity((productQuantity) =>
      productQuantity == 0 ? productQuantity - 0 : productQuantity - 1
    );
  };

  const handleThumbailclick = (index: number) => {
    setCurrentDesktopImage(index);
    setCurrentLightBoxImage(index);
  };

  return (
    <div className="font-custom h-screen w-screen overflow-auto bg-white ">
      <div
        className={`${
          nav ? "w-screen h-screen absolute bg-black opacity-10" : "hidden"
        }`}
      ></div>
      <div
        className={`${
          lightboxState
            ? "w-screen h-screen fixed top-0 left-0  bg-black z-30 opacity-75"
            : "hidden"
        }`}
      ></div>
      <div
        className={`bg-white w-2/3 h-screen md:z-0 z-40 fixed ${
          nav
            ? "absolute animate__animated animate__slideInLeft"
            : "absolute animate__animated animate__fadeOutLeft animate__faster"
        } ${menuVisible ? "" : "hidden"}`}
      >
        <SideMenu navStat={navClick} />
      </div>

      <section className="relative">
        <div className="w-full">
          <Navigation
            cartMenu={cartMenu}
            cartClick={cartClick}
            navClick={navClick}
            cartItemsCount={cartItemsCount}
          />
        </div>

        <div
          className={`absolute top-16 md:top-20 z-20  w-[90%] rounded-xl transform -translate-x-1/2 left-1/2 md:shadow-2xl md:left-auto md:right-0 md:-translate-x-0  md:w-[25rem] ${
            cartMenu ? "" : "hidden"
          }`}
        >
          <Cart
            quantity={cartItemsCount}
            cartState={cartState}
            cartDelete={cartDelete}
          />
        </div>
      </section>

      <section className="md:hidden mobile_section absolute ">
        <ContentMobile
          prevMobile={prevMobile}
          nextMobile={nextMobile}
          currentMobileImage={currentMobileImage}
          productQuantity={productQuantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          cartAdd={cartAdd}
        />
      </section>

      <section className="hidden md:flex md:items-center  min-h-[85vh] w-screen">
        <div className="flex justify-center items-center h-full w-full">
          <ContentDesktop
            cartAdd={cartAdd}
            productQuantity={productQuantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            currentDesktopImage={currentDesktopImage}
            handleThumbnailClick={handleThumbailclick}
            lightboxState={lightboxState}
            nextLightbox={nextLightbox}
            prevLightbox={prevLightbox}
            lightThumbnail={lightThumbailclick}
            handleProductImage={handleProductImage}
            currentLightboxImage={currentLightboxImage}
          />
        </div>
        <aside
          className={`${
            lightboxState ? "absolute top-10 z-50 w-screen h-screen" : "hidden"
          }`}
        >
          <Lightbox
            currentImage={currentLightboxImage}
            next={nextLightbox}
            prev={prevLightbox}
            thumbnailClick={lightThumbailclick}
            handleProductImage={handleProductImage}
          />
        </aside>
      </section>
    </div>
  );
}

export default App;
