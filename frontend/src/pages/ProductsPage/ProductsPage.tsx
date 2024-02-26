import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";

import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { setFilters } from "../../features/products/FilterProducts/model/slice/filterSlice";

import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";
import ProductList  from "../../entities/Product/ui/ProductList/ProductList";
import FilterBar from "../../features/products/FilterProducts/ui/FilterBar/FilterBar";

const ProductsPage = () => {
    const dispatch = useDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(data){
            const filterList = data.categories
            dispatch(setFilters(filterList))
        }
    },[data, dispatch])


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
                    <GridItem colSpan={3}>
                        <FilterBar />
                    </GridItem>
                    <GridItem colSpan={9}>
                        <ProductSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <ProductSortBar />
                        <ProductList products={data.allProducts} searchTerm={searchTerm} />
                    </GridItem>
                </Grid>
            </div>
        );
    }

    return <>{content}</>;
};

export default ProductsPage;
