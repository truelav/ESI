import { useSelector } from "react-redux";
import { CartProductsInterface } from "../../model/types/Cart";
import { CartListHeader } from "../cartListHeader/CartListHeader";
import { CartListItem } from "../cartProductListItem/CartProductListItem";

export const CartProductList = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const products = useSelector((state) => state.cart.products);
    console.log(products);
    return (
        <>
            <h2>Cart Products: </h2>
            <div>
                <CartListHeader />
            </div>
            <div>
                {products.map((product: CartProductsInterface) => (
                    <CartListItem
                        key={`${product?.product._id}`}
                        product={product}
                        cartQuantity={product.cartQuantity}
                    />
                ))}
            </div>
        </>
    );
};
