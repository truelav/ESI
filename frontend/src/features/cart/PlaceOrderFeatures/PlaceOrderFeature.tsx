import { Button } from "@chakra-ui/react"
import { FaArrowRight } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useCookies } from "react-cookie"
import { jwtDecode } from "jwt-decode"
import { usePlaceOrderMutation } from "../../../app/api/apiSlice"
import { clearCart } from "../../../entities/Profile/model/profileSlice"

export const PlaceOrderFeature = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cart = useSelector((state) => state.profile.cart);
    const dispatch = useDispatch()
    const [cookies] = useCookies(["authToken"]);
    const [placeOrder,  { isLoading, error, isSuccess }] = usePlaceOrderMutation()

    const handlePlaceOrder = async () => {
        const user = jwtDecode(cookies.authToken)
        const order = {cart, user}

        console.log(order)
        
        placeOrder(order)
        dispatch(clearCart())
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

