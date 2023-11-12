// Products Page
import { Input, Button, Text } from "@chakra-ui/react";
import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";

function ProductsPage() {
    return (
        <>
            <div className="dash_products_page_wrapper">
                <div className="dash_products_nav_container">
                    <Input />
                    <Button className="dash_products_nav_button">
                        <Text>Search Products</Text>
                    </Button>
                </div>
                <div>
                    <ProductList />
                </div>
            </div>
        </>
    );
}

export default ProductsPage;
