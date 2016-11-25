/**
 * Created by championswimmer on 25/11/16.
 */

const BASE64_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

function get64bitChar (index) {
    if (index > 63) {
        return new Error("This is invalid index");
    }
    return (BASE64_ALPHABET.charAt(index));
}

function convertTo64 (givenInt, prev) {
    if (givenInt < 64) {
        return prev + get64bitChar(givenInt)
    }
    return convertTo64(givenInt % 64, (parseInt(givenInt / 64)).toString())
}

function convertFrom64(givenString) {
    let digits = givenString.split("").reverse();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += (BASE64_ALPHABET.indexOf(digits[i])) * (Math.pow(64, i));
    }
    return sum;
}

module.exports = {
    to64: function (givenInt) {
        return convertTo64(givenInt, "")
    },
    from64: function(givenString) {
        return convertFrom64(givenString);
    }
};

