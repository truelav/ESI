import { Alert, AlertIcon, Button, Stack } from "@chakra-ui/react"
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
    const [placeOrder,  { isLoading, error, isSuccess }] = usePlaceOrderMutation()

    const [cookies] = useCookies(["authToken"]);
    const user = jwtDecode(cookies.authToken)
    const order = {cart, user}


    const handlePlaceOrder = async () => {
        const result = await placeOrder(order)
        console.log(result)

        setTimeout(() => {
            dispatch(clearCart())
        }, 2000)
    }

    let content = <></>

    if (isSuccess) {
        content =  (
            <Alert status='success' variant='subtle' height="200px">
                <AlertIcon />
                Order sent to the server. Thank You!
            </Alert>
        )
    }

    if (error) {
        content = (
            <Alert status='error' height="200px">
                <AlertIcon />
                There was an error processing your request, Refresh the page and try again.
            </Alert>
        );
    }

    if (isLoading) {
        content = <div>...Is Loading</div>;

    } else {
        content = (
            <>
                <Stack>
                    {content}
                </Stack>
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

    return content
}

