// utils/notificationHelpers.ts
import { Notification } from "@/models/notification";

export const createOrderNotification = (
  orderId: string,
  itemCount: number,
): Notification => ({
  id: Date.now().toString(),
  type: "order",
  title: "New Order Received",
  message: `Order #${orderId} needs preparation. ${itemCount} items included.`,
  orderId,
  time: "Just now",
  isRead: false,
});
