import { Text, View } from "react-native";

export default function OrderItemRow({ item }: any) {
  return (
    <View className="mb-1 flex-row justify-between  p-2 m-1 rounded-md">
      <Text className="text-gray-800">{item.quantity}x</Text>
      <Text className="text-gray-800">{item.name}</Text>
      <Text className="text-gray-800">{item.price}</Text>

      {item.note && (
        <Text className="text-xs text-gray-400 italic">{item.note}</Text>
      )}
    </View>
  );
}
