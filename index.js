// Code your solutions in this file
function writeCards(arrayNames, eventName) {
    let thankYouCards = []
    for (let i = 0; i < arrayNames.length; i++) {
        thankYouCards.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouCards
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num)
}