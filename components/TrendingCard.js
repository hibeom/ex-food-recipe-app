import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import { SIZES, COLORS, images, FONTS, icons } from "../constants";
import { BlurView } from "@react-native-community/blur";

const RecipeCardDetails = ({ item }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Text style={{ ...FONTS.h3, color: COLORS.white, width: "70%" }}>
        {item.name}
      </Text>
      <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
        {item.duration} Mins | {item.serving} Serving
      </Text>
      <Image
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 20,
          height: 20,
          tintColor: COLORS.darkGreen,
        }}
        source={item.isBookmark ? icons.bookmark : icons.bookmarkFilled}
      />
    </View>
  );
};

const RecipeCardInfo = ({ item }) => {
  return (
    <View
      style={{
        ...styles.recipeCardContainer,
        backgroundColor: COLORS.transparentDarkGray,
      }}
    >
      <RecipeCardDetails item={item} />
    </View>
  );
  //   if (Platform.OS === "ios") {
  //     return (
  //       <BlurView blurType="dark" style={styles.recipeCardContainer}>
  //         <RecipeCardDetails item={item} />
  //       </BlurView>
  //     );
  //   } else {}
};

const TrendingCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 250,
        height: 350,
        marginRight: SIZES.radius,
        borderRadius: SIZES.radius,
      }}
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />
      <View
        style={{
          position: "absolute",
          left: 15,
          top: 20,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
          paddingVertical: 5,
          paddingHorizontal: 12,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
          {item.category}
        </Text>
      </View>
      <RecipeCardInfo item={item} />
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
