import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import W1 from "./components/W1";
import W2 from "./components/W2";
import W3 from "./components/W3";
import W4 from "./components/W4";

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <W1 />
        </View>
        <View style={{ margin: 10 }}>
          <W2 />
        </View>
        <View style={{ flex: 1 }}>
          <W3 />
        </View>
        <View style={{ margin: 10 }}>
          <W4 />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          mode="contained"
          onPress={() => router.push("/page2")}
        >
          Page 2
        </Button>
      </View>
    </View>
  );
}
