import { Container, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useGetAllProductsQuery } from "../../app/api/apiSlice";
import { setProducts, setCategoryProducts, setTotalProducts } from "../../entities/Product/model/slice/productSlice";

import { StatGroup } from "../../components/stats/StatGroup/StatGroup";
import { Product } from "../../entities/Product/model/types/product";

export default function Dashboard() {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery();

    const dispatch = useDispatch();

    const transformProductsData = (products: Product[]) => {
        const groupedProducts: { [brand: string]: Product[] } = {};


        products.forEach((product: Product) => {
            const { brand } = product;

            groupedProducts[brand] = [];
            groupedProducts[brand].push(product);
        });

        const metadaProducts = {
            totalProducts: products.length,
            totalBrands: Object.keys(groupedProducts).length,
            totalCategories: 11
        }

        // Convert the grouped products into an array of objects
        const categoryProducts = Object.entries(groupedProducts).map(
            ([brand, products]) => ({
                brand,
                products,
            })
        );


        return {categoryProducts, metadaProducts};
    }

    const setProductsData = () => {
        const {categoryProducts, metadaProducts} = transformProductsData(products)

        dispatch(setProducts(products))
        dispatch(setTotalProducts(metadaProducts))
        dispatch(setCategoryProducts(categoryProducts))

    };

    let content = <div></div>;

    if (isLoading) {
        content = <>Loading...</>;
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
    }

    if (isSuccess) {
        setProductsData();

        content = (
            <>
                <Container>
                    <Text>Welcome to Dashboard</Text>
                </Container>
                <StatGroup />
                <StatGroup />
            </>
        )
    }
    return  <>{content}</>
}


