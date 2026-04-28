import { create } from "zustand";

type OrderStatus =
  | "pending"
  | "preparing"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface Order {
  id: string;
  userId: string;
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

interface OrderStore {
  orders: Order[];

  // actions
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  deleteOrder: (id: string) => void;

  // derived
  getOrdersByStatus: (status: OrderStatus) => Order[];
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],

  setOrders: (orders) => set({ orders }),

  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
    })),

  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
              timestamps: {
                ...order.timestamps,
                updatedAt: new Date().toISOString(),
                ...(status === "delivered"
                  ? { deliveredAt: new Date().toISOString() }
                  : {}),
              },
            }
          : order,
      ),
    })),

  deleteOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    })),

  getOrdersByStatus: (status) => {
    return get().orders.filter((o) => o.status === status);
  },
}));
