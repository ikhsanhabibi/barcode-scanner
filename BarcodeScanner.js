import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { createStackNavigator } from "react-navigation-stack";

import * as Permissions from "expo-permissions";

export default class BarcodeScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            barcodeData: "",
            barcodeType: ""
        };
        this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({
            scanned: true,
            barcodeType: JSON.stringify(type),
            barcodeData: JSON.stringify(data)
        });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(data);
        console.log(type);

        this.props.navigation.navigate("Forms", {
            barcodeData: data,
            barcodeType: type
        });
    };

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === "granted"
        });
    };

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text> Requesting for camera permission </Text>;
        }
        if (hasCameraPermission === false) {
            return <Text> No access to camera </Text>;
        }
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end"
                }}
            >
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned
                            ? undefined
                            : this.handleBarCodeScanned.bind(this)
                    }
                    style={StyleSheet.absoluteFillObject}
                />

                {scanned && (
                    <Button
                        title={"Tap to Scan Again"}
                        onPress={() =>
                            this.setState({
                                scanned: false
                            })
                        }
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#1E6738",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff"
    }
});
