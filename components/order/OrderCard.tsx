import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useOrderStore } from "../../store/useOrderStore";
import StatusBadge from "../ui/StatusBadge";
import OrderItemRow from "./OrderItemRow";

export default function OrderCard({ order }: any) {
  const router = useRouter();
  const orderStore = useOrderStore();
  const borderColor: any = {
    pending: "border-orange-400",
    preparing: "border-blue-400",
    out_for_delivery: "border-orange-300",
    delivered: "border-green-400",
    cancelled: "border-red-400",
  };

  const handleAccept = (id: string) => {
    orderStore.updateOrderStatus(id, "preparing");
  };

  const handleDecline = (id: string) => {
    orderStore.updateOrderStatus(id, "cancelled");
  };

  // ✅ safe total calculation
  const total = order?.items?.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0,
  );
  console.log("Orders", order);
  return (
    <View
      className={`bg-white rounded-2xl p-4 mb-4 border-t-4 ${
        borderColor[order.status] || "border-gray-300"
      }`}
    >
      {/* HEADER */}
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-xl font-bold">{order.id}</Text>
          <Text className="text-gray-500">{order.username}</Text>
        </View>

        <View>
          <View className="flex-row py-2 items-center">
            <Ionicons name="timer-outline" size={18} />
            <Text className="text-gray-400 ml-1">
              {order.timestamps.updatedAt
                ? formatDistanceToNow(new Date(order.timestamps.updatedAt), {
                    addSuffix: true,
                  })
                : ""}
            </Text>
          </View>

          <StatusBadge status={order.status} />
        </View>
      </View>

      {/* ITEMS */}
      <View className="mt-3 border-t border-b border-gray-200 pt-2">
        {order.items?.map((item: any, i: number) => (
          <OrderItemRow key={i} item={item} />
        ))}
      </View>

      {/* FOOTER */}
      <View className="flex-row justify-between items-center mt-3">
        <Text className="text-lg font-semibold">Rs.{total || 0}</Text>

        {/* ACTIONS */}
        {order.status === "pending" ? (
          <View className="flex-row gap-2">
            <Pressable
              className="border px-3 py-1 rounded-lg"
              onPress={() => handleDecline(order.id)}
            >
              <Text>Decline</Text>
            </Pressable>

            <Pressable
              className="bg-red-600 px-3 py-1 rounded-lg"
              onPress={() => handleAccept(order.id)}
            >
              <Text className="text-white">Accept</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/screens/order-detail",
                params: { id: order.id },
              })
            }
          >
            <Text className="text-red-600 font-medium">Details</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
