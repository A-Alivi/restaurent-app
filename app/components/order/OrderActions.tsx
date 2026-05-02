import { OrderStatus } from "@/app/store/useOrderStore";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { orderActions } from "../../utils/orderActions";

export default function OrderActions({
  status,
  onChangeStatus,
}: {
  status: OrderStatus;
  onChangeStatus: (status: string) => void;
}) {
  const actions = orderActions[status] || [];

  return (
    <View className="bg-[#f3d6cc] p-4 rounded-2xl">
      <Text className="text-gray-600 mb-3 font-semibold">UPDATE STATUS</Text>

      {actions.map((action) => {
        const isPrimary = action.type === "primary";

        return (
          <Pressable
            key={action.key}
            onPress={() => onChangeStatus(action.nextStatus)}
            className={`p-4 rounded-xl mb-3 flex-row justify-center items-center ${
              isPrimary ? "bg-[#b23a1a]" : "border border-[#b23a1a]"
            }`}
          >
            {action.icon === "ramen-dining" ? (
              <MaterialIcons
                name={action.icon as any}
                size={18}
                color={isPrimary ? "white" : "#b23a1a"}
              />
            ) : (
              <Ionicons
                name={action.icon as any}
                size={18}
                color={isPrimary ? "white" : "#b23a1a"}
              />
            )}

            <Text
              className={`font-semibold ml-2 ${
                isPrimary ? "text-white" : "text-[#b23a1a]"
              }`}
            >
              {action.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
