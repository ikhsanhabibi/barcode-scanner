import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

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
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned: true,
      barcodeType: JSON.stringify(type),
      barcodeData: JSON.stringify(data)
    });
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
          onBarCodeScanned={this.handleBarCodeScanned.bind(this)}
          style={StyleSheet.absoluteFillObject}
        />

        <Text>
          Bar code with type {this.state.barcodeType} and data{" "}
          {this.state.barcodeData} has been scanned!
        </Text>
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
