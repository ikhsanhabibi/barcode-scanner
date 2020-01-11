export const addProduct = (
    title,
    url,
    description,
    barcodeNumber,
    barcodeType
) => {
    return dispatch => {
        const productDetails = {
            title: title,
            url: url,
            description: description,
            barcodeNumber: barcodeNumber,
            barcodeType: barcodeType
        };
        fetch("https://react-native-1eb41.firebaseio.com//places.json", {
            method: "POST",
            body: JSON.stringify(productDetails)
        })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
            });
    };
};

export const deletePlace = key => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};
