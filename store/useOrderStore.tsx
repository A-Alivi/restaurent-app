import { create } from "zustand";

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

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],

  setOrders: (orders) => set({ orders }),

  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
    })),

  updateOrderStatus: (id: string, status: OrderStatus) =>
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
