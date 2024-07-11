const display=document.querySelector('.counter-preview');
const decrementBtn =document.querySelector('.decrement');
const incrementbtn= document.querySelector('.increment');
const resetbtn= document.querySelector('.reset');

incrementbtn.addEventListener('click', addFunc);

let value=0;
function addFunc(){
    value+=1;
    display.textContent=value;
}

decrementBtn.addEventListener('click', decFunc);

function decFunc(){
    value -=1;
    display.textContent=value;
}

resetbtn.addEventListener('click', resetFunc);

function resetFunc(){
    value=0;
    alert("You clicked Reset!");
    display.textContent=value;
}

// refactored code
// const display = document.querySelector('.counter-preview');
// const allBtns = document.querySelector('#allBtns');

// allBtns.addEventListener('click', counter);

// let value = 0;
// function counter(e) {
//   const btn = e.target.id;
//   if (btn === 'increment') {
//     value += 1;
//   } else if (btn === 'decrement') {
//     value -= 1;
//   } else {
//     value = 0;
//   }

// 	display.textContent = value;
// }