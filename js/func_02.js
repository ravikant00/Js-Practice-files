// create a reusable discount calculator(HOF)

function discountCalculator(discount) {
    return function(price) {
        return price - price *(discount / 100);
    };
    
};

// let discounter = discountCalculator(10);
// console.log(discounter(200));

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(100));