let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

function decode(message) {
    return message.split('').reverse().join('');
}

console.log(decode(message1));
console.log(decode(message2));
console.log(decode(message3));
console.log(decode(message4));

let custom1 = "Bloody Mary. Bloody Mary. Bloody Mary.";
let custom2 = "Oh whoops, I didn't read the instructions. These are supposed to be motivational.";
let custom3 = "I take it back. Having fun with little easter eggs and being creative is a tremendous benefit to learning computer science.";
let custom4 = "I am able to express myself through this craft, and I think that is amazing.";

console.log(decode(custom1));
console.log(decode(custom2));
console.log(decode(custom3));
console.log(decode(custom4));