import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CardTextComponentProps {
    children: ReactNode
    fontSize?: string
    color?: string
    isSelected?: boolean
}

export const CardTextComponent = (props: CardTextComponentProps) => {

    const {fontSize, color, children} = props

    return (
        <Text fontSize={fontSize} color={color}>
            {children}
        </Text>
    )
}