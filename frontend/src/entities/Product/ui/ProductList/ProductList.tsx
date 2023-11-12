import { useGetAllProductsQuery } from "../../../../app/api/apiSlice";
import { Product } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";
export const ProductList = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = products.map((product: Product) => (
            <ProductListItem key={"" + product._id} product={product} />
        ));
    }

    return (
        <>
            <h2>Products: </h2>
            <div>{content}</div>
        </>
    );
};
