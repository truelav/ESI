import { Order } from "../../../../app/api/types/Cart/Order";
import { OrderListItem } from "../OrderListItem/OrderListItem";

export const OrderList = (props: { orders: Order[] | never[] }) => {
    const { orders } = props;
    return (
        <>
            <h2>Orders: </h2>
            <div>
                {orders.map((order: Order) => (
                    <OrderListItem order={order} key={order._id}/>
                ))}
            </div>
        </>
    );
};
