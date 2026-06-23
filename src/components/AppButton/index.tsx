import { colors } from "@/shared/colors";
import {
  FontAwesome,
  FontAwesomeIconName,
} from "@react-native-vector-icons/fontawesome";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type AppButtonMode = "fill" | "outline";

interface AppButtonParams extends TouchableOpacityProps {
  mode?: AppButtonMode;
  iconName?: FontAwesomeIconName;
}

export const AppButton: FC<PropsWithChildren<AppButtonParams>> = ({
  children,
  mode = "fill",
  iconName,
  ...rest
}) => {
  const isFill = mode === "fill";

  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        "w-full rounded-xl px-5 flex-row items-center h-button",
        iconName ? "justify-between" : "justify-center",
        {
          "bg-accent-brand": isFill,
          "bg-none border-[1px] border-accent-brand": !isFill,
        },
      )}
    >
      <Text
        className={clsx("text-base", {
          "text-white": isFill,
          "text-accent-brand": !isFill,
        })}
      >
        {children}
      </Text>

      {iconName && (
        <Text className="text-white">
          <FontAwesome
            name={iconName}
            size={24}
            color={isFill ? colors.white : colors["accent-brand"]}
          />
        </Text>
      )}
    </TouchableOpacity>
  );
};
