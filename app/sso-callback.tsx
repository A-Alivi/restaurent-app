import { useAuth, useUser } from "@clerk/expo";
import { Redirect } from "expo-router";

const SSOCallbackScreen = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const user = useUser();
  const role = user.user?.publicMetadata.role;
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    switch (role) {
      case "admin":
        return <Redirect href={"/(admin)"} />;
      case "staff":
        return <Redirect href={"/(staff)"} />;
      default:
        return <Redirect href={"/(auth)/sign-in"} />;
    }
  }

  return <Redirect href={"/(auth)/sign-in"} />;
};

export default SSOCallbackScreen;
