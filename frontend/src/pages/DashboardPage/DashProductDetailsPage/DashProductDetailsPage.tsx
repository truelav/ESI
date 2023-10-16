import { Container } from "react-bootstrap";
import { DashProductDetails } from "../../../components/products/DashProductDetails/DashProductDetails";


function DashProductDetailsPage() {
  return (
    <>
        <div className="dash_products_page_wrapper">
            <Container>
                <DashProductDetails/>
            </Container>
        </div>
    </>
  );
}

export default DashProductDetailsPage;
