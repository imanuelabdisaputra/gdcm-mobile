import React from "react";
import { Text, View } from "tamagui";

import Button from "@/components/Button";
import { useAuth } from "@/provider/authProvider";

const Profile = () => {
  const { signOut, user } = useAuth();

  return (
    <View
      flex={1}
      justifyContent="space-between"
      padding="$5"
    >
      <Text>{user.user_metadata.name}</Text>
      <Button
        themeInverse
        onPress={signOut}
      >
        Sign out
      </Button>
    </View>
  );
};

export default Profile;
