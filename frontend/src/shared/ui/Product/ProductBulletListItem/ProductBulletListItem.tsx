import { ListItem } from "@chakra-ui/react"

interface BulletItemProps {
    bulletItem: string
}

export const ProductBulletListItem = (props: BulletItemProps) => {

    const {bulletItem} = props

    return (
        <>
            <ListItem>{bulletItem}</ListItem>
        </>
    )
}