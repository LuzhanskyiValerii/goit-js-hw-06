const categories = document.querySelectorAll("li.item")
console.log(`Number of categories: ${categories.length}`)
categories.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
