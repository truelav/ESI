import { ChangeEvent } from "react"

export interface EditProductInfoType {
    brand: string
    model: string
    description: string
    price: string | number
    quantity: string | number
    upc: string
    category: string
    subcategory?: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface EditProductImagesType {

}

export interface EditProductFeaturesType {

}