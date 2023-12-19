import { JwtPayload } from "jwt-decode";
import { CartState } from "../../../../entities/Cart/model/slice/cartSlice";

export interface Order {
    cart: CartState;
    user: JwtPayload;
}