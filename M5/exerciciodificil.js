// 1. Analisador de Números Completo
let analysisType = "sum";

function analyzeNumbers(analysisType, numbers) {
    // Shadowing de analysisType
    function sumNumbers(arr) {
        let total = 0;
        for (let n of arr) {
            total += n;
        }
        return total;
    }

    function averageNumbers(arr) {
        let total = sumNumbers(arr);
        return total / arr.length;
    }

    if (analysisType === "sum") {
        return sumNumbers(numbers);
    } else if (analysisType === "average") {
        return averageNumbers(numbers);
    } else {
        return "Tipo de análise inválido.";
    }
}

console.log("Análise (sum):", analyzeNumbers("sum", [1, 2, 3, 4]));       // 10
console.log("Análise (average):", analyzeNumbers("average", [1, 2, 3, 4])); // 2.5
console.log("Global analysisType:", analysisType);
