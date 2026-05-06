import { Pressable, ScrollView, Text, View } from "react-native";

const filters = [
  "all",
  "pending",
  "accepted",
  "preparing",
  "out_for_delivery",
  "delivered",
];

export default function StatusFilters({ selected, onSelect }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row space-x-2 mb-4">
        {filters.map((item) => (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            className={`px-3 py-1  rounded-full   ${
              selected === item ? "bg-indigo-500" : "bg-gray-200"
            }`}
          >
            <Text
              className={`${selected === item ? "text-white" : "text-black"}`}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
