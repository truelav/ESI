import { Button } from "@chakra-ui/react"
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from "react-redux"
import { usePlaceOrderMutation } from "../../../app/api/apiSlice"

export const PlaceOrderFeature = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const products = useSelector((state) => state.cart.products);
    const [placeOrder,  { isLoading, error, isSuccess }] = usePlaceOrderMutation()

    const handlePlaceOrder = async () => {
        placeOrder(products)
    }

    if (isSuccess) {
        return  <div>The Order was placed successfull</div>;
    }

    if (error) {
        return <div>...Error Adding Product</div>;
    }

    if (isLoading) {
        return <div>...Is Loading</div>;
    }

    return (
        <>
            <Button 
                colorScheme="blue" 
                size="lg" fontSize="md" 
                rightIcon={<FaArrowRight />}
                onClick={handlePlaceOrder}
            >
                Send Order
            </Button>
        </>
    )
}

