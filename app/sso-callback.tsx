import { useAuth, useUser } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

const SSOCallbackScreen = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const user = useUser();
  const role = user.user?.publicMetadata.role;
  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }
  if (role === "admin") {
    return <Redirect href={"/(admin)"} />;
  }
  if (role === "staff") {
    return <Redirect href={"/(staff)"} />;
  }
  return <Redirect href={"/(customer)"} />;
};

export default SSOCallbackScreen;
