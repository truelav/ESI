import {
    Container,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
    Button,
} from "@chakra-ui/react";

import { memo, useState } from "react";
import { Link } from "react-router-dom";

import {
    useGetGroupedProductsQuery,
    useCreatePresentationMutation,
} from "../../../app/api/apiSlice";

import { GroupedProducts } from "../../../app/api/types/Product";
import { Product } from "../../../entities/Product/model/types/product";
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
    const [downloadPresentationLink, setDownloadPresentationLink] =
        useState(null);

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
        // adding brands to selected
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

    let content = <div></div>;

    if (isLoadingDataProducts || isLoadingPresentation) {
        content = <>Loading...</>;
    }

    if (isErrorDataProducts || isLoadingPresentation) {
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
                                {brandGroup.products.map((product: Product) => (
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
            <Container>
                <div>
                    <Text>Welcome to Presentation Page</Text>
                </div>
                <div>
                    <Button onClick={handleCreatePresentation}>
                        Create Presentation
                    </Button>
                </div>
                <div>
                    {downloadPresentationLink && (
                        <Link to={downloadPresentationLink}>
                            <Button>Download Presentation</Button>
                        </Link>
                    )}
                </div>
            </Container>

            {content}
        </>
    );
});

export default DashPresentationPage;
