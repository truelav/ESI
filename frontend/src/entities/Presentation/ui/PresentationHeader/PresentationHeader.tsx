import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, GridItem, Heading, Button } from "@chakra-ui/react"
import { useCreatePresentationMutation } from "../../../../app/api/apiSlice";

const selectSelectedProductIds = (state) => state.product.selectedProductIds

const PresentationHeader = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector(selectSelectedProductIds)
    const [downloadPresentationLink, setDownloadPresentationLink] = useState(null);

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

    const handleCreatePresentation = async () => {
        // const prodIDs: string[] = Array.from(selectedProductIds);

        try {
            console.log(selectedProductIds);
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
        } catch (error) {
            console.log(error);
        }
    };


    let content = <></>;

    if(isLoadingPresentation){
        content = <>Loading Presentation ...</>
    }

    if(isErrorPresentation){
        content = <>There was an error: {JSON.stringify(errorPresentation)} </>
    }

    if(isSuccessPresentation){
        <GridItem colSpan={4}>
            {downloadPresentationLink && isSuccessPresentation && (
                <Link to={downloadPresentationLink} target='_blank'>
                    <Button colorScheme='red'>Download Presentation</Button>
                </Link>
            )}
            {isLoadingPresentation && <div>Presentation is creating ...</div>}
        </GridItem>
    }


    return (
        <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={12}>
                <Heading as='h1' size='xl' noOfLines={1}>Welcome to Presentation Page</Heading>
            </GridItem>
            <GridItem colSpan={4}>
                <Button onClick={handleCreatePresentation} colorScheme='blue'>
                    Create Presentation
                </Button>
            </GridItem>

            {content}

        </Grid>
    )
}

export default PresentationHeader