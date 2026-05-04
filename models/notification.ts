export type NotificationType = "order" | "payment" | "inquiry" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  orderId?: string;
  time: string; // "1m ago"
  isRead: boolean;
}
