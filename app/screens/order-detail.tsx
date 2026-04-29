import OrderItem from "@/components/order/order-item";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { orders } from "../../data/orders";
const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((order) => order.id === id);
  const orderPlacedAt = String(order?.timestamps.updatedAt);
  const items = order?.items;
  console.log(items);
  return (
    <View className="m-3 p-3">
      <Text className="font-bold text-3xl my-1">{id}</Text>
      <Text className="text-sm color-gray-400 my-1">
        placed {getTimeAgo(orderPlacedAt)}
      </Text>

      <OrderItem items={items} />
    </View>
  );
};

export default OrderDetailScreen;

const getTimeAgo = (dateString: string) => {
  const now = new Date();
  const created = new Date(dateString);

  const diffMs = now.getTime() - created.getTime();

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return "Just now";

  if (diffMinutes < 60) {
    return diffMinutes === 1 ? "1 min ago" : `${diffMinutes} mins ago`;
  }

  if (diffHours < 24) {
    return diffHours === 1 ? "1 hr ago" : `${diffHours} hrs ago`;
  }

  return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
};
