import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-2xl font-bold">Davur</Text>

      <View className="flex-row items-center space-x-3">
        <Text className="text-xl">🔔</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          className="w-10 h-10 rounded-full"
        />
      </View>
    </View>
  );
}
