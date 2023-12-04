import { ButtonGroup, Button, Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addProductToCart, removeProductFromCart, clearCart } from "../../../entities/Cart/model/slice/cartSlice"
// import { cartProduct } from "../../../entities/Cart/model/slice/cartSlice"
import { Product } from "../../../entities/Product/model/types/product"

 

const AddToCart = (product: Product) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const [productQuantity, setProductQuantity] = useState(1)

    const handleAddToCart = (product: Product) => {
        const cartProduct = {...product, cartQuantity: productQuantity}
        dispatch(addProductToCart(cartProduct))
        console.log()
    }

    const handleIncrementQuantity = (e) => {
        e.preventDefault()
        setProductQuantity(state => state + 1)
    }

    const handleDecrementQuantity = (e) => {
        e.preventDefault()
        setProductQuantity(state => state - 1)
    }

    console.log(cart)

    return (
        <ButtonGroup spacing='2'>
            Number of Items 
            <Box>
                <Button onClick={handleDecrementQuantity}> - </Button>
                {/* <Input value={productQuantity} /> */}
                <Text>{productQuantity}</Text>
                <Button onClick={handleIncrementQuantity}> + </Button>
            </Box>
            <Button variant='solid' colorScheme='blue' onClick={() => handleAddToCart(product)}>
                Add to cart
            </Button>
        </ButtonGroup>
    )
}

export default AddToCart