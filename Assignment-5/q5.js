function processArray(numbers) {
    let evens = numbers.filter(num => num % 2 === 0);

    let doubled = evens.map(num => num * 2);

    let sum = doubled.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(processArray(arr));
