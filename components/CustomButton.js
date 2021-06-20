import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SIZES, COLORS, images, FONTS } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ onPress, colors, text, buttonContainerStyle }) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 16,
            paddingVertical: SIZES.padding,
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{ color: COLORS.white, ...FONTS.h3, textAlign: "center" }}
          >
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderRadius: 16,
          paddingVertical: SIZES.padding,
          borderWidth: 1,
          borderColor: COLORS.lime,
          ...buttonContainerStyle,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h3, textAlign: "center" }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
