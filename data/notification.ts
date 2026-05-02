// data/notifications.ts
import { Notification } from "../models/notification";

export const notificationsData: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "New Order Received",
    message: "Order #1238 needs preparation. 3 items included.",
    orderId: "1238",
    time: "1m ago",
    isRead: false,
  },
  {
    id: "2",
    type: "payment",
    title: "Payment Confirmed",
    message: "Payment successful for Order #1237.",
    orderId: "1237",
    time: "10m ago",
    isRead: true,
  },
  {
    id: "3",
    type: "inquiry",
    title: "Customer Inquiry",
    message: "Special request added to Order #1230.",
    orderId: "1230",
    time: "25m ago",
    isRead: true,
  },
  {
    id: "4",
    type: "system",
    title: "Menu Sync Complete",
    message: "Daily menu synchronization finished successfully.",
    time: "1h ago",
    isRead: true,
  },
];
