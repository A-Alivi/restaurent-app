import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import SSOCallbackScreen from "./sso-callback";

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <SSOCallbackScreen />
      </View>
    </SafeAreaView>
  );
};

export default index;
