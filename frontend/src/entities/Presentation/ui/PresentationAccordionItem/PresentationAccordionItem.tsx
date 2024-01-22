import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { ProductItem } from "../../../../shared/ui/Product/ProductItem/ProductItem";
import { addSelectedProductCategory, removeSelectedProductCategory } from "../../../Product/model/slice/productSlice";
import { Product } from "../../../Product/model/types/product";

// interface PresentationAccordionItemProps {
//     brandGroup: 
// }

const PresentationAccordionItem = ({ brandGroup }) => {
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(false)
    const brandIds = brandGroup.products.map((product: Product) => product._id)

    const toggleProductCategory = () => {
        if (isSelected){
            dispatch(removeSelectedProductCategory(brandIds))
            setIsSelected(false)
        } else {
            dispatch(addSelectedProductCategory(brandIds))
            setIsSelected(true)
        }
    }

    return (
            <AccordionItem >
                <h2>
                    <AccordionButton>
                        <Checkbox
                            onChange={() => toggleProductCategory()}>
                            All {brandGroup.brand}
                        </Checkbox>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {brandGroup.products.map((product: any) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                        />
                    ))}
                </AccordionPanel>
            </AccordionItem>
        )
}

export default PresentationAccordionItem