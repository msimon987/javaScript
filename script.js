var dobro = 123456789123;
var lose = "1123456";
var jedinstveniZnakovi = function(password) {
    //vas kod
    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);

};

function isUnqueCharacters(password){
    var myArray = [];
    for(var i = 0; i <= password.length; i++) {
        var myChar = password.charAt(i);
        if (!myArray.includes(myChar)){
            myArray.push(myChar);
        }
        else {
            return false
        }
    }
    return true
};

function isVeciOd10(password){
    if(password.length > 10){
        return password.substring(0, 10);
    }
    return password;
}

console.log("rezultat = " + isUnqueCharacters(lose))
console.log("rezultat duljine = " + isVeciOd10(dobro.toString()))