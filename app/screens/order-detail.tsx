import OrderItem from "@/components/order/order-item";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const OrderDetailScreen = () => {
  const { order } = useLocalSearchParams();
  return (
    <View>
      <OrderItem order={order} />
    </View>
  );
};

export default OrderDetailScreen;
