import { Product } from "../../../Product/model/types/product"

export interface CartProductsInterface {
    cartQuantity: number,
    product: Product
}

export interface CartProps {
    products: CartProductsInterface[],
    totalAmount: number
}

export interface CartProductsList {

}