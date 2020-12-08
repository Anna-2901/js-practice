// ==== Practice #2 ====

// // == task-1 == //

// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
// const orderA = { apple: 5, cheese: 1, bread: 3 };
// const orderB = { orange: 10, pork: 2, bread: 1 };
// // Решение:
// //запишeм переменную
// const toGetPrice = (a, b) => {
//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);
//     let total = 0;

//     for (let key of keysB) {
//         if (keysA.includes(key)) {
//             total += a[key] * b[key];
//         }
//     }
//     return total;
// };
// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));




 


// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false

 
//решение:
// const isObjectEmpty = function (obj) {
//     const keys = Object.keys(obj);
//     console.log(keys);
//     console.log(keys.length);
//     if (keys.length === 0) return true;
//     return false;
    
// }

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ name: 'user', age: 21 })) // false


// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// const SIZES = {
// BIG: { price: 25, cal: 100, time: 15 },
// SMALL : { price : 15, cal: 50, time: 7 },
// MEDIUM: { price : 15, cal: 50, time: 7 },
// }
// const STUFFING = {
// CHEESE: { price : 6.5, cal: 45, time: 2 },
// BEACON : { price : 10, cal: 70, time: 6 },
// TOMATO : { price : 12.1, cal: 4, time: 5 },
// CHICKEN : { price : 9.3, cal: 30, time: 5.1 },
// }
// const SAUCES = {
// MUSTARD: { price : 3, cal: 5, time: 1 },
// KETCHUP : { price : 4.2, cal: 20, time: 1.5 },
// BOLOGNESE : { price : 7.5, cal: 50, time: 3 },
// }
// // Створити всі методи і перевірити чи вони працюють

// //Решение:
// const pizza = {
//     size: 0,
//     stuff: [],
//     sauces: [],
//     isValid: false,

//     toShowSize() {
//         console.log(this.size)
//     },
//     setStuff(value) {
//         if (this.stuff.includes(value)) return console.log('Такая добавка уже есть')
//         this.stuff.push(value)
//         console.log(this.stuff)
//     },
//     setSauces(value) {
//         if (this.sauces.includes(value)) return console.log('Такой соус уже добавлен')
//         this.sauces.push(value)
//         console.log(this.sauces)
//     },
//     delStuff(value) {
//         if (!this.stuff.includes(value)) return console.log('Такой добавки нет')
//         for (let i = 0; i < this.stuff.length; i += 1){
//             if (this.stuff[i] === value) {
//                 this.stuff.slice(i, 1)
//             }
//             console.log(this.stuff[i])
//         }
//         return console.log(this.stuff)
//     },
    
// }
// console.log(pizza)
// pizza.setStuff(STUFFING.CHEESE)
// pizza.setStuff(STUFFING.CHEESE)
// pizza.setSauces(SAUCES.KETCHUP)
// pizza.setSauces(SAUCES.KETCHUP)
// pizza.delStuff(STUFFING.TOMATO)
// pizza.delStuff(STUFFING.CHEESE)

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };
// Account.prototype.getInfo = function () {
//     console.log(`login : ${this.login}, email: ${this.email}`);
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango);
// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());

