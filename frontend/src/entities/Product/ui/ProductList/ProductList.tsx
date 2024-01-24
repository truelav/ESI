import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";

const ProductList = (props: { products: Product[] | never[] }) => {

    const { products } = props;

    return (
        <>
            <h2>Product List: </h2>
            <div>
                {products.map((product: Product) => (
                    <ProductListItem key={"" + product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList
