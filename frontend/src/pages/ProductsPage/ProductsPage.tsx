import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";

import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { setFilters } from "../../features/products/FilterProducts/model/slice/filterSlice";

import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";
import { Product } from "../../entities/Product/model/types/product";
import FilterBar from "../../features/products/FilterProducts/ui/FilterBar/FilterBar";


const ProductsPage = () => {
    const dispatch = useDispatch()
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    // const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filter.selectedFilters)
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        if(products){
            const filterList = Array.from(
                new Set(products?.flatMap(product => product.category))
            );

            dispatch(setFilters(filterList))
        }
    },[products])

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        if (searchTerm) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product) =>
                product.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        }

        if (selectedFilters.length) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            filteredProducts = filteredProducts.filter((product: Product) =>
                selectedFilters.includes(product.category)
                // product.category.toLowerCase().includes(filterBy.toLowerCase())
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
        console.log(selectedFilters, filteredProducts)
        return filteredProducts;
    }, [searchTerm, products, selectedFilters, sortBy]);

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading Products...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        content = (
            <div className="dash_products_page_wrapper">
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                        <FilterBar />
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
