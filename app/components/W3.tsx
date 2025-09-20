import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../state/CounterProvider";

export default function W3() {
    const { value, increment } = useContext(AppContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightyellow",
            }}
        >
            <Text>{value}</Text>
        </View>
    );
}