// 1. Primo Simples
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(2));  // true
console.log(isPrime(9));  // false
console.log(isPrime(13)); // true

// 2. Conversão de Temperatura
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(toFahrenheit(0));   // 32
console.log(toCelsius(212));    // 100

// 3. Máximo em Array
function getMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log(getMax([5, 10, 3, 22, 1]));

// 4. Média de Notas
function average(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
console.log(average([8, 7.5, 9, 10]));

// 5. Construção de Nome Completo
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Vinícius", "Souza"));
console.log(fullName("Maria", "Silva"));

// 6. Chamadas Encadeadas
function double(n) {
    return n * 2;
}
function quadruple(n) {
    return double(double(n));
}
console.log(quadruple(3)); // 12

// 7. Shadowing Médio
let mode = "light";
function toggleMode(mode) {
    let newMode = (mode === "light") ? "dark" : "light";
    console.log("Local (novo) mode:", newMode);
    return newMode;
}
console.log("Global mode:", mode);
toggleMode(mode);
