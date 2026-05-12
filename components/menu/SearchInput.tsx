import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

function SearchInput({ value, onChangeText }: any) {
  return (
    <View className="bg-gray-100 flex-row border  items-center px-4 py-3 rounded-xl mt-3 mb-2">
      <Ionicons className="mr-2" name="search" size={18} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search menu..."
        className="flex-1 border-0"
      />
    </View>
  );
}

export default SearchInput;
