import { useState, useMemo, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { useGetAllProductsQuery } from "../../app/api/apiSlice";

import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";
import { Product } from "../../entities/Product/model/types/product";
import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { ProductFilterBar } from "../../entities/Product/ui/ProductFilterBar/ProductFilterBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";

const ProductsPage = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    // const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("");

    const filterItems = Array.from(
        new Set(products?.flatMap(product => product.subcategory))
    );

    // const setProductsData = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // dispatch(setTotalProducts(products.length));
    // dispatch(setProducts(products))
    // };

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

        if (filterBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product: Product) =>
                product.brand.toLowerCase().includes(filterBy.toLowerCase())
            );
        }

        if (sortBy) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const newFilteredProducts = [...filteredProducts];
            newFilteredProducts.sort((a: Product, b: Product) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return a[sortBy] > b[sortBy] ? 1 : -1;
            });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
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
                            filterItems={filterItems}
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

export default ProductsPage;
