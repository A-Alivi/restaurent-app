import React from "react";
import { View } from "react-native";
import "../global.css";
import SSOCallbackScreen from "./sso-callback";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <SSOCallbackScreen />
    </View>
  );
};

export default index;
