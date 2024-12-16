import { Text, View  } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
     <AntDesign name="stepforward" size={24} color="black" /> 
     <Text className="">HELLO TESTING</Text>
     <Link href="/home">Go to home</Link>
     <Link href="/auth/basic">Go to basic</Link>

    </View>
  );
}
