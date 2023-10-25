import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

export enum CardVariants {
    elevated = "elevated",
    outline = "outline",
    filled = "filled",
    unstyled = "unstyled",
}

export enum sizes {
    sm = "sm",
    md = "md",
    lg = "lg"
}

export enum directions {
    column = 'column',
    row = 'row'
}

// enum aligns {
    
// }

// enum justifys {
    
// }


interface CardComponentProps {
    cardVariant?: CardVariants
    size?: sizes
    children?: ReactNode
    direction?: {
        base: directions,
        sm: directions
    }
    additionalClassNames?: string
 }

function CardComponent(props : CardComponentProps) {
    const {cardVariant, size, direction, additionalClassNames, children} = props
    const classNames = `CardComponent ${additionalClassNames}`
    return (
        <Card variant={cardVariant} size={size} direction={direction} className={classNames}>
            {children}
        </Card>
    )
}

export default CardComponent