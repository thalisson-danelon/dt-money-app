import { AppInput } from "@/components/DismissKeyboardView/AppInput";
import { useForm } from "react-hook-form";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>();

  return (
    <>
      <AppInput
        control={control}
        name="email"
        label="E-MAIL"
        placeholder="email@exemplo.com"
        leftIconName="envelope-o"
      />
      <AppInput
        control={control}
        name="password"
        label="SENHA"
        placeholder="sua senha"
        leftIconName="lock"
        secureTextEntry
      />
    </>
  );
};
