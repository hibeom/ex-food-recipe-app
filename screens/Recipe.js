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
import { SIZES, COLORS, images, FONTS, icons } from "../constants";
import { Viewers } from "../components";

const HEADER_HEIGHT = 300;

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          marginTop: -1000,
          paddingTop: 1000,
        }}
      >
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="cover"
          style={{
            height: HEADER_HEIGHT,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        {renderRecipeCreatorCard()}
      </View>
    );
  };

  const renderRecipeCreatorCard = () => {
    return (
      <Animated.View
        style={{
          position: "absolute",
          bottom: 10,
          left: 30,
          right: 30,
          height: 80,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack7,
          padding: SIZES.radius,
          flexDirection: "row",
          alignItems: "center",
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 170, 250],
                outputRange: [0, 0, 100],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View style={{ marginLeft: SIZES.radius, flex: 1 }}>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
            Recipe by :
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>
            {selectedRecipe?.author?.name}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            borderColor: COLORS.darkGreen,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => console.log("View Profile")}
        >
          <Image
            source={icons.rightArrow}
            style={{ width: 15, height: 15, tintColor: COLORS.darkGreen }}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: SIZES.radius,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />

        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 130, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 130, HEADER_HEIGHT - 70],
                  outputRange: [50, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.lightGray2 }}>
            Recipe by :
          </Text>
          <Text style={{ ...FONTS.h3, color: COLORS.white2 }}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 18,
            borderColor: COLORS.gray,
            borderWidth: 1,
            backgroundColor: COLORS.transparentBlack5,
          }}
        >
          <Image
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.gray,
            }}
            source={icons.back}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1.5 }}>
          <Text style={{ ...FONTS.h2 }}>{selectedRecipe?.name}</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray, marginTop: 5 }}>
            {selectedRecipe?.duration} Min | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Viewers viewersList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  };

  const renderIngredientHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h2 }}>Ingredients</Text>
        <Text style={{ ...FONTS.h4, color: COLORS.gray }}>
          {selectedRecipe?.ingredients?.length} Item
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar style="light" />
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}
            {renderRecipeInfo()}
            {/* Ingredient Title */}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
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
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
