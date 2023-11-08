// import { Button } from "react-bootstrap";
import AddProduct from "../../../components/forms/AddSingleProductForm/AddProduct";
// import AddSingleProductForm from "../../../components/forms/AddSingleProductForm/AddSingleProductForm";

export default function DashAddSingleProduct() {
    return (
        <>
            <div>Add New Product</div>
            <div>
                <AddProduct />
            </div>
            {/* <div>
            <Button>Delete Product</Button>
        </div> */}
        </>
    );
}
