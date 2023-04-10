const palindromes = function (text) {
    text = normalizeString(text);
    let inverted = "";
    for (let i = text.length - 1; i >= 0; i--) {
        inverted += text[i];
    }
    return text == inverted;
};

function normalizeString(str) {
    str = str.toUpperCase();
    str = str.toLowerCase();
    str = str.replace(/[^\w]/g, "");
    return str;
}

// Do not edit below this line
module.exports = palindromes;
