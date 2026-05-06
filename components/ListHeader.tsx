import React from "react";
import { Text, View } from "react-native";

const ListHeader = () => {
  return (
    <View>
      <Text className="text-2xl font-bold text-[#b23a1a]">Kitchen Manager</Text>
      <Text className="text-lg font-semibold mt-3">Incoming Orders</Text>
      <Text className="text-gray-500 mb-3">
        Manage active tickets and kitchen queue.
      </Text>
    </View>
  );
};

export default ListHeader;
