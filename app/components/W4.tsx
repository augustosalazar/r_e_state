import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../state/CounterProvider";


export default function W4() {
    const { decrement } = useContext(AppContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightcoral",
            }}
        >
            <Button mode="contained" onPress={() => decrement()}>
                Decrease
            </Button>
        </View>
    );
}