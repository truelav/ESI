import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { useCreatePresentationMutation } from "../../../../app/api/apiSlice";
const selectSelectedProductIds = (state) => state.product.selectedProductIds;
const PresentationHeader = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector(selectSelectedProductIds);
    const [downloadPresentationLink, setDownloadPresentationLink] = useState(null);
    const [createPresentation, { data: dataPresentation, isLoading: isLoadingPresentation, isSuccess: isSuccessPresentation, isError: isErrorPresentation, error: errorPresentation, },] = useCreatePresentationMutation();
    const handleCreatePresentation = async () => {
        // const prodIDs: string[] = Array.from(selectedProductIds);
        try {
            const result = await createPresentation(selectedProductIds);
            if (isLoadingPresentation) {
                console.log("creating presentation loading...");
            }
            if (dataPresentation) {
                console.log(dataPresentation);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (result && result.data) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setDownloadPresentationLink(result.data.presentationLink);
            }
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    };
    let content = _jsx(_Fragment, {});
    if (isLoadingPresentation) {
        content = _jsx(_Fragment, { children: "Loading Presentation ..." });
    }
    if (isErrorPresentation) {
        content = _jsxs(_Fragment, { children: ["There was an error: ", JSON.stringify(errorPresentation), " "] });
    }
    if (isSuccessPresentation) {
        content = (_jsx(_Fragment, { children: _jsxs(GridItem, { colSpan: 4, children: [downloadPresentationLink && isSuccessPresentation && (_jsx(Link, { to: downloadPresentationLink, target: '_blank', children: _jsx(Button, { colorScheme: 'red', children: "Download Presentation" }) })), isLoadingPresentation && _jsx("div", { children: "Presentation is creating ..." })] }) }));
    }
    return (_jsxs(Grid, { templateColumns: 'repeat(12, 1fr)', gap: 6, children: [_jsx(GridItem, { colSpan: 12, children: _jsx(Heading, { as: 'h1', size: 'xl', noOfLines: 1, children: "Welcome to Presentation Page" }) }), _jsx(GridItem, { colSpan: 4, children: _jsx(Button, { onClick: handleCreatePresentation, colorScheme: 'blue', children: "Create Presentation" }) }), content] }));
};
export default PresentationHeader;
