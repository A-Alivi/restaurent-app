import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const OrderItem = ({ items }: any) => {
  let totalPrice = 0;
  items.forEach((item: any) => {
    totalPrice = totalPrice + item.price;
  });
  console.log(totalPrice);
  return (
    <View className="flex-col m-3  p-3 shadow rounded">
      <View className="flex-row">
        <Ionicons className="p-2" name="list" size={18} color="red" />
        <Text className="text-2l font-semibold py-2">Order Items</Text>
      </View>

      {items.map((item: any, index: number) => (
        <View
          key={index}
          className="flex-row  items-center justify-between   my-1 border-gray-100"
        >
          <Text className="w-10 text-center font-semibold ">
            {item.quantity}x
          </Text>

          <Text className="flex-1 text-sm font-semibold text-gray-800">
            {item.name}
          </Text>

          <Text className="w-16 text-right font-mediu m">Rs.{item.price}</Text>
        </View>
      ))}
      <View className="flex-row items-center justify-between m-3 ">
        <Text className="text-l font-semibold">Total</Text>

        <Text className="text-l font-bold">Rs.{totalPrice}.00</Text>
      </View>
    </View>
  );
};

export default OrderItem;
