import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
const STATUSES = [
  "pending",
  "preparing",
  "out_for_delivery",
  "delivered",
  "cancelled",
];
export default function OrderCard({
  order,
  isOpen,
  onToggle,
  onClose,
  onUpdateStatus,
}: any) {
  const [open, setOpen] = useState(false);

  const statusColors: any = {
    pending: "bg-orange-500",
    preparing: "bg-blue-500",
    out_for_delivery: "bg-purple-500",
    delivered: "bg-green-600",
    cancelled: "bg-red-500",
  };
  return (
    <View className="bg-white rounded-2xl p-4 mx-3 my-2 shadow">
      {/* Header */}
      {/* <View className="flex-row justify-between items-center">
        <Text className="font-bold text-base">#{order.id}</Text>

        <Text
          className={`text-white text-xs px-3 py-1 rounded-full capitalize ${
            statusColors[order.status]
          }`}
        >
          {order.status.replaceAll("_", " ")}
        </Text>
      </View> */}
      <View className="bg-white rounded-2xl   my-2 relative">
        {/* Header */}
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-base">#{order.id}</Text>

          {/* STATUS BUTTON */}
          <Pressable onPress={onToggle}>
            <Text
              className={`text-white text-xs px-3 py-1 rounded-full ${
                statusColors[order.status]
              }`}
            >
              {order.status.replaceAll("_", " ")}
              <Ionicons name="caret-down-sharp" className="ms-1"></Ionicons>
            </Text>
          </Pressable>

          {/* DROPDOWN */}
          {isOpen && (
            <View className="absolute right-4  bg-white rounded-xl shadow p-2 w-44 z-50">
              {STATUSES.map((status) => (
                <Pressable
                  key={status}
                  className="py-2 px-2"
                  onPress={() => {
                    onUpdateStatus(order.id, status);
                    onClose(); // close after selection
                  }}
                >
                  <Text className="capitalize">
                    {status.replaceAll("_", " ")}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Items */}
        <View className="my-2">
          {order.items.map((item: any) => (
            <Text key={item.productId} className="text-gray-600 text-sm">
              {item.quantity}x {item.name}
            </Text>
          ))}
        </View>

        {/* Footer */}
        <View className="flex-row justify-between items-center mt-2">
          <Text className="font-semibold text-base">
            Rs {order.pricing.total}
          </Text>

          <Pressable
            onPress={() => {
              router.push({
                pathname: "/screens/order-detail",
                params: { order: order },
              });
            }}
          >
            <Text className="text-blue-500 underline">Details</Text>
          </Pressable>
        </View>

        {/* Button
      {order.status !== "delivered" && order.status !== "cancelled" && (
        <TouchableOpacity
          className="bg-black mt-3 py-2 rounded-xl items-center"
          onPress={() => onUpdateStatus(order.id)}
        >
          <Text className="text-white">Update Status</Text>
        </TouchableOpacity>
      )} */}
      </View>
    </View>
  );
}
