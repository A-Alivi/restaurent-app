import SearchInput from "@/app/components/SearchInput";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import OrderCard from "../components/order/order-card";
import { orders as initialOrders } from "../data/orders";
import { useOrderStore } from "../store/useOrderStore";

export default function OrdersScreen() {
  const orders = useOrderStore((state) => state.orders);
  const setOrders = useOrderStore((state) => state.setOrders);
  const updateStatus = useOrderStore((state) => state.updateOrderStatus);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  useEffect(() => {
    setOrders(initialOrders);
  }, []);

  const handleUpdateStatus = (id: string) => {
    const order = orders.find((o) => o.id === id);
    if (!order) return;

    let nextStatus: any = "delivered";

    if (order.status === "pending") nextStatus = "preparing";
    else if (order.status === "preparing") nextStatus = "out_for_delivery";
    else if (order.status === "out_for_delivery") nextStatus = "delivered";

    updateStatus(id, nextStatus);
  };
  const [value, setValue] = useState("");

  return (
    <>
      <View className="flex-1 bg-gray-100">
        <FlatList
          ListHeaderComponent={
            <View className="ps-3 py-4">
              <Text className=" font-bold text-3xl ">Incoming Orders</Text>
              <Text className="text-sm color-gray-400 ">
                Manage active orders and kitchen queue.
              </Text>

              <SearchInput />
            </View>
          }
          data={[...orders].sort(
            (a, b) =>
              new Date(b.timestamps.createdAt).getTime() -
              new Date(a.timestamps.createdAt).getTime(),
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
              isOpen={openDropdownId === item.id}
              onToggle={() =>
                setOpenDropdownId(openDropdownId === item.id ? null : item.id)
              }
              onClose={() => setOpenDropdownId(null)}
              onUpdateStatus={handleUpdateStatus}
            />
          )}
          ListEmptyComponent={
            <Text className="text-center mt-10 text-gray-500">
              No Orders Found
            </Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </>
  );
}
