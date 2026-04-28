import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
const STATUSES = [
  "pending",
  "preparing",
  "out_for_delivery",
  "delivered",
  "cancelled",
];
export default function OrderCard({ order, onUpdateStatus }: any) {
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
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text
              className={`text-white text-xs px-3 py-1 rounded-full capitalize ${
                statusColors[order.status]
              }`}
            >
              {order.status.replaceAll("_", " ")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* DROPDOWN */}
        {open && (
          <View className="absolute right-4 top-12 bg-white rounded-xl shadow p-2 w-44 z-50">
            {STATUSES.map((status) => (
              <TouchableOpacity
                key={status}
                className="py-2 px-2 rounded-lg hover:bg-gray-100"
                onPress={() => {
                  onUpdateStatus(order.id, status);
                  setOpen(false);
                }}
              >
                <Text className="text-sm capitalize">
                  {status.replaceAll("_", " ")}
                </Text>
              </TouchableOpacity>
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

        <Text className="text-gray-400 text-sm">{order.delivery.city}</Text>
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
  );
}
