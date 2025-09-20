import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../state/CounterProvider";

export default function W2() {
    const { value, reset } = useContext(AppContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgreen",
            }}
        >
            <Text>{value}</Text>
            <Button mode="contained" onPress={() => reset()}>
                Reset
            </Button>
        </View>
    );
}