import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SIZES, COLORS, images, FONTS } from "../constants";

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollY = useRef(new Animated.Value(0));

  useEffect(() => {
    let { recipe } = route.params;
    console.log(recipe);
    setSelectedRecipe(recipe);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY.current } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: SIZES.padding,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLORS.lightGray,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
            >
              <Image source={item.icon} style={{ width: 40, height: 40 }} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: SIZES.radius,
              }}
            >
              <Text style={FONTS.h3}>{item.description}</Text>
              <Text style={FONTS.h3}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
