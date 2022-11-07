const inputEl = document.querySelector('#validation-input')

const inputContent = (e) => {
    e.currentTarget.classList.remove('invalid');

if (
    e.currentTarget.value.length <
        e.currentTarget.dataset.length || e.currentTarget.value.length >
        e.currentTarget.dataset.length
) {
        e.currentTarget.classList.add('invalid');
    }
    e.currentTarget.classList.add('valid');
    
};
inputEl.addEventListener("blur", inputContent);