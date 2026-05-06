import { Pressable, Text } from "react-native";

export default function FloatingButton() {
  return (
    <Pressable className="absolute bottom-24 right-6 bg-indigo-600 w-14 h-14 rounded-full items-center justify-center shadow-lg">
      <Text className="text-white text-2xl">+</Text>
    </Pressable>
  );
}
