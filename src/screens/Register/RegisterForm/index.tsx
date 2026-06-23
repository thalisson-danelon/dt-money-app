import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamList } from "@/routes/PublicRoutes";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { View, Text } from "react-native";

interface FormRegisterParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegisterParams>();

  const navigation = useNavigation<NavigationProp<PublicStackParamList>>();

  return (
    <>
      <AppInput
        control={control}
        name="name"
        label="NOME"
        placeholder="Seu nome"
        leftIconName="user"
      />
      <AppInput
        control={control}
        name="email"
        label="EMAIL"
        placeholder="email@exemplo.com"
        leftIconName="envelope"
      />
      <AppInput
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        secureTextEntry
        leftIconName="lock"
      />
      <AppInput
        control={control}
        name="confirmPassword"
        label="SENHA"
        placeholder="Confirme sua Senha"
        secureTextEntry
        leftIconName="lock"
      />
      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="sign-in">Cadastrar</AppButton>
        <View>
          <Text className="mb-6 text-gray-300 text-base">
            Já possui uma conta?
          </Text>
          <AppButton
            onPress={() => navigation.navigate("Login")}
            mode="outline"
            iconName="sign-in"
          >
            Entrar
          </AppButton>
        </View>
      </View>
    </>
  );
};
