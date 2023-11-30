import { Button, ButtonGroup, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteMultipleProductsMutation } from "../../../app/api/apiSlice";
import { clearSelectedProducts } from "../../../entities/Product/model/slice/productSlice";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal";

import "./styles.css";

function DashProductsPage() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector((state) => state.product.selectedProductIds);
    const dispatch = useDispatch()
    const [deleteMultipleProducts, 
        { 
            isLoading, 
            isError, 
            isSuccess 
        }] = useDeleteMultipleProductsMutation();

    const handleDeleteProducts = () => {
        deleteMultipleProducts(selectedProductIds)
        dispatch(clearSelectedProducts())
    }

    console.log(selectedProductIds)

    let content = (<></>)

    if (isError) {
        content =  <div>...Some Error Has Occured with this Product</div>;
    }

    if (isLoading) {
        content = <div>...Loading</div>;
    }

    if (isSuccess) {
        content = <div>Deleted</div>;
    }
    
    return (
        <>
            <div className="dash_products_page_wrapper">
                <Grid templateColumns='repeat(12, 1fr)' gap={4}>
                    <GridItem colSpan={8}>
                        <ButtonGroup>
                            <Button>
                                <Text>Select All</Text>
                            </Button>
                        </ButtonGroup>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <ButtonGroup>
                            <ImportProductsModal />
                            <Link to="addSingleProduct">
                                <Button className="dash_products_nav_button"  colorScheme='blue'>
                                    <Text>Add Product</Text>
                                </Button>
                            </Link>
                            <Button 
                                className="dash_products_nav_button"  
                                colorScheme='red'
                                onClick={() => handleDeleteProducts()}
                            >
                                <Text>Delete Products</Text>
                            </Button>
                        </ButtonGroup>
                    </GridItem>
                </Grid>
                {content}
                <DashProductsList />
            </div>
        </>
    );
}

export default DashProductsPage;
