import * as Notifications from "expo-notifications";

export async function sendNewOrderNotification(orderId: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🆕 New Order Received",
      body: `Order ${orderId} has been added`,
    },
    trigger: null, // instant notification
  });
}
