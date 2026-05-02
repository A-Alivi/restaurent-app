import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useOrderStore } from "../store/useOrderStore";

import AddOrderModal from "./order/add-order-modal";

export default function SearchInput({ onChange }: any) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const addOrder = useOrderStore((state) => state.addOrder);

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center bg-gray-200  shadow py-3  rounded-xl">
        <Ionicons className="ms-2" name="search" size={20} color="#888" />
        <TextInput
          value={value}
          onChangeText={(text) => {
            setValue(text);
            onChange?.(text);
          }}
          placeholder="Search order ID..."
          className="flex-1 mx-3 text-black"
          placeholderTextColor="#888"
        />
      </View>
      <View className="m-4 p-3  bg-red-700 shadow rounded-xl">
        <Pressable onPress={() => setOpen(true)}>
          <Ionicons name="add" size={20} color="white" />
        </Pressable>
        <AddOrderModal
          visible={open}
          onClose={() => setOpen(false)}
          onAddOrder={addOrder}
        />
      </View>
    </View>
  );
}
