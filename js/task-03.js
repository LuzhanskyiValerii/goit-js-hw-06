const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Пошук елемента з класом (gallery) та присвоєння його в const (Gallery)
const galleryEl = document.querySelector('.gallery') 
console.log(galleryEl)
//Створення галереї з масиву об'єктів (images)
//map(), ми можемо перебрати масив об'єктів, 
//і в колбек - функції повернути значення властивості кожного з них.
//join("") об'єднує елементи масиву у рядок.
// У рядку елементи будуть розділені символом або групою символів, 
//зазначених в ""
const makeGallery = images
  .map((img) => `<li><img src="${img.url}" alt= "${img.alt}"></li>`)
  .join("");
console.log(makeGallery)
//Додаємо рядок з HTML-тегами всередині елемента (galleryEl), перед усіма дітьми
galleryEl.insertAdjacentHTML("afterbegin", makeGallery);