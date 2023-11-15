import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal";

import "./styles.css";

function DashProductsPage() {
    return (
        <>
            <div className="dash_products_page_wrapper">
                <div className="dash_products_nav_container">
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

                </div>
                <DashProductsList />
            </div>
        </>
    );
}

export default DashProductsPage;
