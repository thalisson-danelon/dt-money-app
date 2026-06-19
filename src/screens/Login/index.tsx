import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { View } from "react-native";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
