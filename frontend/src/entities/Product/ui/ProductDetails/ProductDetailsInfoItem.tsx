import { Text, Heading } from "@chakra-ui/react"

interface ProductDetailsInfoItemProps {
    productInfo: string | number | undefined
    element: string
    info?: string
    color?: string
    size?: string
}

export const ProductDetailsInfoItem = (props: ProductDetailsInfoItemProps) => {

    const { productInfo, info, color, size, element } = props

    let content = <></>

    if(element === "TEXT"){
        content = (
            <Text color={color} fontSize={size}>
                {info} {productInfo}
            </Text>
        )
    } else if (element === "HEADING") {
        content = (
            <Heading color={color} size={size} my={2}>
                {info} {productInfo}
            </Heading>
        )
    }

    return (content)

}