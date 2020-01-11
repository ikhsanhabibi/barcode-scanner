import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import firebase from "firebase";
import { db } from "./Firebase";

export default class Forms extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        barcodeNumber: "",
        barcodeType: ""
    };

    constructor(props) {
        super(props);
        this.title = "";
        this.url = "";
        this.description = "";
        this.barcodeNumber = "";
        this.barcodeType = "";
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct() {
        const number = this.props.navigation.getParam("barcodeData", "");
        const type = this.props.navigation.getParam("barcodeType", "");

        if (number.length == 0 && type.length == 0) {
            alert(
                "Please provide your barcode data (Barcode Type & Barcode Number) by scanning using camera."
            );
        } else {
            db.ref("/product")
                .push({
                    title: this.state.title,
                    url: this.state.url,
                    description: this.state.description,
                    barcodeNumber: number,
                    barcodeType: type
                })
                .then(data => {
                    console.log("data ", data);
                })
                .catch(error => {
                    console.log("error ", error);
                });
            alert("Product succesfully added. Thank you!");
        }
    }

    render() {
        const number = this.props.navigation.getParam("barcodeData", "");
        const type = this.props.navigation.getParam("barcodeType", "");
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Barcode Type</Text>
                <TextInput
                    ref="barcodeType"
                    placeholderTextColor={"lightgrey"}
                    placeholder="Generated barcode type"
                    maxLength={20}
                    onChangeText={barcodeType => this.setState({ barcodeType })}
                    style={styles.inputStyle}
                    editable={false}
                >
                    {type}
                </TextInput>

                <Text>Barcode Number</Text>
                <TextInput
                    ref="barcodeNumber"
                    placeholderTextColor={"lightgrey"}
                    placeholder="Generated barcode number"
                    maxLength={20}
                    onChangeText={barcodeNumber =>
                        this.setState({ barcodeNumber })
                    }
                    style={styles.inputStyle}
                    editable={false}
                >
                    {number}
                </TextInput>

                <Text>Product Name</Text>
                <TextInput
                    ref="title"
                    placeholderTextColor={"lightgrey"}
                    placeholder="Product Name"
                    maxLength={50}
                    onChangeText={title => this.setState({ title })}
                    style={styles.inputStyle}
                />

                <Text>URL</Text>
                <TextInput
                    ref="url"
                    placeholderTextColor={"lightgrey"}
                    placeholder="URL"
                    maxLength={100}
                    onChangeText={url => this.setState({ url })}
                    style={styles.inputStyle}
                />

                <Text>Description</Text>
                <TextInput
                    ref="description"
                    placeholderTextColor={"lightgrey"}
                    placeholder="Description"
                    maxLength={50}
                    onChangeText={description => this.setState({ description })}
                    style={styles.inputStyle}
                />

                <Button
                    title="Upload"
                    onPress={() => this.addProduct()}
                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        maxHeight: 800
    },
    inputStyle: {
        color: "black",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        width: 300,
        padding: 10
    }
});
