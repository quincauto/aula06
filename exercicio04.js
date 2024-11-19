let x = 100;

function testScope() {
    let x = 50;
    console.log(x);

    if (true) {
        let x = 30;
        console.log(x);
    }
}

testScope();
console.log(x);