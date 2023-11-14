import { useState, useMemo } from "react";
import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";
import { Product } from "../../entities/Product/model/types/product";
import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";

export const ProductsPage = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("");

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        // Apply search
        if (searchTerm) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply filtering
        if (filterBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product: Product) =>
                product.name.toLowerCase().includes(filterBy.toLowerCase())
            );
        }

        // Apply sorting
        if (sortBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts.sort((a, b) => {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            });
        }

        return filteredProducts;
    }, [searchTerm, products, filterBy, sortBy]);

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = (
            <div className="dash_products_page_wrapper">
                <div className="dash_products_nav_container">
                    <ProductSearchBar />
                </div>
                <div></div>
                <div>
                    <ProductList products={filteredAndSortedProducts} />
                </div>
            </div>
        );
    }

    return <>{content}</>;
};
