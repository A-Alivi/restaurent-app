import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { OrderStatus } from "../../models/orders";
import { orderActions } from "../../utils/orderActions";

type Props = {
  orderId: string;
  currentStatus: OrderStatus;
  onChangeStatus: (id: string, status: OrderStatus) => void;
};
const StatusSelectDropdown = ({
  orderId,
  currentStatus,
  onChangeStatus,
}: Props) => {
  const [open, setOpen] = useState(false);
  const options = Object.values(orderActions).flat();
  const handleSelect = (status: OrderStatus) => {
    onChangeStatus(orderId, status);
    setOpen(false);
  };
  return (
    <View className="bg-white rounded-xl">
      {/* SELECT BOX */}
      <Pressable
        onPress={() => setOpen(!open)}
        className="flex-row justify-between items-center p-4 bg-gray-100 rounded-xl"
      >
        <Text className="text-gray-700 font-semibold">
          {options.find((o) => o.nextStatus === currentStatus)?.label ||
            "Select Status"}
        </Text>

        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="gray"
        />
      </Pressable>

      {/* DROPDOWN */}
      {open && (
        <View className="bg-white mt-2 rounded-xl overflow-hidden">
          {options.map((item) => {
            const isSelected = item.nextStatus === currentStatus;
            return (
              <Pressable
                key={item.key}
                onPress={() => handleSelect(item.nextStatus)}
                className={`flex-row items-center p-4 border-b border-gray-200 ${
                  isSelected ? "bg-orange-100" : ""
                }`}
              >
                <Ionicons
                  name={item.icon as any}
                  size={18}
                  color={isSelected ? "#b23a1a" : "gray"}
                />

                <Text
                  className={`ml-3 font-medium ${
                    isSelected ? "text-[#b23a1a]" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Text>

                {/* ✅ Selected Indicator */}
                {isSelected && (
                  <Ionicons
                    name="checkmark"
                    size={18}
                    color="#b23a1a"
                    style={{ marginLeft: "auto" }}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default StatusSelectDropdown;
