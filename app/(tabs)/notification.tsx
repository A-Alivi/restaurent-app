// screens/NotificationScreen.tsx
import { useOrderStore } from "@/store/useOrderStore";
import React from "react";
import { FlatList, Text, View } from "react-native";
import Header from "../../components/notification/Header";

const NotificationScreen = () => {
  const pendingOrders = useOrderStore().getOrdersByStatus("pending");
  return (
    <View className="flex-1 bg-gray-100">
      <Header />

      <View className="px-4 mt-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold">Notification Center</Text>
            <Text className="text-gray-500">Real-time alerts and updates</Text>
          </View>

          {/* <Pressable onPress={markAllRead}>
            <Text className="text-orange-600 font-semibold">MARK ALL READ</Text>
          </Pressable> */}
        </View>
      </View>

      <FlatList
        data={pendingOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <>
            <Text className="text-xl font-semibold text-center mt-11">
              no notifications
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <View className="flex-col py-4 mt-4 px-3 border rounded-full  shadow-cyan-300 justify-between ">
            <Text>new order has been added to the list</Text>
            <Text>Order ID: {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;
