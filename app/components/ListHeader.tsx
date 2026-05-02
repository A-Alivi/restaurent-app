import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import SearchBar from "./ui/SearchBar";
const ListHeader = () => {
  return (
    <View>
      <Text className="text-2xl font-bold text-[#b23a1a]">Kitchen Manager</Text>
      <Text className="text-lg font-semibold mt-3">Incoming Orders</Text>
      <Text className="text-gray-500 mb-3">
        Manage active tickets and kitchen queue.
      </Text>
      {/* Search */}
      <View className="flex-row gap-2 mb-4">
        <SearchBar />

        <Pressable className="bg-red-600 px-3 rounded-xl justify-center">
          {/* <Text className="text-white text-xl">+</Text> */}
          <Ionicons name="add-outline" className="text-white" size={19} />
        </Pressable>
      </View>{" "}
    </View>
  );
};

export default ListHeader;
