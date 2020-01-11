import React, { Component, useState } from "react";
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    Alert,
    StyleSheet
} from "react-native";

export default function Details() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.modal}>
            <Modal
                style={styles.modal}
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        padding: 100,
        height: 40,
        borderColor: "gray",
        borderWidth: 1
    }
});
