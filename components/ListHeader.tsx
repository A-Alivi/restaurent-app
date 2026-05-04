import React from "react";
import { Text, View } from "react-native";
import SearchBar from "./ui/SearchBar";

type Props = {
  onAddPress: () => void;
};

const ListHeader = ({ onAddPress }: Props) => {
  return (
    <View>
      <Text className="text-2xl font-bold text-[#b23a1a]">Kitchen Manager</Text>

      <Text className="text-lg font-semibold mt-3">Incoming Orders</Text>

      <Text className="text-gray-500 mb-3">
        Manage active tickets and kitchen queue.
      </Text>

      {/* Search + Add */}
      <View className="flex-row gap-2 mb-4">
        <SearchBar />

        {/* <Pressable
          onPress={onAddPress}
          className="bg-red-600 px-3 rounded-xl justify-center"
        >
          <Ionicons name="add-outline" size={19} color="white" />
        </Pressable> */}
      </View>
    </View>
  );
};

export default ListHeader;
