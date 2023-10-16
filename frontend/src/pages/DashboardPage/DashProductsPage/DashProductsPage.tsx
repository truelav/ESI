import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashProductsList } from "../../../components/products/DashProductsList/dashProductsList";

import "./styles.css"

function DashProductsPage() {
  return (
    <>
        <div className="dash_products_page_wrapper">
            <Container>
                <div className="dash_products_nav_container">
                    <Link to="/">
                        <p>Import Products</p>
                    </Link>
                    <Link to="addSingleProduct">
                        <p>Add Product</p>
                    </Link>
                    <Link to="">
                        <p>Export Presentation</p>
                    </Link>
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
