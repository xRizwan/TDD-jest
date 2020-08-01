function cipher(str, key){
    let tempStr = '';

    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
            let charCode = str[i].charCodeAt(0);
            let index = ( ( (key % 26) + charCode - 65) % 26) + 65;
            let converted = String.fromCharCode(index);
            tempStr = tempStr + converted;
        }
        else if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
            let charCode = str[i].charCodeAt(0);
            let index = ( ( (key % 26) + charCode - 97) % 26) + 97;
            let converted = String.fromCharCode(index);
            tempStr = tempStr + converted;
        }
        else {
            tempStr = tempStr + str[i];
        }
    }
    return tempStr;
}

// String.fromCharCode(num);
// str.charCodeAt
console.log(cipher("a", 26))

module.exports = cipher;