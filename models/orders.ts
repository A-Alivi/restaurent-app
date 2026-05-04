export type OrderStatus =
  | "pending"
  | "accepted"
  | "preparing"
  | "cancelled"
  | "out_for_delivery"
  | "delivered";

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
  note?: string;
}

export interface Order {
  user: {
    id: string;
    name: string;
    contact: string;
  };
  id: string;
  items: OrderItem[];

  pricing: {
    subtotal: number;
    tax: number;
    deliveryFee: number;
    total: number;
  };
  status: OrderStatus;
  payment: {
    method: string;
    status: string;
  };
  delivery: {
    address: string;
    city: string;
  };
  timestamps: {
    createdAt: string;
    updatedAt: string;
    deliveredAt?: string;
  };
}
export interface OrderStore {
  orders: Order[];

  // actions
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  deleteOrder: (id: string) => void;

  // derived
  getOrdersByStatus: (status: OrderStatus) => Order[];
}
