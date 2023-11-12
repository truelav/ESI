import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";
export const ProductList = (props: { products: Product[] | [] }) => {
    const { products } = props;
    // const {
    //     data: products,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error,
    // } = useGetAllProductsQuery();

    // let content = <div></div>;

    // if (isLoading) {
    //     content = <>Loading...</>;
    // }

    // if (isError) {
    //     content = <>No Products Found : {JSON.stringify(error)}</>;
    // }

    // if (isSuccess) {
    //     content = products.map((product: Product) => (
    //         <ProductListItem key={"" + product._id} product={product} />
    //     ));
    // }

    return (
        <>
            <h2>Products: </h2>
            <div>
                {products.map((product: Product) => (
                    <ProductListItem key={"" + product._id} product={product} />
                ))}
            </div>
        </>
    );
};
