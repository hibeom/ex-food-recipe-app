import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, images, FONTS, icons } from "../constants";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 50,
      }}
    >
      <Image
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lime,
        }}
        source={icon}
        resizeMode="contain"
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 5,
            backgroundColor: COLORS.darkGreen,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
