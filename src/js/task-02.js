const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const product = [];

const listEl = document.querySelector('#ingredients');
ingredients.forEach((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  product.push(itemEl)
});

listEl.append(...product)
