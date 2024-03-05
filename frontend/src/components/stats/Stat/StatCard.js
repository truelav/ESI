import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Stat, StatLabel, StatNumber, useColorModeValue, } from '@chakra-ui/react';
export function StatsCard(props) {
    const { title, stat, icon } = props;
    return (_jsx(Stat, { px: { base: 2, md: 4 }, py: '5', shadow: 'xl', border: '1px solid', borderColor: useColorModeValue('gray.800', 'gray.500'), rounded: 'lg', children: _jsxs(Flex, { justifyContent: 'space-between', children: [_jsxs(Box, { pl: { base: 2, md: 4 }, children: [_jsx(StatLabel, { fontWeight: 'medium', isTruncated: true, children: title }), _jsx(StatNumber, { fontSize: '2xl', fontWeight: 'medium', children: stat })] }), _jsx(Box, { my: 'auto', color: useColorModeValue('gray.800', 'gray.200'), alignContent: 'center', children: icon })] }) }));
}
