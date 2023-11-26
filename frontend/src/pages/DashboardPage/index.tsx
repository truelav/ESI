import { Container, Grid, GridItem, Heading, Text, Highlight } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { useGetAllProductsQuery } from "../../app/api/apiSlice";
// import { setProducts, setCategoryProducts, setTotalProducts } from "../../entities/Product/model/slice/productSlice";
// import { StatGroup } from "../../components/stats/StatGroup/StatGroup";
// import { Product } from "../../entities/Product/model/types/product";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>

            <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
                <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                    <GridItem colSpan={10}>
                        <Heading as='h1' size='4xl' noOfLines={3}>
                            <span color="blue">Welcome</span> to Your Dashboard Profile Page
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Heading as='h2' size='xl'>
                            You Can manage : 
                            <br/>
                            <Link to="products">
                                <Highlight
                                    query={['Products']}
                                    styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
                                >
                                        Products
                                </Highlight>
                            </Link>
                            <br/>
                            <Link to="users">
                                <Highlight
                                    query={['Users']}
                                    styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
                                >
                                        Users
                                </Highlight>
                            </Link>
                            <br/>
                             or create 
                             <br/>
                             <Link to="presentation">
                                <Highlight
                                    query={['Presentation']}
                                    styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
                                >
                                        Presentation
                                </Highlight>
                            </Link>
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <Text my={6}>
                            Welcome to our innovative B2B platform designed to streamline your business procurement process. Getting started is as easy as creating an account, granting you immediate access to a world of exclusive benefits. Once registered, you'll unlock a personalized catalog tailored to your specific business needs. Navigate through a comprehensive range of products and services, each curated to meet the demands of your industry. 
                        </Text>
                    </GridItem>
                </Grid>
            </Container>    
        </>
    )
}

// export const AnalyicsPage = () => {
//     const {
//         data: products,
//         isLoading,
//         isSuccess,
//         isError,
//         error,
//     } = useGetAllProductsQuery();

//     const dispatch = useDispatch();

//     const transformProductsData = (products: Product[]) => {
//         const groupedProducts: { [brand: string]: Product[] } = {};


//         products.forEach((product: Product) => {
//             const { brand } = product;

//             groupedProducts[brand] = [];
//             groupedProducts[brand].push(product);
//         });

//         const metadaProducts = {
//             totalProducts: products.length,
//             totalBrands: Object.keys(groupedProducts).length,
//             totalCategories: 11
//         }

//         const categoryProducts = Object.entries(groupedProducts).map(
//             ([brand, products]) => ({
//                 brand,
//                 products,
//             })
//         );


//         return {categoryProducts, metadaProducts};
//     }

//     const setProductsData = () => {
//         const {categoryProducts, metadaProducts} = transformProductsData(products)

//         dispatch(setProducts(products))
//         dispatch(setTotalProducts(metadaProducts))
//         dispatch(setCategoryProducts(categoryProducts))

//     };

//     let content = <div></div>;

//     if (isLoading) {
//         content = <>Loading...</>;
//     }

//     if (isError) {
//         content = <>No Products Found : {JSON.stringify(error)}</>;
//     }

//     if (isSuccess) {
//         setProductsData();

//         content = (
//             <>
//                 <StatGroup />
//             </>
//         )
//     }
//     return  <>{content}</>
// }


