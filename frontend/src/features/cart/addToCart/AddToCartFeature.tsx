import { Button, Box } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../../entities/Product/model/types/product"
import { addToCart } from "../../../entities/Profile/model/profileSlice"

interface AddToCartProps {
    product: Product
}

const AddToCart = (props: AddToCartProps) => {
    const { product } = props
    const dispatch = useDispatch()
    const cart = useSelector(state => state.profile.cart)
    const isProductsInCart = cart.includes(product)

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    let content = <></>

    if(isProductsInCart){
        content = (
            <Button variant='solid' colorScheme='blue' isDisabled={true}>
                Product Added
            </Button>
        )
    } else {
        content = (
            <Button variant='solid' colorScheme='blue' onClick={() => handleAddToCart(product)}>
                Add to cart
            </Button>
        )
    }

    return (
        <Box>
            {content}
        </Box>
    )
}

export default AddToCart