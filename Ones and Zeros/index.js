const binaryArrayToNumber = arr => {
    let dec = 0;
    for (let i = 0; i < arr.length; i++) {
        dec = dec * 2 + arr[i]
    }
    return dec;
};