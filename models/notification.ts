export type NotificationType = "order";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  orderId?: string;
  time: string;
  isRead: boolean;
}
