import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../state/CounterProvider";

export default function W1() {
    const { value, increment } = useContext(AppContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightblue",
            }}
        >
            <Text>{value}</Text>
            <Button mode="contained" onPress={() => increment()}>
                Increment
            </Button>
        </View>
    );
}