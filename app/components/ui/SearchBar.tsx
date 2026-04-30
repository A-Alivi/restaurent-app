import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1">
      <Ionicons name="search" size={18} color="gray" />
      <TextInput placeholder="Search Order ID..." className="ml-2 flex-1" />
    </View>
  );
}
