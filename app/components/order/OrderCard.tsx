import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import StatusBadge from "../ui/StatusBadge";
import OrderItemRow from "./OrderItemRow";

export default function OrderCard({ order, onPress }: any) {
  const borderColor: any = {
    pending: "border-orange-400",
    preparing: "border-blue-400",
    delivering: "border-orange-300",
    delivered: "border-green-400",
  };
  console.log("inside ordercard", order.item);

  return (
    <View
      className={`bg-white rounded-2xl p-4 mb-4 border-t-4 ${borderColor[order.status]}`}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-xl font-bold">{order.item.id}</Text>
          <Text className="text-gray-500">{order.item.username}</Text>
        </View>
        <View>
          <View className="flex-row py-2 ms-1 justify-end">
            <Ionicons name="timer-outline" size={18} />
            <Text className="text-gray-400 ms-1 ">5 min ago</Text>
          </View>
          <StatusBadge status={order.item.status} />
        </View>
      </View>

      {/* Items */}
      <View className="mt-3 border-t border-b border-gray-200 pt-2">
        {order.item.items.map((item: any, i: number) => (
          <OrderItemRow key={i} item={item} />
        ))}
      </View>

      {/* Footer */}
      <View className="flex-row justify-between items-center mt-3">
        <Text className="text-lg font-semibold"></Text>

        {/* Actions */}
        {order.status === "pending" ? (
          <View className="flex-row gap-2">
            <Pressable className="border px-3 py-1 rounded-lg">
              <Text>Decline</Text>
            </Pressable>

            <Pressable className="bg-red-600 px-3 py-1 rounded-lg">
              <Text className="text-white">Accept</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={onPress}>
            <Text className="text-red-600 font-medium">Details</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
