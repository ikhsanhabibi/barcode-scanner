import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class Forms extends React.Component {
    state = {
        title: undefined,
        url: undefined,
        description: undefined,
        barcodeNumber: undefined,
        barcodeType: undefined
    };

    constructor(props) {
        super(props);
        this.title = undefined;
        this.url = undefined;
        this.description = undefined;
        this.barcodeNumber = undefined;
        this.barcodeType = undefined;
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <TextInput
                    placeholder="Barcode Number"
                    maxLength={50}
                    onChangeText={barcodeNumber =>
                        this.setState({ barcodeNumber })
                    }
                    style={styles.inputStyle}
                />

                <TextInput
                    placeholder="Barcode Type"
                    maxLength={50}
                    onChangeText={barcodeType => this.setState({ barcodeType })}
                    style={styles.inputStyle}
                />
                <TextInput
                    placeholder="Product Title"
                    maxLength={50}
                    onChangeText={title => this.setState({ title })}
                    style={styles.inputStyle}
                />

                <TextInput
                    placeholder="URL"
                    maxLength={58}
                    onChangeText={url => this.setState({ url })}
                    style={styles.inputStyle}
                />

                <TextInput
                    placeholder="Description"
                    maxLength={8}
                    onChangeText={description => this.setState({ description })}
                    style={styles.inputStyle}
                />

                <Button
                    title="Upload"
                    onPress={() => alert("Uploaded! Thank you!")}
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
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        width: 300,
        padding: 10
    }
});
