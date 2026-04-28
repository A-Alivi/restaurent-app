import React from "react";
import { Text, View } from "react-native";

const OrderItem = ({ order }: any) => {
  return (
    <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
      {/* Quantity */}
      <Text className="w-10 text-center font-semibold">
        {order.items.length}
      </Text>

      {/* Item Name */}
      <Text className="flex-1 text-sm text-gray-800">{order.name}</Text>

      {/* Price */}
      <Text className="w-16 text-right font-medium">Rs {order.price}</Text>
    </View>
  );
};

export default OrderItem;
