import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  // useEffect(() => {
  //   router.replace("/(tabs)");
  // }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/(tabs)" className="text-blue-500">
        Go to Tabs
      </Link>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
