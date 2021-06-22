import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, images, FONTS } from "../constants";

const Viewers = ({ viewersList }) => {
  if (viewersList?.length == 0) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.body4, color: COLORS.lightGray2 }}>
          Be the first one to try this.
        </Text>
      </View>
    );
  } else if (viewersList?.length <= 4) {
    return (
      <View style={{ alignItems: "flex-end" }}>
        <View style={{ flexDirection: "row" }}>
          {viewersList?.map((item, index) => {
            return (
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  marginLeft: index == 0 ? 0 : -15,
                }}
                source={item.profilePic}
              />
            );
          })}
        </View>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.lightGray2,
            marginTop: 8,
            width: "80%",
            lineHeight: 14,
            textAlign: "right",
          }}
        >
          {viewersList?.length} People Already Try This!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "flex-end" }}>
        <View style={{ flexDirection: "row" }}>
          {viewersList?.map((item, index) => {
            if (index >= 3) return;
            return (
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  marginLeft: index == 0 ? 0 : -15,
                }}
                source={item.profilePic}
              />
            );
          })}
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              marginLeft: -15,
              backgroundColor: COLORS.darkGreen,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>
              {viewersList?.length}+
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.lightGray2,
            marginTop: 8,
            width: "80%",
            lineHeight: 14,
            textAlign: "right",
          }}
        >
          {viewersList?.length}+ People Already Try This!
        </Text>
      </View>
    );
  }
};

export default Viewers;
