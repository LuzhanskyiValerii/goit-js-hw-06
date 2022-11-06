const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value')
let counterValue = 0;

const render = () => {
    value.textContent = counterValue;
};
const handelDecrement = () => {
    counterValue -= 1;
    render();
};
const handelIncrement = () => { 
    counterValue += 1;
    render();
};
render();
decrement.addEventListener('click', handelDecrement);
increment.addEventListener('click', handelIncrement);