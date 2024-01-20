import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
} from "@chakra-ui/react";

import { useGetGroupedProductsQuery } from "../../../../app/api/apiSlice";
import { GroupedProducts } from "../../../../app/api/types/Product";
import { ProductItem } from "../../../../shared/ui/Product/ProductItem/ProductItem";

const PresentationAccordion = () => {

    const {
        data: dataProducts,
        isLoading: isLoadingDataProducts,
        isSuccess: isSuccessDataProducts,
        isError: isErrorDataProducts,
        error: errorDataProducts,
    } = useGetGroupedProductsQuery();

    let content = <div></div>;

    if (isLoadingDataProducts) {
        content = <>Loading Presentation Products ...</>;
    }
    
    if (isErrorDataProducts) {
        content = (
            <>
                No Products Found :{" "}
                {JSON.stringify(errorDataProducts)}
            </>
        );
    }
    
    if (isSuccessDataProducts) {
        content = (
            <>
                <Accordion defaultIndex={[0]} allowMultiple>
                    {dataProducts?.map((brandGroup: GroupedProducts) => (
                        <AccordionItem key={brandGroup.brand}>
                            <h2>
                                <AccordionButton>
                                    <Checkbox
                                        onChange={() => console.log()}>
                                        All {brandGroup.brand}
                                    </Checkbox>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {brandGroup.products.map((product: any) => (
                                    <ProductItem
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </>
        );
    }

    return (
        <>
            {content}
        </>
    )
}

export default PresentationAccordion