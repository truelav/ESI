import { Alert, AlertIcon, AlertTitle, Box, CloseButton, AlertDescription, useDisclosure, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const AlertSuccess = ({ isOpen }) => {
    let content 

    if(isOpen){
        content = (
            <Alert status='success'>
                <AlertIcon />
                <Box>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        The Product was added to Cart
                        <Link to="cart">Go to Cart</Link>
                    </AlertDescription>
                </Box>
                {/* <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={onClose}
                /> */}
            </Alert>
        )
    } else {
        content = <></>
    }
    return (<>{content}</>) 
}