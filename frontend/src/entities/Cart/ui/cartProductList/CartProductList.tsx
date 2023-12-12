import { CartProps } from "../../model/types/Cart";
import { CartListHeader } from "../cartListHeader/cartListHeader";
import { CartListItem } from "../cartProductListItem/CartProductListItem";

// interface cartProduct {
//     product: Product,
//     cartQuantity: number
// }

export const CartProductList = ({ cart }: CartProps) => {
    const {products, cartQuantity} = cart
    return (
        <>
            <h2>Cart Products: </h2>
            <div>
                <CartListHeader />
            </div>
            <div>
                {products.map((product) => (
                    <CartListItem key={`${product?.product._id}`} product={product} cartQuantity={cartQuantity}/>
                ))}
            </div>
        </>
    );
};
