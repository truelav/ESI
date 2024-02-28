import {
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { PlaceOrderFeature } from "../../../../features/cart/PlaceOrderFeatures/PlaceOrderFeature";
import { ProductPrice } from "../../../Product/ui/ProductPrice/ProductPrice";
import { Product } from "../../../Product/model/types/product";

type OrderSummaryItemProps = {
    label: string;
    value?: string;
    children?: React.ReactNode;
};
interface CartOrderSummaryProps {
    products: Product[]
}


const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props;
    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
                {label}
            </Text>
            {value ? <Text fontWeight="medium">{value}</Text> : children}
        </Flex>
    );
};

export const CartOrderSummary = (props: CartOrderSummaryProps) => {
    const { products } = props
    return (
        <Stack
            spacing="8"
            borderWidth="1px"
            rounded="lg"
            padding="8"
            width="full"
        >
            <Heading size="md">Order Summary</Heading>

            <Stack spacing="6">
                <OrderSummaryItem
                    label="Total Products"
                    value={ProductPrice(products.length)}
                />
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                        Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                        {ProductPrice(products.length)}
                    </Text>
                </Flex>
            </Stack>

            <PlaceOrderFeature />
        </Stack>
    );
};
