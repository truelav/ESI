import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "@chakra-ui/react";
export var CardVariants;
(function (CardVariants) {
    CardVariants["elevated"] = "elevated";
    CardVariants["outline"] = "outline";
    CardVariants["filled"] = "filled";
    CardVariants["unstyled"] = "unstyled";
})(CardVariants || (CardVariants = {}));
export var sizes;
(function (sizes) {
    sizes["sm"] = "sm";
    sizes["md"] = "md";
    sizes["lg"] = "lg";
})(sizes || (sizes = {}));
export var directions;
(function (directions) {
    directions["column"] = "column";
    directions["row"] = "row";
})(directions || (directions = {}));
function CardComponent(props) {
    const { cardVariant, size, direction, additionalClassNames, children } = props;
    const classNames = `CardComponent ${additionalClassNames}`;
    return (_jsx(Card, { variant: cardVariant, size: size, direction: direction, className: classNames, p: 2, my: 2, children: children }));
}
export default CardComponent;
