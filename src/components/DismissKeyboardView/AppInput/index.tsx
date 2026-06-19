import { colors } from "@/shared/colors";
import {
  FontAwesome,
  FontAwesomeIconName,
} from "@react-native-vector-icons/fontawesome";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  leftIconName?: FontAwesomeIconName;
  label?: string;
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  leftIconName,
  label,
  secureTextEntry,
  ...rest
}: AppInputParams<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);
  const inputRef = useRef<TextInput>(null);

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <View className="w-full mt-4">
            {label && (
              <Text
                className={clsx(
                  "mb-2 mt-3 text-base",
                  isFocused ? "text-accent-brand" : "text-gray-600",
                )}
              >
                {label}
              </Text>
            )}

            <TouchableOpacity className="flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16">
              {leftIconName && (
                <View className="mr-2">
                  <FontAwesome
                    name={leftIconName}
                    color={
                      isFocused ? colors["accent-brand"] : colors.gray["600"]
                    }
                    size={24}
                  />
                </View>
              )}
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholderTextColor={colors.gray["700"]}
                className="flex-1 text-base text-gray-500"
                onFocus={checkFocus}
                onEndEditing={checkFocus}
                secureTextEntry={showText}
                ref={inputRef}
                {...rest}
              />

              {secureTextEntry && (
                <TouchableOpacity
                  onPress={() => setShowText((value) => !value)}
                >
                  <FontAwesome
                    name={showText ? "eye" : "eye-slash"}
                    color={colors.gray[600]}
                    size={24}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};
