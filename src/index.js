module.exports = function toReadable(number) {
    if (!number) return "zero";

    let result = "";

    const numbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozensOfNumbers = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    if (number < 20) {
        result += numbers[number];
    } else if (number < 100) {
        const firstNumber = (number - (number % 10)) / 10;
        const secondNumber = number % 10;
        result += dozensOfNumbers[firstNumber] + numbers[secondNumber];
    } else {
        const firstHundreds = (number - (number % 100)) / 100;
        result += numbers[firstHundreds] + " hundred ";
        const lastNumber = number - firstHundreds * 100;
        if (lastNumber < 20) {
            result += numbers[lastNumber];
        } else if (lastNumber < 100) {
            const firstNumber = (lastNumber - (lastNumber % 10)) / 10;
            const secondNumber = lastNumber % 10;
            result += dozensOfNumbers[firstNumber] + numbers[secondNumber];
        }
    }

    return result.trim();
};
