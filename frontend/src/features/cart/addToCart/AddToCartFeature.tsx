import { Button, Box } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Product } from "../../../entities/Product/model/types/product"
import { addToCart } from "../../../entities/Profile/model/profileSlice"

interface AddToCartProps {
    product: Product
}

const AddToCart = (props: AddToCartProps) => {
    const { product } = props
    const dispatch = useDispatch()
    const [isSuccess, setIsSuccess] = useState(false)

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
        setIsSuccess(true);
    }

    let content = <></>

    if(isSuccess){
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