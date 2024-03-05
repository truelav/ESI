import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Text, Drawer, DrawerContent, useDisclosure, } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, } from "react-icons/fi";
const LinkItems = [
    { name: "dashboard", icon: FiHome, link: "" },
    { name: "products", icon: FiCompass, link: "products" },
    { name: "presentation", icon: FiStar, link: "presentation" },
    { name: "orders", icon: FiTrendingUp, link: "orders" },
    { name: "users", icon: FiSettings, link: "users" },
    { name: "inventory", icon: FiTrendingUp, link: "inventory" },
];
export default function SimpleSidebar() {
    // const {username} = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (_jsxs(Box, { minH: "", children: [_jsx(SidebarContent, { onClose: () => onClose, display: { base: "none", md: "block" } }), _jsx(Drawer, { isOpen: isOpen, placement: "left", onClose: onClose, returnFocusOnClose: false, onOverlayClick: onClose, size: "full", children: _jsx(DrawerContent, { children: _jsx(SidebarContent, { onClose: onClose }) }) }), _jsx(MobileNav, { display: { base: "flex", md: "none" }, onOpen: onOpen }), _jsx(Box, { ml: { base: 0, md: 60 }, p: "4" })] }));
}
const SidebarContent = ({ onClose, ...rest }) => {
    return (_jsxs(Box, { bg: useColorModeValue("white", "gray.900"), borderRight: "1px", borderRightColor: useColorModeValue("gray.200", "gray.700"), w: { base: "full", md: 60 }, pos: "fixed", h: "calc(100vh - 300px)", ...rest, children: [_jsxs(Flex, { h: "20", alignItems: "center", mx: "8", justifyContent: "space-between", children: [_jsx(Text, { fontSize: "2xl", fontFamily: "monospace", fontWeight: "bold", children: "Welcome Admin" }), _jsx(CloseButton, { display: { base: "flex", md: "none" }, onClick: onClose })] }), LinkItems.map((link) => (_jsx(NavItem, { icon: link.icon, link: link.link, children: link.name }, link.name)))] }));
};
const NavItem = ({ icon, link, children, ...rest }) => {
    return (_jsx(Link, { to: `/dashboard/${link}`, children: _jsx(Box, { style: { textDecoration: "none" }, _focus: { boxShadow: "none" }, fontSize: "lg", textTransform: "capitalize", children: _jsxs(Flex, { align: "center", p: "4", mx: "4", borderRadius: "lg", role: "group", cursor: "pointer", _hover: {
                    bg: "cyan.400",
                    color: "white",
                }, ...rest, children: [icon && (_jsx(Icon, { mr: "4", fontSize: "16", _groupHover: {
                            color: "white",
                        }, as: icon })), children] }) }) }));
};
const MobileNav = ({ onOpen, ...rest }) => {
    return (_jsxs(Flex, { ml: { base: 0, md: 60 }, px: { base: 4, md: 24 }, height: "20", alignItems: "center", bg: useColorModeValue("white", "gray.900"), borderBottomWidth: "1px", borderBottomColor: useColorModeValue("gray.200", "gray.700"), justifyContent: "flex-start", ...rest, children: [_jsx(IconButton, { variant: "outline", onClick: onOpen, "aria-label": "open menu", icon: _jsx(FiMenu, {}) }), _jsx(Text, { fontSize: "2xl", ml: "8", fontFamily: "monospace", fontWeight: "bold", textTransform: "uppercase", children: "Logo" })] }));
};
