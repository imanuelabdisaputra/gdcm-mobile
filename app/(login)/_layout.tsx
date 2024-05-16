import { Stack } from "expo-router";

import { white } from "../../utils/colors";

const LoginLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 16,
          backgroundColor: white
        }
      }}
    />
  );
};

export default LoginLayout;
