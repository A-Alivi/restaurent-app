// import { View, Text, Pressable, FlatList } from "react-native";
import OrderCard from "@/components/order/OrderCard";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useOrderStore } from "../../store/useOrderStore";

export default function HomeScreen() {
  const router = useRouter();
  const orderStore = useOrderStore();
  const orders = orderStore.orders;
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = async () => {
    setRefreshing(true);

    try {
      orders; // or refetch single order
      console.log("Orders on refresh", orders);
    } catch (e) {
      console.log(e);
    }

    setRefreshing(false);
  };
  console.log("orders in index", orders);
  return (
    <View className="flex-1 bg-[#f5efec] px-4 pt-4">
      {/* FlatList */}
      {/* <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={orders}
        keyExtractor={(order: any) => order.id}
        ListHeaderComponent={
          <ListHeader onAddPress={() => setModalVisible(true)} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        // renderItem={() => <Item title="Hakeem" />}
        renderItem={({ item }) => <OrderCard order={item} />}
      /> */}
      <ScrollView>
        <OrderCard order={orders} />
      </ScrollView>
      {/* <AddOrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(order) => {
          orderStore.addOrder(order);
        }}
      /> */}
    </View>
  );
}
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View className="flex-1">
    <Text className="text-xl font-bold">{title}</Text>
  </View>
);
