import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { PlaceOrderFeature } from '../../../../features/cart/PlaceOrderFeatures/PlaceOrderFeature'
import {ProductPrice} from '../../../Product/ui/ProductPrice/ProductPrice'

type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cart = useSelector((state) => state.cart)
    console.log(cart)
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={ProductPrice(597)} />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {ProductPrice(597)}
          </Text>
        </Flex>
      </Stack>

      <PlaceOrderFeature />

    </Stack>
  )
}
