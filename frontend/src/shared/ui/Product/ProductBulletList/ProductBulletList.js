import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading, UnorderedList } from "@chakra-ui/react";
import { ProductBulletListItem } from "../ProductBulletListItem/ProductBulletListItem";
const bulletList = [
    "New and unique twin Turbo-Star technology is designed to remove and capture excess fat from the food",
    "Axle capacity easily handles a whole chicken, 2 bags of frozen fries, allowing you to prepare up to 6 portions worth of food for a whole world of possibilities",
    "With no preheat needed you can save time and start cooking right away",
    "Includes a Quick Clean basket with removable non-stick mesh so cleaning is fast and easy",
    "The removable nonstick Coated drawer and the food basket are dishwasher safe"
];
export const ProductBulletList = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { size: "md", my: 2, children: "Product Features:" }), _jsx(UnorderedList, { spacing: 2, children: bulletList.map((bulletItem) => (_jsx(ProductBulletListItem, { bulletItem: bulletItem }, bulletItem))) })] }));
};
