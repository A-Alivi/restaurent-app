// import { View, Text, Pressable, FlatList } from "react-native";
import AddOrderModal from "@/components/order/add-order-modal";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, View } from "react-native";
import ListHeader from "../../components/ListHeader";
import OrderCard from "../../components/order/OrderCard";
import { useOrderStore } from "../../store/useOrderStore";

export default function HomeScreen() {
  const router = useRouter();
  const orderStore = useOrderStore();
  const orders = orderStore.orders;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-[#f5efec] px-4 pt-4">
      {/* FlatList */}
      <FlatList
        data={orders}
        keyExtractor={(order: any) => order.id}
        ListHeaderComponent={
          <ListHeader onAddPress={() => setModalVisible(true)} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={(order: any) => <OrderCard order={order} />}
      />
      <AddOrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(order) => {
          orderStore.addOrder(order);
        }}
      />
    </View>
  );
}
