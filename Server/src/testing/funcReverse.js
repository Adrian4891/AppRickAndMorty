const reverseString = (string) => {
    if(string === "") return "";
    if(!string) return undefined;
    return string.split("").reverse().join("").toLowerCase();
}

module.exports = {
    reverseString
}