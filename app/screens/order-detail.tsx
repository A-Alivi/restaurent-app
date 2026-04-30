// import OrderItem from "@/app/components/order/order-item";
// import { useLocalSearchParams } from "expo-router";
// import React from "react";
// import { Text, View } from "react-native";
// import { orders } from "../data/orders";
// const OrderDetailScreen = () => {
//   const { id } = useLocalSearchParams();
//   const order = orders.find((order) => order.id === id);
//   const orderPlacedAt = String(order?.timestamps.updatedAt);
//   const items = order?.items;
//   console.log(items);
//   return (
//     <View className="m-3 p-3">
//       <Text className="font-bold text-3xl my-1">{id}</Text>
//       <Text className="text-sm color-gray-400 my-1">
//         placed {getTimeAgo(orderPlacedAt)}
//       </Text>

//       <OrderItem items={items} />
//     </View>
//   );
// };

// export default OrderDetailScreen;

const getTimeAgo = (dateString: string) => {
  const now = new Date();
  const created = new Date(dateString);

  const diffMs = now.getTime() - created.getTime();

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return "Just now";

  if (diffMinutes < 60) {
    return diffMinutes === 1 ? "1 min ago" : `${diffMinutes} mins ago`;
  }

  if (diffHours < 24) {
    return diffHours === 1 ? "1 hr ago" : `${diffHours} hrs ago`;
  }

  return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
};

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { orders } from "../data/orders";
const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((order) => order.id === id);
  let totalPrice = 0;

  const orderPlacedAt = String(order?.timestamps.updatedAt);
  const items = order?.items;
  items?.forEach((item: any) => {
    totalPrice = totalPrice + item.price;
  });
  return (
    <View className="flex-1 bg-[#f5efec]">
      <ScrollView className="p-4">
        {/* Header */}
        <Text className="text-3xl font-bold text-[#2b1a14] mb-1">{id}</Text>
        <Text className="text-gray-500 mb-3">
          Placed {getTimeAgo(orderPlacedAt)}
        </Text>

        {/* Status Badge */}
        <View className="bg-[#f3d6cc] self-start px-4 py-2 rounded-full mb-4">
          <Text className="text-[#b23a1a] font-semibold">● NEW ORDER</Text>
        </View>

        {/* Order Items Card */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <View className="flex-row items-center mb-3">
            <Ionicons name="receipt-outline" size={20} color="#b23a1a" />
            <Text className="ml-2 text-lg font-semibold">Order Items</Text>
          </View>

          {/* Item */}
          {items?.map((item, i) => (
            <View key={i} className="border-b border-gray-100 py-3">
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View
                    className={`w-10 h-10 rounded-lg items-center justify-center ${item.quantity > 1 ? "bg-[#c0392b]" : "bg-gray-200"}`}
                  >
                    <Text
                      className={`${item.quantity > 1 ? "text-white" : "text-gray-600"} font-bold`}
                    >
                      {item.quantity}x
                    </Text>
                  </View>

                  <View className="ml-3">
                    <Text className="font-medium">{item.name}</Text>
                    {/* {item.note && (
                      <Text className="text-gray-400 text-xs">{item.note}</Text>
                    )} */}
                  </View>
                </View>

                <Text className="font-medium">${item.price}.00</Text>
              </View>
            </View>
          ))}

          {/* Total */}
          <View className="flex-row justify-between mt-3">
            <Text className="text-lg font-semibold">Total</Text>
            <Text className="text-lg font-bold text-[#b23a1a]">
              {totalPrice}
            </Text>
          </View>
        </View>

        {/* Customer Card */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <View className="flex-row items-center mb-3">
            <Ionicons name="person-outline" size={20} />
            <Text className="ml-2 text-lg font-semibold">Customer</Text>
          </View>

          <View className="flex-row items-center mb-3">
            <View className="w-12 h-12 rounded-full bg-[#f3d6cc] items-center justify-center">
              <Text className="font-bold text-[#b23a1a]">SJ</Text>
            </View>

            <View className="ml-3">
              <Text className="font-medium">Sarah J.</Text>
              <Text className="text-gray-500 text-sm">+1-555-0199</Text>
            </View>
          </View>

          <View className="border-t border-gray-200 pt-3">
            <Text className="text-gray-500">Delivery Address</Text>
            <Text>123 Maple Street</Text>
            <Text>Apt 4B</Text>
          </View>
        </View>

        {/* Actions */}
        <View className="bg-[#f3d6cc] p-4 rounded-2xl">
          <Text className="text-gray-600 mb-3 font-semibold">
            UPDATE STATUS
          </Text>

          <Pressable className="bg-[#b23a1a] p-4 rounded-xl mb-3 flex-row justify-center items-center">
            <Ionicons name="checkmark-circle" size={18} color="white" />
            <Text className="text-white font-semibold ml-2">Accept Order</Text>
          </Pressable>

          <Pressable className="border border-[#b23a1a] p-4 rounded-xl mb-3 flex-row justify-center items-center">
            <MaterialIcons name="ramen-dining" size={18} color="#b23a1a" />
            <Text className="text-[#b23a1a] font-semibold ml-2">
              Start Preparing
            </Text>
          </Pressable>

          <Pressable className="bg-gray-200 p-4 rounded-xl mb-3 flex-row justify-center items-center">
            <Ionicons name="car-outline" size={18} color="gray" />
            <Text className="text-gray-500 ml-2">Mark as Out for Delivery</Text>
          </Pressable>

          <Pressable className="bg-gray-200 p-4 rounded-xl flex-row justify-center items-center">
            <Ionicons name="checkmark-done-outline" size={18} color="gray" />
            <Text className="text-gray-500 ml-2">Mark as Delivered</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetailScreen;
