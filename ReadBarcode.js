import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { createStackNavigator } from "react-navigation-stack";

import * as Permissions from "expo-permissions";

import Details from "./Details";

import firebase from "firebase";
import { db } from "./Firebase";

export default class ReadBarcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            barcodeData: "",
            barcodeType: "",
            detailsIsVisible: false,
            product: []
        };
        this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
    }

    readBarcode() {
        const barcodeToRead = this.state.barcodeData;
        //console.log("barcodeToRead:    " + barcodeToRead);

        firebase
            .database()
            .ref("/product")
            .once("value")
            .then(snapshot => {
                //console.log(Object.values(snapshot.val()));
                arr = Object.values(snapshot.val());
                //console.log(arr);

                let obj = arr.find(
                    ({ barcodeNumber }) => barcodeNumber === barcodeToRead
                );

                let result = arr.filter(o => {
                    return o.barcodeNumber === barcodeToRead;
                });
                //console.log(obj);
                console.log(result);
            });
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({
            scanned: true,
            barcodeType: type,
            barcodeData: data
        });

        this.props.navigation.navigate("Details", {
            barcodeData: data,
            barcodeType: type
        });

        alert("Product scanned succesfully!");

        this.setState({
            detailsIsVisible: true
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

                {this.state.detailsIsVisible ? (
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "white"
                        }}
                    >
                        {this.readBarcode()}
                        <Text style={{}}>
                            Barcode type : {this.state.barcodeType}
                        </Text>
                        <Text style={{}}>
                            Barcode number: {this.state.barcodeData}
                        </Text>
                        <Text style={{}}>Title: {this.state.product}</Text>
                    </View>
                ) : null}

                {scanned && (
                    <Button
                        style={{
                            marginRight: 40,
                            marginLeft: 40,
                            marginTop: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: "#1E6738",
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "#fff"
                        }}
                        title={"Tap to Scan Again"}
                        onPress={() =>
                            this.setState({
                                scanned: false,
                                detailsIsVisible: false
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
