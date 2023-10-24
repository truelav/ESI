import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";

import "./styles.css";

function DashProductsPage() {
  return (
    <>
      <div className="dash_products_page_wrapper">
        <Container>
          <div className="dash_products_nav_container">
            <Link to="/">
              <Button className="dash_products_nav_button">
                <p>Import Products</p>
              </Button>
            </Link>
            <Link to="addSingleProduct">
              <Button className="dash_products_nav_button">
                <p>Add Product</p>
              </Button>
            </Link>
            <Link to="">
              <Button className="dash_products_nav_button">
                <p>Export Presentation</p>
              </Button>
            </Link>
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
