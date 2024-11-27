import {
  FlashListWithHeaders,
  Header,
  LargeHeader,
} from "@codeherence/react-native-header";
import React from "react";
import { Text, View } from "react-native";
import { useDerivedValue } from "react-native-reanimated";

// Simple HeaderComponent using Header from the library
const HeaderComponent = ({ showNavBar, scrollY }) => {
  return (
    <Header
      showNavBar={showNavBar}
      borderColor="#e5e5e5"
      initialBorderColor="white"
      headerStyle={{
        backgroundColor: "white",
      }}
      headerCenter={
        <Text
          style={{ padding: 12, fontSize: 16, fontWeight: "600" }}
        >
          Simple Header
        </Text>
      }
    />
  );
};

// Simple LargeHeaderComponent using LargeHeader from the library
const LargeHeaderComponent = () => (
  <LargeHeader
    headerStyle={{
      backgroundColor: "white",
      paddingVertical: 0,
      paddingHorizontal: 0,
    }}
  >
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Large Header</Text>
      <Text style={{ fontSize: 16, color: "#666" }}>Subtitle text</Text>
    </View>
  </LargeHeader>
);

// Mock data
const data = Array.from({ length: 50 }, (_, index) => ({
  id: `item-${index}`,
  title: `Item ${index}`,
}));

export const TestScreen = () => {
  return (
    <FlashListWithHeaders
      HeaderComponent={HeaderComponent}
      LargeHeaderComponent={LargeHeaderComponent}
      onScrollWorklet={(evt) => {
        "worklet";
        const scrollY = evt.contentOffset.y;
        console.log("scrollY", scrollY);
      }}
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#e5e5e5",
          }}
        >
          <Text>{item.title}</Text>
        </View>
      )}
      estimatedItemSize={50}
      headerFadeInThreshold={0.5}
    />
  );
};
