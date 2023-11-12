// Products Page
import { Input, Button, Text } from "@chakra-ui/react";
import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";
import { memo, useState, useMemo } from "react";
import { Product } from "../../entities/Product/model/types/product";

export const ProductsPage = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("");

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        // Apply filtering
        if (filterBy) {
            filteredProducts = filteredProducts.filter((product: Product) =>
                product.name.toLowerCase().includes(filter.toLowerCase())
            );
        }

        // Apply sorting
        if (sortBy) {
            filteredProducts.sort((a, b) => {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            });
        }

        return filteredProducts;
    }, [products, filterBy, sortBy]);

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
                    <Input />
                    <Button color="blue">
                        <Text>Search Products</Text>
                    </Button>
                </div>
                <div>
                    <ProductList products={filteredAndSortedProducts} />
                </div>
            </div>
        );
    }

    return (
        // <>
        //     <div className="dash_products_page_wrapper">
        //         <div className="dash_products_nav_container">
        //             <Input />
        //             <Button color="blue">
        //                 <Text>Search Products</Text>
        //             </Button>
        //         </div>
        //         <div>
        //             <ProductList />
        //         </div>
        //     </div>
        // </>

        <>{content}</>
    );
};
