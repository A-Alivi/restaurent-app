import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/sign-up" />;
  }

  return <Stack />;
}
