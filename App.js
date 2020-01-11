import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./Navigation";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
    "Possible Unhandled Uromise Rejection(id:5)"
]);

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <Navigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
