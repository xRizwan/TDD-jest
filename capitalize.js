function capitalize(string){
    let newStr = '';
    let temp;
    for (let i = 0; i < string.length; i++){
        if(i === 0){
            temp = string.charAt(i).toUpperCase();
            newStr = temp + string.slice(1);
        }
        if(string.charAt(i) === ' '){
            temp = newStr.charAt(i+1).toUpperCase();
            newStr = newStr.substr(0, i+1) + temp + newStr.substr(i+1+temp.length, string.length);
        }
    }
    return newStr;
}

module.exports = capitalize;