import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddProduct = () => {
    const handleSubmit = () => {};

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProduct;
