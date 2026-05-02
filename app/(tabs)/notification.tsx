// screens/NotificationScreen.tsx
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Header from "../components/notification/Header";
import NotificationCard from "../components/notification/NotificationCard";
import { notificationsData } from "../data/notification";
import { Notification } from "../models/notification";

const NotificationScreen = () => {
  const [data, setData] = useState<Notification[]>(notificationsData);

  const markAllRead = () => {
    const updated = data.map((item) => ({
      ...item,
      isRead: true,
    }));
    setData(updated);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header />

      <View className="px-4 mt-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold">Notification Center</Text>
            <Text className="text-gray-500">Real-time alerts and updates</Text>
          </View>

          <Pressable onPress={markAllRead}>
            <Text className="text-orange-600 font-semibold">MARK ALL READ</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <NotificationCard
            item={item}
            onPress={() => console.log(item.id)}
            onAction={() => console.log("Action:", item.id)}
          />
        )}
      />
    </View>
  );
};

export default NotificationScreen;
