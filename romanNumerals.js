function toRoman(num){
    let roman = ""
    while(num){
        if (num === 1000){
            num -= 1000;
            roman += "M"
        }else if(num >= 500){
            num -= 500;
            roman += "D"
        } else if(num >= 100){
            num -= 100;
            roman += "C"
        }else if(num >= 50){
            num -= 50;
            roman += "L"
        } else if(num >= 10){
            num -= 10;
            roman += "X"
        } else if(num >= 5){
            num -= 5;
            roman += "V"
        } else {
            num -= 1;
            roman += "I"
        }
    }
    return roman;
}

console.log(toRoman(267))