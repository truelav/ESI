import { useState, useMemo } from "react";
import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";
import { Product } from "../../entities/Product/model/types/product";
import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductFilterBar } from "../../entities/Product/ui/ProductFilterBar/ProductFilterBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";

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
                product.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        }

        // Apply filtering
        if (filterBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product: Product) =>
                product.brand.toLowerCase().includes(filterBy.toLowerCase())
            );
        }

        // Apply sorting
        if (sortBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const newFilteredProducts = [...filteredProducts];
            newFilteredProducts.sort((a: Product, b: Product) => {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            });
            filteredProducts = [...newFilteredProducts];
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
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                        <ProductFilterBar
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                        />
                    </GridItem>
                    <GridItem colSpan={10}>
                        <ProductSearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <ProductSortBar sortBy={sortBy} setSortBy={setSortBy} />
                        <ProductList products={filteredAndSortedProducts} />
                    </GridItem>
                </Grid>
            </div>
        );
    }

    return <>{content}</>;
};
