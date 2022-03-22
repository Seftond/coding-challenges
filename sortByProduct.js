function sortByProduct(arr){
    let arrObj = []
    let returnArr = []
    for(let i = 0; i < arr.length; i++){
        let product = arr[i] * (i + 1);
        arrObj.push({
            value: `${arr[i]}`,
            product: `${product}`
        })
    }
    arrObj.sort((a, b) => a.product - b.product);
    for(let i = 0; i < arrObj.length; i++){
        returnArr.push(arrObj[i].value);
    }
    return returnArr;
}
let myArr = [23, 2, 3, 4, 5]
console.log()