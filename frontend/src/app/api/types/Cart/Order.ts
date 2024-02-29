import { CartState } from "../../../../entities/Cart/model/slice/cartSlice";


export interface OrderUserProps {
    userEmail: string
    userId: string
}

export interface OrderCartSummaryProps {
    totalAmount: number
    totalProducts: number
}

export interface Order{
    cart: CartState;
    orderSummary: OrderCartSummaryProps
    user: OrderUserProps;
    updatedAt: string
    products: []
    _id?: string;
}