import { Container } from "react-bootstrap";
import { DashProductsList } from "../../../components/products/DashProductsList/dashProductsList";

import "./styles.css"

function DashProductsPage() {
  return (
    <>
        <div className="dash_products_page_wrapper">
            <Container>
                <div className="dash_products_nav_container">
                    <p>Products</p>
                    <p>Import Products</p>
                    <p>Add Product</p>
                    <p>Export Presentation</p>
                </div>
            </Container>
            <Container>
                <div className="dash_products_filter_container">
                    <p>All</p>
                    <p>Active</p>
                    <p>Inactive</p>
                </div>
            </Container>
            <Container>
                <DashProductsList />
            </Container>
        </div>
    </>
  );
}

export default DashProductsPage;
