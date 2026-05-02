import React, { useEffect } from "react";
import { View } from "react-native";
import { orders } from "../data/orders";
import "../global.css";
import { useOrderStore } from "../store/useOrderStore";
import SSOCallbackScreen from "./sso-callback";

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
