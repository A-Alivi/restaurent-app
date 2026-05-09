import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/(admin)"} />;
  }

  return (
    <SafeAreaView>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
