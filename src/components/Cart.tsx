import Product from "./Product";
interface Props {
  cartState: boolean;
  cartDelete: () => void;
  quantity: number;
}
const Cart = ({ cartState, cartDelete, quantity }: Props) => {
  return (
    <div>
      <div className="h-[16rem] md:h-[20rem] bg-lGrayishBlue rounded-xl p-6 ">
        <div>
          <p className="text-xl font-bold text-vDarkBlue">Cart</p>
        </div>

        <div className="product_contanier">
          {cartState ? (
            <Product quantity={quantity} cartDelete={cartDelete} />
          ) : (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-dGrayishBlue font-bold">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
      <hr className="absolute w-full top-20" />
      <div></div>
    </div>
  );
};

export default Cart;
