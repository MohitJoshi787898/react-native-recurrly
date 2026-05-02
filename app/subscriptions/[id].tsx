import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  // const {id} = useLocalSearchParams<id: string>();
  return (
    <View>
      <Text>SubscriptionDetails</Text>
      {/* <Text>{id}</Text> */}
      <Link href="/subscriptions">Go back to subscriptions</Link>
    </View>
  );
};

export default SubscriptionDetails;
