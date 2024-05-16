import React from "react";
import { Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

const EventDetail = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View>
      <Text>EventDetail: {id}</Text>
    </View>
  );
};

export default EventDetail;
