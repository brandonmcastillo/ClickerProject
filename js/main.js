var count;
var input = document.querySelector('input');
var number = document.getElementsByTagName('h1');


start();


function start () {
    input.value = 1;
    count = 0;
 }

document.getElementById('plus').addEventListener('click', function add() { 
    count += parseInt(input.value);
    console.log(count)
    show();
    }, 
    false
);


document.getElementById('minus').addEventListener('click', function add() { 
    count -= parseInt(input.value);
    console.log(count)
    show();
    },
    false
);

function show () {
    let number = document.getElementById('number')
    number.textContent = count;
}


