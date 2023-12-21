import { Order } from "../../../../app/api/types/Cart/Order";
import { OrderListHeader } from "../OrderListHeader/OrderListHeader";
import { OrderListItem } from "../OrderListItem/OrderListItem";

export const OrderList = (props: { orders: Order[] }) => {
    const { orders } = props;
    return (
        <>
            <h2>Orders: </h2>
            <div>
                <OrderListHeader />
                {orders.map((order: Order) => (
                    <OrderListItem order={order} key={order._id}/>
                ))}
            </div>
        </>
    );
};
