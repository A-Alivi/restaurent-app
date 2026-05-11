// screens/NotificationScreen.tsx
import NotificationCard from "@/components/notification/NotificationCard";
import { useOrderStore } from "@/store/useOrderStore";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/notification/Header";

const NotificationScreen = () => {
  const pendingOrders = useOrderStore().getOrdersByStatus("pending");
  const notification = pendingOrders;
  return (
    <SafeAreaView>
      <View className="flex-1 bg-gray-100">
        <Header />

        <View className="px-4 mt-4">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-2xl font-bold">Notification Center</Text>
              <Text className="text-gray-500">
                Real-time alerts and updates
              </Text>
            </View>
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
            <NotificationCard
              title="New Order"
              description="A new order has been added to the queue."
              orderId={item.id}
              time={
                item?.timestamps?.updatedAt
                  ? formatDistanceToNow(new Date(item.timestamps.updatedAt), {
                      addSuffix: true,
                    })
                  : ""
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
