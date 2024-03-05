import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, } from "@chakra-ui/react";
import { useGetGroupedProductsQuery } from "../../../../app/api/apiSlice";
import PresentationAccordionItem from "../PresentationAccordionItem/PresentationAccordionItem";
const PresentationAccordion = () => {
    const { data: dataProducts, isLoading: isLoadingDataProducts, isSuccess: isSuccessDataProducts, isError: isErrorDataProducts, error: errorDataProducts, } = useGetGroupedProductsQuery();
    console.log(dataProducts);
    let content = _jsx("div", {});
    if (isLoadingDataProducts) {
        content = _jsx(_Fragment, { children: "Loading Presentation Products ..." });
    }
    if (isErrorDataProducts) {
        content = (_jsxs(_Fragment, { children: ["No Products Found :", " ", JSON.stringify(errorDataProducts)] }));
    }
    if (isSuccessDataProducts) {
        content = (_jsx(_Fragment, { children: _jsx(Accordion, { defaultIndex: [0], allowMultiple: true, children: dataProducts?.map((category) => (_jsx(PresentationAccordionItem, { category: category }, category.category))) }) }));
    }
    return (_jsx(_Fragment, { children: content }));
};
export default PresentationAccordion;
