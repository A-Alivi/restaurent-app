import { Ionicons } from "@expo/vector-icons";
import { formatDate } from "date-fns";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import StatusBadge from "./ui/StatusBadge";
function OrderCard({ order }: any) {
  let totalPrice = 0;
  order.items.forEach((item: any) => (totalPrice += item.price));
  const formattedDate = formatDate(
    new Date(order.timestamps.updatedAt),
    "dd MMMM yyyy, hh:mm a",
  );
  return (
    <View className="bg-white p-4 rounded-2xl mb-4 shadow-sm border border-gray-100">
      {/* Top row */}
      <View className="flex-row justify-between">
        <Text className="text-indigo-600 font-bold">#{order.id}</Text>
        <StatusBadge status={order.status} />
      </View>
      <Text className="text-gray-400 text-sm">{formattedDate}</Text>
      {/* Name */}
      <Text className="text-lg font-semibold mt-2">{order.user.name}</Text>
      {/* Address */}
      <Text className="text-gray-500 text-sm">{order.delivery.address}</Text>
      {/* Bottom row */}
      <View className="flex-row justify-between  items-end">
        <Pressable
          className="mt-2"
          onPress={() => {
            router.push({
              pathname: "/screens/order-detail",
              params: { id: order.id },
            });
          }}
        >
          <View className="flex-row bg-indigo-100 border shadow-slate-500 rounded-full px-1 justify-start">
            <Ionicons name="eye-outline" size={20} />
            <Text className="ms-2">See Details</Text>
          </View>
        </Pressable>
        <Text className="text-indigo-700 font-bold text-lg">
          {"Rs. " + totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default OrderCard;
