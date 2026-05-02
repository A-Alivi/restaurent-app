// import { View, Text, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { FlatList, View } from "react-native";
import ListHeader from "../../components/ListHeader";
import OrderCard from "../../components/order/OrderCard";
import { useOrderStore } from "../../store/useOrderStore";

export default function HomeScreen() {
  const router = useRouter();
  const orderStore = useOrderStore();
  const orders = orderStore.orders;

  return (
    <View className="flex-1 bg-[#f5efec] px-4 pt-4">
      {/* Header */}

      {/* FlatList */}
      <FlatList
        data={orders}
        keyExtractor={(order: any) => order.id}
        ListHeaderComponent={<ListHeader />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={(order: any) => <OrderCard order={order} />}
      />
    </View>
  );
}
