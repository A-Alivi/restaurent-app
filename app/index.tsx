import React, { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
import { orders } from "./data/orders";
import SSOCallbackScreen from "./sso-callback";
import { useOrderStore } from "./store/useOrderStore";

const index = () => {
  const setOrders = useOrderStore((state) => state.setOrders);

  useEffect(() => {
    setOrders(orders);
  }, []);
  return (
    <View>
      <SSOCallbackScreen />
    </View>
  );
};

export default index;
