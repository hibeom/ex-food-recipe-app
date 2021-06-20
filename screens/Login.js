import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SIZES, COLORS, images, FONTS } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "flex-end" }}
          source={images.loginBackground}
        >
          <LinearGradient
            style={{ height: 200, justifyContent: "flex-end" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
          >
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                width: "70%",
                paddingHorizontal: 20,
                fontFamily: "Roboto-Black",
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      //바깥뷰 flex를 1로 처리안하면 안에 내용물이 겹친다.
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
            width: "70%",
            marginTop: 12,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            onPress={() => navigation.replace("Home")}
            text="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttonContainerStyle={{ marginTop: SIZES.padding }}
          />
          <CustomButton
            onPress={() => navigation.replace("Home")}
            text="Sign Up"
            colors={[]}
            buttonContainerStyle={{ marginTop: 16, marginBottom: 12 }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar style="light" />
      {/* Header/ */}
      {renderHeader()}
      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
