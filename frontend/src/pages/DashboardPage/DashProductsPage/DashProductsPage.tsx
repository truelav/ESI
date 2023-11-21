import { Button, ButtonGroup, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal";

import "./styles.css";

function DashProductsPage() {
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
                            <Button className="dash_products_nav_button"  colorScheme='red'>
                                <Text>Delete Products</Text>
                            </Button>
                        </ButtonGroup>
                    </GridItem>
                </Grid>

                <DashProductsList />
            </div>
        </>
    );
}

export default DashProductsPage;
