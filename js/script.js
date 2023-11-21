// % Pari e Dispari:

let userNumber = parseInt( prompt('Scegli un numero da 1 a 5'));
while (isNaN(userNumber) || userNumber > 5 || userNumber < 1){
    userNumber = parseInt( prompt('Non hai inserito un numero: gentilmente scegli un numero'));
}

let userChoice =  prompt('Scegli se pari o dispari');
while ( userChoice !== 'pari' && userChoice!== 'dispari'){
    userChoice =  prompt('Sbagliato! Scrivi se pari o dispari');
}

const aiNumber = getRandomNumber(1,5);

// console.log(userChoice, userNumber, aiNumber );

let finalSum = userNumber + aiNumber;
let result = pariODispari(finalSum);

if (result === userChoice){
    console.log('Hai vinto!', finalSum, result, userChoice);
} else {
    console.log('Hanno vinto le macchine! 100101010011001001!!', finalSum, result, userChoice);
}



// % Palidroma:

const userWord = prompt('Type a word');
console.log(isPalindrome(userWord));


// ? ------ Functions ------ ?

function pariODispari(numero){
    if ( numero % 2 === 0 ){
        return 'pari';
    } else {
        return 'dispari';
    }
}

function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}

function getReversedWord(word){
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--){
        reversedWord = reversedWord + word.charAt(i);
    }

    return reversedWord;
}

function isPalindrome(word){
    let result = true;
    let index = 0;

    while ( index < Math.floor(word.length / 2) ){
        if ( word.charAt(index) !== word.charAt(word.length - 1 - index) ){
            result = false;
            index = word.length;
        }
        index++;
    }

    return result;
}