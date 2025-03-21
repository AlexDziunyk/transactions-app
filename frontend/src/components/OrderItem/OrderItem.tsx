import "./style.scss";

interface OrderItemProps {
  productName: string;
  quantity: string;
  price: number;
  username: string;
}

const OrderItem = ({
  productName,
  quantity,
  price,
  username,
}: OrderItemProps) => {
  return (
    <div className="order-item">
      <p>
        {username} bought {quantity} {productName} for {price}$
      </p>
    </div>
  );
};

export default OrderItem;
