import { OrderStatus } from "../models/orders";
type Action = {
  key: string;
  label: string;
  icon: string;
  type: string;
  nextStatus: OrderStatus;
};
type ActionType = "primary" | "outline" | "disabled";

export const orderActions: Record<OrderStatus, Action[]> = {
  pending: [
    {
      key: "accept",
      label: "Accept Order",
      icon: "checkmark-circle",
      type: "primary",
      nextStatus: "accepted",
    },
  ],

  accepted: [
    {
      key: "prepare",
      label: "Start Preparing",
      icon: "ramen-dining",
      type: "outline",
      nextStatus: "preparing",
    },
  ],

  preparing: [
    {
      key: "delivery",
      label: "Out for Delivery",
      icon: "car-outline",
      type: "disabled",
      nextStatus: "out_for_delivery",
    },
  ],

  out_for_delivery: [
    {
      key: "delivered",
      label: "Delivered",
      icon: "checkmark-done-outline",
      type: "disabled",
      nextStatus: "delivered",
    },
  ],
  delivered: [],
  cancelled: [],
};
