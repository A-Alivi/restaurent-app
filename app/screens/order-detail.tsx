import ActionsDropdown from "@/components/order/ActionsDropdown";
import StatusBadge from "@/components/ui/StatusBadge";
import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrderStore } from "../../store/useOrderStore";
import getInitials from "../../utils/getInitials";
const OrderDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const orderStore = useOrderStore();
  let totalPrice = 0;
  const item = orderStore?.orders.find((order: any) => order.id === id);
  item?.items?.forEach((item: any) => (totalPrice = totalPrice + item.price));
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-orange-70">
        <ScrollView className="p-4">
          <Pressable
            className="flex-row justify-self-auto"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} />
            <Text className="text-xl font-bold px-2">Go back</Text>
          </Pressable>
          {/* Header */}
          <Text className="text-3xl font-bold text-indigo-600 mb-1">{id}</Text>
          <Text className="text-gray-500 mb-3">
            Placed{" "}
            {item?.timestamps?.updatedAt
              ? formatDistanceToNow(new Date(item.timestamps.updatedAt), {
                  addSuffix: true,
                })
              : ""}
          </Text>
          {/* Order Items Card */}
          <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
            <View className="flex-row justify-between mb-3">
              <View className="flex-row">
                <Ionicons
                  className="mt-1"
                  name="receipt-outline"
                  size={20}
                  color="#b23a1a"
                />
                <Text className="ml-2 text-lg font-semibold">Order Items</Text>
              </View>
              <View>
                <StatusBadge status={item?.status ?? ""} />
              </View>
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
                        <Text className="text-gray-400 text-xs">
                          {item.note}
                        </Text>
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
              <Text className="text-lg font-bold text-indigo-600">
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
          <ActionsDropdown
            orderId={id}
            currentStatus={item?.status ?? "pending"}
            onChangeStatus={(id, status) => {
              orderStore.updateOrderStatus(id, status);
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
