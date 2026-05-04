import { Text, View } from "react-native";
import { statusColors } from "../../utils/statusColors";
export default function StatusBadge({ status }: { status: string }) {
  const styles = statusColors;

  return (
    <View className={`px-3 py-1  rounded-full ${styles[status]}`}>
      <Text className="text-xs text-center font-semibold uppercase">
        {status}
      </Text>
    </View>
  );
}
