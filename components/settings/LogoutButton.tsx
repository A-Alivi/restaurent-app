// components/LogoutButton.tsx
import React from "react";
import { Pressable, Text } from "react-native";

const LogoutButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      className="border border-red-400 rounded-xl py-4 items-center"
    >
      <Text className="text-red-600 font-semibold text-lg">Logout</Text>
    </Pressable>
  );
};

export default LogoutButton;
