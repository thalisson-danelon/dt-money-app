import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { PublicStackParamList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, TextInput } from "react-native";

export const Login = () => {
  const navigation = useNavigation<StackNavigationProp<PublicStackParamList>>();

  return (
    <DismissKeyboardView>
      <Text>Tela de Login!</Text>
      <TextInput className="bg-gray-500 w-full" />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </DismissKeyboardView>
  );
};
