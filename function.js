//Импортируем массив продуктов c файла practice.js:

import products from './array.js';

 console.table(products);

const creatCard = portfolio => {
    const containerPort = document.createElement('div');
    containerPort.classList.add('card');
    const titlePort = document.createElement('h2');
    titlePort.textContent = portfolio.name;
    titlePort.classList.add('title-card');

    const hobbyPort = document.createElement('p');
    hobbyPort.textContent = portfolio.hobby;

    const servicePort = document.createElement('p');
    servicePort.textContent = `Цена ${portfolio.service} $`;

    containerPort.append(titlePort, hobbyPort, servicePort);
    return containerPort;
}
const ssss = products.map(product => creatCard(product));
console.log(ssss);

const dddd = document.querySelector('.js-products');
console.log(dddd);

dddd.append(...ssss);