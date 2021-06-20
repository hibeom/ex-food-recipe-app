import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";
import { CategoryCard, TrendingCard } from "../components";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.padding,
        }}
      >
        <View>
          <Text style={{ ...FONTS.h1, color: COLORS.darkGreen }}>
            Hello Luis,
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
            What you want to cook today?
          </Text>
        </View>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          resizeMode="cover"
          source={images.profile}
        />
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.gray2,
          borderRadius: SIZES.radius,
          flexDirection: "row",
          paddingHorizontal: SIZES.radius,
          paddingVertical: 16,
          marginTop: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 15, height: 15, tintColor: COLORS.gray }}
          source={icons.search}
        />
        <TextInput
          style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
          placeholder="Search Recipes"
          placeholderTextColo={COLORS.gray}
        />
      </View>
    );
  };

  const renderSeeRecipesCard = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.radius,
          marginTop: SIZES.padding,
          backgroundColor: COLORS.lightGreen,
          borderRadius: SIZES.radius,
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: SIZES.radius }}
          source={images.recipe}
          resizeMode="cover"
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.body4, width: "80%" }}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity onPress={() => console.log("See Recipes")}>
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
              }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingSection = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h2, marginBottom: SIZES.radius }}>
          Trending Recipe
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => (
            <TrendingCard
              item={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          )}
        />
      </View>
    );
  };

  const renderCategoryHeader = () => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: SIZES.radius,
        }}
      >
        <Text style={{ ...FONTS.h2 }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
      }}
    >
      <StatusBar style="dark" />
      {/* item.id 가 스트링이 아닌게 에러가 되나? */}
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* SearchBar */}
            {renderSearchBar()}
            {/* SeeRecipesCard */}
            {renderSeeRecipesCard()}
            {/* Trending Recipe */}
            {renderTrendingSection()}
            {/* Categories */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() => navigation.navigate("Recipe", { recipe: item })}
          />
        )}
        ListFooterComponent={<View style={{ marginBottom: 80 }} />}
      />
    </View>
  );
};

export default Home;
