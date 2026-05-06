import { OrderStatus, OrderStore } from "@/models/orders";
import { create } from "zustand";
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
