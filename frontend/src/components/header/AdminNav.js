import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { MdShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Image, } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon,
// ChevronRightIcon,
 } from "@chakra-ui/icons";
import logo from "/logo.png";
import "./styles.css";
export default function AdminNav({ logOut }) {
    const { isOpen, onToggle } = useDisclosure();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
    // @ts-ignore 
    const products = useSelector((state) => state.cart.products);
    return (_jsxs(Box, { children: [_jsxs(Flex, { bg: useColorModeValue("white", "gray.800"), color: useColorModeValue("gray.600", "white"), minH: "60px", py: { base: 2 }, px: { base: 4 }, borderBottom: 1, borderStyle: "solid", borderColor: useColorModeValue("gray.200", "gray.900"), align: "center", children: [_jsx(Flex, { flex: { base: 1, md: "auto" }, ml: { base: -2 }, display: { base: "flex", md: "none" }, children: _jsx(IconButton, { onClick: onToggle, icon: isOpen ? _jsx(CloseIcon, { w: 3, h: 3 }) : _jsx(HamburgerIcon, { w: 5, h: 5 }), variant: "ghost", "aria-label": "Toggle Navigation" }) }), _jsxs(Flex, { flex: { base: 1 }, justify: { base: "center", md: "start" }, children: [_jsx(Image, { src: logo }), _jsx(Flex, { display: { base: "none", md: "flex" }, ml: 10, children: _jsx(DesktopNav, {}) })] }), _jsx(Stack, { flex: { base: 1, md: 0 }, justify: "flex-end", direction: "row", spacing: 6, mr: 4, children: _jsx(Link, { to: "/cart", children: _jsxs("div", { className: "cart", children: [_jsx("span", { className: "cart-icon", children: _jsx(MdShoppingCart, { size: 32 }) }), _jsxs("span", { className: products.length ? "count" : "", children: [products.length ? products.length : "", " "] })] }) }) }), _jsx(Stack, { flex: { base: 1, md: 0 }, justify: "flex-end", direction: "row", spacing: 6, children: _jsx(Button, { display: { base: "none", md: "inline-flex" }, fontSize: "sm", fontWeight: 600, color: "white", bg: "blue.500", onClick: logOut, _hover: {
                                bg: "blue.700",
                            }, children: "Log Out" }) })] }), _jsx(Collapse, { in: isOpen, animateOpacity: true, children: _jsx(MobileNav, {}) })] }));
}
const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    return (_jsx(Stack, { direction: "row", spacing: 4, children: NAV_ITEMS.map((navItem) => (_jsx(Box, { children: _jsxs(Popover, { trigger: "hover", placement: "bottom-start", children: [_jsx(PopoverTrigger, { children: _jsx(Link, { to: navItem.href ?? "#", children: _jsx(Box, { p: 2, mt: 4, fontSize: "md", fontWeight: 500, color: linkColor, _hover: {
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }, children: navItem.label }) }) }), navItem.children && (_jsx(PopoverContent, { border: 0, boxShadow: "xl", bg: popoverContentBgColor, p: 4, rounded: "xl", minW: "sm" }))] }) }, navItem.label))) }));
};
// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//   return (
//     <Link to={`${href}`}>
//       <Box
//         role={"group"}
//         display={"block"}
//         p={2}
//         rounded={"md"}
//         _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//       >
//         <Stack direction={"row"} align={"center"}>
//           <Box>
//             <Text
//               transition={"all .3s ease"}
//               _groupHover={{ color: "pink.400" }}
//               fontWeight={500}
//             >
//               {label}
//             </Text>
//             <Text fontSize={"sm"}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={"all .3s ease"}
//             transform={"translateX(-10px)"}
//             opacity={0}
//             _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//             justify={"flex-end"}
//             align={"center"}
//             flex={1}
//           >
//             <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Box>
//     </Link>
//   );
// };
const MobileNav = () => {
    return (_jsx(Stack, { bg: useColorModeValue("white", "gray.800"), p: 4, display: { md: "none" }, children: NAV_ITEMS.map((navItem) => (_jsx(MobileNavItem, { ...navItem }, navItem.label))) }));
};
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    return (_jsxs(Stack, { spacing: 4, onClick: children && onToggle, children: [_jsx(Link, { to: href ?? "#", children: _jsxs(Box, { py: 2, 
                    // as="a"
                    // href={href ?? "#"}
                    justifyContent: "space-between", alignItems: "center", _hover: {
                        textDecoration: "none",
                    }, children: [_jsx(Text, { fontWeight: 600, color: useColorModeValue("gray.600", "gray.200"), children: label }), children && (_jsx(Icon, { as: ChevronDownIcon, transition: "all .25s ease-in-out", transform: isOpen ? "rotate(180deg)" : "", w: 6, h: 6 }))] }) }), _jsx(Collapse, { in: isOpen, animateOpacity: true, style: { marginTop: "0!important" }, children: _jsx(Stack, { mt: 2, pl: 4, borderLeft: 1, borderStyle: "solid", borderColor: useColorModeValue("gray.200", "gray.700"), align: "start", children: children &&
                        children.map((child) => (_jsx(Box, { as: "a", py: 2, href: child.href, children: child.label }, child.label))) }) })] }));
};
const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
];
