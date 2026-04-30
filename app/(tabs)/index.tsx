// import { View, Text, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import OrderCard from "../components/order/OrderCard";
import SearchBar from "../components/ui/SearchBar";
import { useOrderStore } from "../store/useOrderStore";

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
        ListHeaderComponent={
          <>
            <Text className="text-2xl font-bold text-[#b23a1a]">
              Kitchen Manager
            </Text>

            <Text className="text-lg font-semibold mt-3">Incoming Orders</Text>

            <Text className="text-gray-500 mb-3">
              Manage active tickets and kitchen queue.
            </Text>

            {/* Search */}
            <View className="flex-row gap-2 mb-4">
              <SearchBar />

              <Pressable className="bg-red-600 px-4 rounded-xl justify-center">
                <Text className="text-white text-xl">+</Text>
              </Pressable>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={(order: any) => (
          <OrderCard
            order={order}
            onPress={() =>
              router.push(`../screens/order-detail?id=${order.id}`)
            }
          />
        )}
      />
    </View>
  );
}
