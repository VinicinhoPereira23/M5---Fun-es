// 1. Hello World
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

// 2. Soma Simples
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));

// 3. Variável Local
function localExample() {
    let message = "Variável local";
    console.log(message);
}
localExample();
// console.log(message); // <-- Vai gerar erro (message não está definida)

// 4. Saudação por Nome
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Vinícius");
greet("Maria");
greet("Lucas");

// 5. Área do Círculo
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateArea(2));

// 6. Data Atual
function currentDate() {
    let today = new Date();
    console.log(today);
}
currentDate();

// 7. Shadowing Básico
let x = 10;
function shadowExample(x) {
    console.log("Parâmetro x:", x);
    console.log("Variável global x:", window ? window.x : globalThis.x);
}
shadowExample(20);
