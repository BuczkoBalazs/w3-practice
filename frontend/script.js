function addTwoIntegers(firstInteger, secondInteger) {
    // console.log(firstInteger + secondInteger)
    // return firstInteger + secondInteger
    // return "Hello dicsak"
    if(typeof firstInteger === "number" && typeof secondInteger === "number"){
        return firstInteger + secondInteger
    } else {
        return "Valamelyik argumentum nem szám. Ezért a művelet nem elvégezhető."
    }
}

console.log( addTwoIntegers(12, "13") );
console.log( addTwoIntegers(1920, 85) );
console.log(0 ==="0")