import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { Image } from "react-native";

import avatarImg from "../../assets/avatar.png";
import { COLORS } from "../../theme";

import { styles } from "./styles";

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  size?: "SMALL" | "NORMAL";
};

const DEFAULT_AVATAR_IMAGE = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, size = "NORMAL" }: Props) {
  const { containerSize, avatarSize } = SIZES[size];
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || DEFAULT_AVATAR_IMAGE }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
