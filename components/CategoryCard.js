import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SIZES, COLORS, images, FONTS } from "../constants";

const CategoryCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: SIZES.radius,
        marginBottom: 10,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.radius,
      }}
      onPress={onPress}
    >
      <Image
        style={{ width: 80, height: 80, borderRadius: SIZES.radius }}
        source={item.image}
        resizeMode="cover"
      />
      <View
        style={{ marginLeft: SIZES.radius, justifyContent: "space-between" }}
      >
        <Text style={{ ...FONTS.h3, width: "70%" }}>{item.name}</Text>
        <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
          {item.duration} Mins | {item.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
