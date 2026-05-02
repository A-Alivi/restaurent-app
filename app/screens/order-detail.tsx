import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useOrderStore } from "../../store/useOrderStore";
import getInitials from "../../utils/getInitials";
const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("ID", id);
  const orderStore = useOrderStore();
  const orderPlacedAt = "";
  let totalPrice = 0;
  const item = orderStore?.orders.find((order) => order.id === id);
  item?.items?.forEach((item: any) => (totalPrice = totalPrice + item.price));
  console.log(item?.user.name);
  return (
    <View className="flex-1 bg-[#f5efec]">
      <ScrollView className="p-4">
        {/* Header */}
        <Text className="text-3xl font-bold text-[#2b1a14] mb-1">{id}</Text>
        <Text className="text-gray-500 mb-3">
          Placed{" "}
          {item?.timestamps?.updatedAt
            ? formatDistanceToNow(new Date(item.timestamps.updatedAt), {
                addSuffix: true,
              })
            : ""}
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
          {item?.items?.map((item, i) => (
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
                    {item.note && (
                      <Text className="text-gray-400 text-xs">{item.note}</Text>
                    )}
                  </View>
                </View>

                <Text className="font-medium">Rs.{item.price}.00</Text>
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
              <Text className="font-bold text-[#b23a1a]">
                {getInitials(item?.user.name)}
              </Text>
            </View>

            <View className="ml-3">
              <Text className="font-medium">{item?.user.name}</Text>
              <Text className="text-gray-500 text-sm">
                {item?.user.contact}
              </Text>
            </View>
          </View>

          <View className="border-t border-gray-200 pt-3">
            <Text className="text-gray-500">{item?.delivery.address}</Text>
            <Text>{item?.delivery.city}</Text>
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
            <Ionicons name="bicycle-outline" size={18} color="gray" />
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
