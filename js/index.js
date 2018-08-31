// const productName = 'iPhone X';
// alert(productName);

// productName = 'Nokia 3200';
// alert(productName);


// const userName = prompt('Enter your name');
// const greetings = userName + ', hello!';

// alert(greetings);

// const userAge = parseFloat(prompt('Enter your age'));
// alert(userAge);
// // const nextAge = userAge + 1;
// const nextAge = addOne(userAge);
// alert(nextAge);

// function addOne(val) {
//     const result = val + 1;
//     return result;
// }

// // Should increase price by 10%
// function calPrice(price) {
//     const result = price * 1.1;
//     return result;
// }

// const oldPrice = parseFloat(prompt('Enter price'));
// const newPrice = calPrice(oldPrice);
// alert(newPrice);

function checkAge(age) {
    if (age >= 18 && age < 100) {
        return 'You are adult';
    } else if (age > 100) {
        return 'You are middle age';
    } else {
        return 'You are kid';
    }
}

const userAge = parseInt(prompt('Enter your age'));
const message = checkAge(userAge);
alert(message);


const a = parseFloat(prompt('Enter A'));

function solveQuadr(a, b, c) {
    return 'X1 = ' + x1 + ' X2 = ' + x2;
}

const result solveQuadr(a,b,c);
alert(result);