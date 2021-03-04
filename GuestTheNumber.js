let randomNumber = undefined();
let userNumber = undefined();
let level = undefined();
let correctNumber = getRandomNumber();
console.log(correctNumber);

function selectLevel() {
    level = selectLevelTab;
    if (level === "10") {
        level = level * 10;
        methods.gestLevel("Easy");
        methods.randomNumber(1, level);
    } else if (variables.level === "50") {
        level = level * 10;
        methods.gestLevel("Medium");
        methods.randomNumber(2, level);
    } else if (variables.level === "100") {
        level = level * 10;
        methods.gestLevel("Advanced");
        methods.randomNumber(3, level);
        console.log(`number ${randomNumber}`);
    }