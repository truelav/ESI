import { Button } from "@chakra-ui/react"
import { FaArrowRight } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useCookies } from "react-cookie"
import { usePlaceOrderMutation } from "../../../app/api/apiSlice"
import { jwtDecode } from "jwt-decode"
import { clearCart } from "../../../entities/Cart/model/slice/cartSlice"

export const PlaceOrderFeature = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    // const profile = useSelector((state) => state.auth.profile)
    const [cookies] = useCookies(["authToken"]);
    const [placeOrder,  { isLoading, error, isSuccess }] = usePlaceOrderMutation()

    const handlePlaceOrder = async () => {
        const user = jwtDecode(cookies.authToken)
        const order = {cart, user}
        console.log(order)
        const result = await placeOrder(order)
        console.log(result)
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

