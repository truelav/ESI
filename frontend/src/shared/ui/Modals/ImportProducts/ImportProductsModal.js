import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Box, VStack, FormControl, FormLabel, Input, Text, Heading, } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAddMultipleProductsMutation } from '../../../../app/api/apiSlice';
import { FormResult } from '../../../../components/forms/FormResult/FormResult';
function ImportProductsModal() {
    const [addMultipleProducts, { isLoading, error, isSuccess, data }] = useAddMultipleProductsMutation();
    const [formData, setFormData] = useState({ csv: '' });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, csv: file });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        if (formData.csv) {
            formDataToSend.append("csv", formData.csv);
        }
        try {
            const result = await addMultipleProducts(formDataToSend);
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    };
    let content = (_jsxs(Box, { p: 4, children: [_jsx(Heading, { children: "Import your products file" }), _jsx(Text, { children: "Please make user you use a .csv file and all the required fileds are filled" }), _jsx("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: _jsxs(VStack, { spacing: 4, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: ".CSV File" }), _jsx(Input, { type: "file", name: "csv", accept: ".csv", onChange: handleFileChange })] }), _jsx(Button, { type: "submit", colorScheme: 'blue', children: "Import Products" })] }) })] }));
    if (isSuccess) {
        content = (_jsx(FormResult, { headlineText: `Products Saved Success`, bodyText: JSON.stringify(data), children: _jsx(Link, { to: `/products`, children: _jsx(Button, { children: "Check Added Product" }) }) }));
    }
    if (error) {
        content = (_jsxs("div", { children: ["...Error Adding Product: ", JSON.stringify(error)] }));
    }
    if (isLoading) {
        content = (_jsx("div", { children: "...Is Loading" }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Button, { className: "", onClick: onOpen, children: _jsx("p", { children: "Import Products" }) }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Import Products :" }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: content }), _jsx(ModalFooter, { children: _jsx(Button, { mr: 3, onClick: onClose, children: "Close" }) })] })] })] }));
}
//   <form
//   action="http://localhost:8888/api/products/addMultiple"
//   method="post"
//   encType="multipart/form-data"
// >
//   <input type="file" name="csv" />
//   <Button type="submit" colorScheme='blue'>Import Products</Button>
// </form>
export default ImportProductsModal;
