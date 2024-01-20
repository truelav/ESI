/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
    Button,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";

import { memo, useState } from "react";
import { Link } from "react-router-dom";

import {
    useGetGroupedProductsQuery,
    useCreatePresentationMutation,
} from "../../../app/api/apiSlice";

import { GroupedProducts } from "../../../app/api/types/Product";
import { ProductItemHorizontal } from "../../../shared/ui/Product/ProductItemHorizontal/ProductItemHorizontal";

const DashPresentationPage = memo(() => {
    const {
        data: dataProducts,
        isLoading: isLoadingDataProducts,
        isSuccess: isSuccessDataProducts,
        isError: isErrorDataProducts,
        error: errorDataProducts,
    } = useGetGroupedProductsQuery();

    const [
        createPresentation,
        {
            data: dataPresentation,
            isLoading: isLoadingPresentation,
            isSuccess: isSuccessPresentation,
            isError: isErrorPresentation,
            error: errorPresentation,
        },
    ] = useCreatePresentationMutation();

    const [selectedProducts, setSelectedProducts] = useState(new Set());
    const [selectedBrands, setSelectedBrands] = useState(new Set());
    const [downloadPresentationLink, setDownloadPresentationLink] = useState(null);

    const selectItem = (id, set, selector) => {
        const newSet = new Set(set);
        newSet.add(id);
        selector(newSet);
    };

    const deselectItem = (id, set, selector) => {
        const newSet = new Set(set);
        newSet.delete(id);
        selector(newSet);
    };

    const handleToggleSelectCategoryProducts = (brandName: string) => {
        if (selectedBrands.has(brandName)) {
            const newSelectedBrands = new Set(selectedBrands);
            newSelectedBrands.delete(brandName);
            setSelectedBrands(newSelectedBrands);
        } else {
            const newSelectedBrands = new Set(selectedBrands);
            newSelectedBrands.add(brandName);
            setSelectedBrands(newSelectedBrands);
        }

        const filteredBrands = dataProducts?.filter(
            (brandGr) => brandGr.brand === brandName
        );

        if (filteredBrands && filteredBrands.length) {
            const { products } = filteredBrands[0];

            products.forEach((brandItem) => {
                const id = brandItem._id;
                selectItem(id, selectedProducts, setSelectedProducts);
            });
        }
    };

    const handleToggleSelectProducts = (id: string) => {
        if (selectedProducts.has(id)) {
            deselectItem(id, selectedProducts, setSelectedProducts);
        } else {
            selectItem(id, selectedProducts, setSelectedProducts);
        }
    };

    const handleCreatePresentation = async () => {
        const prodIDs: string[] = Array.from(selectedProducts);

        try {
            console.log(prodIDs);
            const result = await createPresentation(prodIDs);
            if (isLoadingPresentation) {
                console.log("creating presentation loading...");
            }
            if (dataPresentation) {
                console.log(dataPresentation);
            }
            if (result && result.data) {
                setDownloadPresentationLink(result.data.presentationLink);
            }

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(dataProducts)

    let content = <div></div>;

    if (isLoadingDataProducts || isLoadingPresentation) {
        content = <>Loading Presentation Products ...</>;
    }

    if (isErrorDataProducts || isErrorPresentation) {
        content = (
            <>
                No Products Found :{" "}
                {JSON.stringify(errorDataProducts) ||
                    JSON.stringify(errorPresentation)}
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
                                        onChange={() =>
                                            handleToggleSelectCategoryProducts(
                                                brandGroup.brand
                                            )
                                        }
                                    >
                                        {selectedBrands.has(brandGroup.brand)
                                            ? `Deselect`
                                            : `Select`}{" "}
                                        All {brandGroup.brand}
                                    </Checkbox>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {brandGroup.products.map((product: any) => (
                                    <ProductItemHorizontal
                                        key={product._id}
                                        product={product}
                                        isSelected={selectedProducts.has(
                                            product._id
                                        )}
                                        handleToggleSelectProducts={
                                            handleToggleSelectProducts
                                        }
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
            <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem colSpan={12}>
                    <Heading as='h1' size='xl' noOfLines={1}>Welcome to Presentation Page</Heading>
                </GridItem>
                <GridItem colSpan={4}>
                    <Button onClick={handleCreatePresentation} colorScheme='blue'>
                        Create Presentation
                    </Button>
                </GridItem>
                <GridItem colSpan={4}>
                    {downloadPresentationLink && isSuccessPresentation && (
                        <Link to={downloadPresentationLink} target='_blank'>
                            <Button colorScheme='red'>Download Presentation</Button>
                        </Link>
                    )}
                    {isLoadingPresentation && <div>Presentation is creating ...</div>}
                </GridItem>
            </Grid>

            {content}
        </>
    );
});

export default DashPresentationPage;
