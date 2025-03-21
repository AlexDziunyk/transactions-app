import { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import { IOrderItem } from "./types/order";
import OrderItem from "./components/OrderItem/OrderItem";

function App() {
  const [orders, setOrders] = useState<IOrderItem[]>([]);

  return (
    <>
      <Form setOrders={setOrders} />
      {orders.length > 0 ? (
        <div className="orders">
          {orders.map((item) => (
            <OrderItem
              key={item._id}
              productName={item.productId.name}
              quantity={item.quantity}
              price={item.totalPrice}
              username={item.userId.name}
            />
          ))}
        </div>
      ) : (
        <p>No orders yet</p>
      )}
    </>
  );
}

export default App;
