// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and add a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Guadelupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(4);