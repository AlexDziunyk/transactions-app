export interface IOrderItem {
  _id: string;
  productId: { name: string };
  userId: { name: string };
  quantity: string;
  totalPrice: number;
}
