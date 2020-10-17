
// console.log('Step 1');
// alert('Step 2');
// console.log('Step 3');

function sumFunc (arg1, arg2, arg3) {
    return arg1+arg2+arg3;
}
let result = sumFunc(1, 2, 3);
console.log(result);
const button = document.querySelector('#click');
const text = document.querySelectorAll('input');
const div = document.querySelector('#input-value');

button.addEventListener('click', function (event) {
    div.innerText = text.value;
    console.log(event)
})



const inputListener = function (event) {
    const input = event.target;
    div.textContent = input.value;
    console.log(event)
}

for (const input of text) {
    input.addEventListener('input', inputListener);
}

// text.addEventListener('input', inputListener);



