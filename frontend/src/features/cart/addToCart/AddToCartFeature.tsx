import { ButtonGroup, Button, Box, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { addProductToCart, removeProductFromCart, clearCart } from "../../../entities/Cart/model/slice/cartSlice"
import { cartProductType } from "../../../entities/Cart/model/slice/cartSlice"

 

const AddToCart = ({product}: cartProductType) => {
    const dispatch = useDispatch()
    const [productQuantity, setProductQuantity] = useState(1)
    const cartProduct = {product, quantity: 1}

    const handleAddToCart = (product) => {
        dispatch(addProductToCart(product))
    }

    const handleIncrementQuantity = (e) => {
        e.preventDefault()
        setProductQuantity(state => state + 1)
    }

    const handleDecrementQuantity = (e) => {
        e.preventDefault()
        setProductQuantity(state => state - 1)
    }

    return (
        <ButtonGroup spacing='2'>
            Number of Items 
            <Box>
                <Button onClick={handleDecrementQuantity}> - </Button>
                {/* <Input value={productQuantity} /> */}
                <Text>{productQuantity}</Text>
                <Button onClick={handleIncrementQuantity}> + </Button>
            </Box>
            <Button variant='solid' colorScheme='blue' onClick={() => handleAddToCart(cartProduct)}>
                Add to cart
            </Button>
        </ButtonGroup>
    )
}

export default AddToCart