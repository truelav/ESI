import { Button, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DashProductsList } from "../../../components/products/DashProductsList/DashProductsList";
import ImportProductsModal from "../../../shared/ui/Modals/ImportProducts/ImportProductsModal";

import "./styles.css";

function DashProductsPage() {
  return (
    <>
      <div className="dash_products_page_wrapper">
        <div className="dash_products_nav_container">
          <Container>
            {/* Import Products Modal */}
            <ImportProductsModal />
          </Container>

          {/* ADD Product Modal */}
          <Container>
            <Link to="addSingleProduct">                              
              <Button className="dash_products_nav_button">
                <Text>Add Product</Text>
              </Button>
            </Link>
          </Container>

          <Container>
            <Button className="dash_products_nav_button">
              <Text>Delete Products</Text>
            </Button>
          </Container>
        </div>
        <DashProductsList />
      </div>
    </>
  );
}

export default DashProductsPage;
