// const input = document.querySelector('#name-input');
// const nameLabel = document.querySelector('#name-output');

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
    
};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    //перевірка на пусту строку ---- .trim() !== '' ----
    refs.nameLabel.textContent = event.currentTarget.value.trim() !== ''
        //якщо строка не пуста, то event.currentTarget.value
        ? event.currentTarget.value
        //якщо строка пуста або "пробіл", то 'Anonimus'
        : 'Anonymous';
};