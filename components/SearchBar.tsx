import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

function SearchBar({ value, onChangeText }: any) {
  return (
    <View className="bg-gray-100 flex-row items-center px-4 py-3 rounded-xl mb-4">
      <Ionicons className="mr-2" name="search" size={18} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Order ID..."
        className="flex-1"
      />
    </View>
  );
}

export default React.memo(SearchBar);
