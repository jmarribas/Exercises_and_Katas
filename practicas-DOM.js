// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme');
console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Element = document.querySelector('#pillado');
console.log(h1Element);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const allWithDataFunction = document.querySelectorAll('[data-function="testMe"]');
console.log(allWithDataFunction);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const thirdTestMe = document.querySelector('[data-function="testMe"]:nth-child(3)');
console.log(thirdTestMe);

// ----------------------------------------------------------------

// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement('div');
document.body.appendChild(div1);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div');
const p2 = document.createElement('p');
div2.appendChild(p2);
document.body.appendChild(div2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const div3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p3 = document.createElement('p');
  div3.appendChild(p3);
}
document.body.appendChild(div3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const p4 = document.createElement('p');
p4.textContent = 'Soy dinámico!';
document.body.appendChild(p4);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
  element.parentNode.removeChild(element);
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const allDiv = document.querySelectorAll("div");
const pMid = document.createElement("p");
pMid.textContent = "Voy en medio!";
document.body.insertBefore(pMid, allDiv[1]);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const divsWithClass = document.querySelectorAll('.fn-insert-here');
divsWithClass.forEach(div => {
  const p9 = document.createElement('p');
  p9.textContent = 'Voy dentro!';
  div.appendChild(p9);
});

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul1 = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul1.appendChild(li);
});

document.body.appendChild(ul1);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
  elementToRemove.parentNode.removeChild(elementToRemove);
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const ul2 = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
});

divPrintHere.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countriesWithImages.forEach(country => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = country.title;
  const img = document.createElement('img');
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const button = document.createElement('button');
div.appendChild(button);

button.addEventListener('click', () => {
  const divs = document.querySelectorAll('div');
  const lastDiv = divs[divs.length - 1];
  if (lastDiv) {
    lastDiv.parentNode.removeChild(lastDiv);
  }
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const divsToRemove = document.querySelectorAll('div');
divsToRemove.forEach(div => {
  const button = document.createElement('button');
  button.textContent = 'Eliminar Este Div';
  button.onclick = function () {
    div.parentNode.removeChild(div);
  };
  div.appendChild(button);
});

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btnToClick = document.getElementById('btnToClick');
btnToClick.addEventListener('click', (e) => {
  console.log('Evento de clic:', e);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const myInput = document.getElementById('myInput');
myInput.addEventListener('focus', (e) => {
  console.log('Evento de focus. Valor del input:', myInput.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
myInput.addEventListener('input', (e) => {
  console.log('Evento de input. Nuevo valor del input:', myInput.value);
});

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumList = document.getElementById('albumList');

albums.forEach(function (album) {
  const listItem = document.createElement('li');
  listItem.textContent = album;
  albumList.appendChild(listItem);
});

// Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();

// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo: 
// data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div = document.querySelector("[data-function='printHere']");
const ul = document.createElement("ul");

for (const place of places) {
  const li = document.createElement("li");
  li.textContent = place;
  ul.appendChild(li);
}

div.appendChild(ul);