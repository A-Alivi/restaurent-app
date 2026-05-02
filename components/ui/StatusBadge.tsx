import { Text, View } from "react-native";

export default function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    pending: "bg-yellow-100 text-yellow-700",
    preparing: "bg-blue-100 text-blue-700",
    delivering: "bg-orange-100 text-orange-700",
    delivered: "bg-green-100 text-green-700",
  };

  return (
    <View className={`px-3 py-1 rounded-full ${styles[status]}`}>
      <Text className="text-xs font-semibold uppercase">{status}</Text>
    </View>
  );
}
