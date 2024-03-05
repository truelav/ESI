import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, chakra, Container, SimpleGrid, Stack, Text, VisuallyHidden, Input, IconButton, useColorModeValue, Image, } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import logo from "/logo.png";
const SocialButton = ({ children, label, href, }) => {
    return (_jsxs(chakra.button, { bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'), rounded: 'full', w: 8, h: 8, cursor: 'pointer', as: 'a', href: href, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease', _hover: {
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }, children: [_jsx(VisuallyHidden, { children: label }), children] }));
};
const ListHeader = ({ children }) => {
    return (_jsx(Text, { fontWeight: '500', fontSize: 'lg', mb: 2, children: children }));
};
export default function LargeWithNewsletter() {
    return (_jsx(Box, { bg: useColorModeValue('gray.50', 'gray.900'), color: useColorModeValue('gray.700', 'gray.200'), children: _jsx(Container, { as: Stack, maxW: '6xl', py: 10, children: _jsxs(SimpleGrid, { templateColumns: { sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }, spacing: 8, children: [_jsxs(Stack, { spacing: 6, children: [_jsx(Box, { children: _jsx(Image, { src: logo }) }), _jsx(Text, { fontSize: 'sm', children: "\u00A9 2023 ESI Enterprises. All rights reserved" }), _jsxs(Stack, { direction: 'row', spacing: 6, children: [_jsx(SocialButton, { label: 'Twitter', href: '#', children: _jsx(FaTwitter, {}) }), _jsx(SocialButton, { label: 'YouTube', href: '#', children: _jsx(FaYoutube, {}) }), _jsx(SocialButton, { label: 'Instagram', href: '#', children: _jsx(FaInstagram, {}) })] })] }), _jsxs(Stack, { align: 'flex-start', children: [_jsx(ListHeader, { children: "Company" }), _jsx(Box, { as: "a", href: '#', children: "About us" }), _jsx(Box, { as: "a", href: '#', children: "Blog" }), _jsx(Box, { as: "a", href: '#', children: "Contact us" }), _jsx(Box, { as: "a", href: '#', children: "Pricing" }), _jsx(Box, { as: "a", href: '#', children: "Testimonials" })] }), _jsxs(Stack, { align: 'flex-start', children: [_jsx(ListHeader, { children: "Support" }), _jsx(Box, { as: "a", href: '#', children: "Help Center" }), _jsx(Box, { as: "a", href: '#', children: "Terms of Service" }), _jsx(Box, { as: "a", href: '#', children: "Legal" }), _jsx(Box, { as: "a", href: '#', children: "Privacy Policy" }), _jsx(Box, { as: "a", href: '#', children: "Satus" })] }), _jsxs(Stack, { align: 'flex-start', children: [_jsx(ListHeader, { children: "Stay up to date" }), _jsxs(Stack, { direction: 'row', children: [_jsx(Input, { placeholder: 'Your email address', bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'), border: 0, _focus: {
                                            bg: 'whiteAlpha.300',
                                        } }), _jsx(IconButton, { bg: useColorModeValue('blue.400', 'blue.800'), color: useColorModeValue('white', 'gray.800'), _hover: {
                                            bg: 'blue.600',
                                        }, "aria-label": "Subscribe", icon: _jsx(BiMailSend, {}) })] })] })] }) }) }));
}
