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

const PresentationAccordionItem = ({ category }) => {
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(false)
    const brandIds = category.products.map((product: Product) => product._id)

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
                           {category.category}
                        </Checkbox>
                        <AccordionIcon />
                        {category.products.length} - items available
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {category.products.map((product: Product) => (
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