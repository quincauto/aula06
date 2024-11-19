let phrase = "JavaScript is fun!";

for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}

let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a' || phrase[i] === 'A') {
        counter++;
    }
}
console.log(counter);

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}