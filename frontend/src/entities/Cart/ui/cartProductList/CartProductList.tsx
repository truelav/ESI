import { Product } from "../../../Product/model/types/product";
import { CartListHeader } from "../cartListHeader/cartListHeader";
import { CartListItem } from "../cartProductListItem/CartProductListItem";

// interface cartProduct {
//     product: Product,
//     cartQuantity: number
// }

export const CartProductList = (props: { products: Product[] | never[] }) => {
    const { products } = props;

    return (
        <>
            <h2>Cart Products: </h2>
            <div>
                <CartListHeader />
            </div>
            <div>
                {products.map((product : Product) => (
                    <CartListItem key={"" + product?.product._id} product={product} />
                ))}
            </div>
        </>
    );
};
