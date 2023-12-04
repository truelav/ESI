import { Product } from "../../../Product/model/types/product";
import { CartListItem } from "../cartProductListItem/CartProductListItem";

export const CartProductList = (props: { products: Product[] | never[] }) => {
    const { products } = props;

    return (
        <>
            <h2>Cart Products: </h2>
            <div>
                {products.map((product: Product) => (
                    <CartListItem key={"" + product._id} product={product} />
                ))}
            </div>
        </>
    );
};
