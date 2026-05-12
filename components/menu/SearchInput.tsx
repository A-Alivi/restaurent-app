import { Search } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export function SearchInput() {
  return (
    <View className="mt-6 flex-row items-center rounded-3xl border border-gray-200 bg-white px-5 py-5">
      <Search size={22} color="#6B7280" />

      <Text className="ml-4 text-lg text-gray-400">Search menu items...</Text>
    </View>
  );
}
