// import { View, Text, Pressable, FlatList } from "react-native";
import ListHeader from "@/components/ListHeader";
import OrderCard from "@/components/order/OrderCard";
import React, { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrderStore } from "../../store/useOrderStore";
export default function HomeScreen() {
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
    <SafeAreaView>
      <View className="flex-1 bg-[#f5efec] px-4 pt-4">
        {/* FlatList */}
        {/* {orders.map((order) => (
          <OrderCard order={order} />
        ))} */}
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={orders}
          keyExtractor={(item: any) => item.id}
          ListHeaderComponent={
            <ListHeader onAddPress={() => setModalVisible(true)} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => {
            return <OrderCard order={item} />;
          }}
        />

        {/* <AddOrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(order) => {
          orderStore.addOrder(order);
        }}
      /> */}
      </View>
    </SafeAreaView>
  );
}
