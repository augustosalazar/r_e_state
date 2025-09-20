import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "./state/CounterProvider";

export default function Page2() {
    const { value, increment } = useContext(AppContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>{value}</Text>
            <Button mode="contained" onPress={() => increment()}>
                Increment
            </Button>
        </View>
    );
}