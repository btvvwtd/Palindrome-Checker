document.getElementById('check-btn').addEventListener('click',function(){
    const inputText = document.getElementById('text-input').value;
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    const resultElement = document.getElementById('result');

    if (cleanedText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
});


let number = 5.7;

console.log(Number.isInteger(number));