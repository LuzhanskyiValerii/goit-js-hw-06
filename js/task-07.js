const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeFontSize = (e) => {
    spanEl.style.fontSize = String(e.currentTarget.value) + "px";
};
inputEl.addEventListener("input", changeFontSize);
