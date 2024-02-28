import { Product } from "../../../Product/model/types/product";
import { CartListHeader } from "../cartListHeader/CartListHeader";
import { CartListItem } from "../cartProductListItem/CartProductListItem";

interface CartProductListProps {
    products: Product[]
}

export const CartProductList = (props: CartProductListProps) => {
    const { products } = props
    return (
        <>
            <div>
                <CartListHeader />
            </div>
            <div>
                {products.map((product: Product) => (
                    <CartListItem
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};
