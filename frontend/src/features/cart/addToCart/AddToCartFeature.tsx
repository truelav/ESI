import { Button, Box, Text, Grid, GridItem } from "@chakra-ui/react"
import { useState, MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addProductToCart } from "../../../entities/Cart/model/slice/cartSlice"
// import { cartProduct } from "../../../entities/Cart/model/slice/cartSlice"
import { Product } from "../../../entities/Product/model/types/product"
import { AlertSuccess } from "../../../shared/ui/Alerts/Success/AlertSuccess"
 

const AddToCart = (product: Product) => {
    const dispatch = useDispatch()
        //eslint-disable-next-line @typescript-eslint/ban-ts-comment 
        // @ts-ignore 
    const cart = useSelector((state) => state.cart);
    const [productQuantity, setProductQuantity] = useState(1)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    const handleAddToCart = (product: Product) => {
        const cartProduct = {...product, cartQuantity: productQuantity}
        dispatch(addProductToCart(cartProduct))
        setShowSuccessAlert(true);

        setTimeout(() => {
            setShowSuccessAlert(false)
        }, 2000)
    }

    const handleIncrementQuantity = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setProductQuantity(state => state + 1)
    }

    const handleDecrementQuantity = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setProductQuantity(state => state - 1)
    }

    console.log(cart)

    return (
        <Box>

            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                {/* <GridItem colSpan={12}>
                    <Text>Number of Items </Text>
                </GridItem> */}
                <GridItem colSpan={1}>
                    <Button onClick={handleDecrementQuantity}> - </Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text>{productQuantity}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button onClick={handleIncrementQuantity}> + </Button>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant='solid' colorScheme='blue' onClick={() => handleAddToCart(product)}>
                        Add to cart
                    </Button>
                </GridItem>
            </Grid>

            <AlertSuccess isOpen={showSuccessAlert} setShowSuccessAlert={setShowSuccessAlert}/>

        </Box>
    )
}

export default AddToCart