// ====Article (новый способ через объекты)====

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const insertElem = document.querySelector('.insertElem');
createPosr(images, insertElem);

// function createPosr(array, place) {
//   function createItems(array) {
//     return array.map((elem) => {
      
//       const img = document.createElement('img');
//       img.setAttribute('src', elem.url)
//       img.setAttribute('alt', elem.alt)
//       img.setAttribute('width', '300')
//       console.log(img);

//       const a = document.createElement('a');
//       a.setAttribute('href', '');
//       a.append(img);

//       const li = document.createElement('li');
//       li.classList.add('list-item');
//       li.append(a)
//       return li
//     })
//   }

//   createItems(array)

//   const ul = document.createElement('ul');
//   ul.id = 'allPosts';
//   ul.append(...allItems);

//   const div = document.createElement('div');
//   div.style.backgroundColor = 'tomato';
//   div.insertAdjacentElement('afterbegin', ul);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'I love JS';

//   const p1 = document.createElement('p');
//   p1.textContent = 'Bla-bla-bla';

//   const span = document.createElement('span');
//   span.textContent = '15.11.2020';

//   const p2 = document.createElement('p');
//   p2.textContent = 'Anna';
//   p2.append(span);

//   const input = document.createElement('input');
//   input.type = 'checkbox';

//   const article = document.createElement('article');
//   article.append(h2, p1, div, p2, input,);

//   console.log(article);

//   place.prepend(article);
// }



// ====Article (строчный метод)====

function createInnerPost(array, place) {
  const arrayItems = array.map((obj) => {
   

    const li = `<li class="listItem">
    <a href="">
    <img src="${obj.url}" alt="${obj.alt}" width="300">
    </a>
    </li>`;
    return li;
  })
  
  const article = `<article>
<h2>Hello world!</h2>
<p>Loren</p>
<div>
<ul>${arrayItems}</ul>
</div>
<p>Anna<span>15.11.2020</span></p>
<input type="checkbox">
</article>`
  
  place.insertAdjacentHTML('afterbegin', article)
  return article;
}

console.log(createInnerPost(images, insertElem));

// ====Article (новый способ через объекты)==== Копия для оптимизации!!

function createPosr(array, place) {
  const allItems = function createItems(arr) {
    return arr.map((elem) => {
      
      const img = document.createElement('img');
      img.setAttribute('src', elem.url)
      img.setAttribute('alt', elem.alt)
      img.setAttribute('width', '300')
      console.log(img);

      const a = document.createElement('a');
      a.setAttribute('href', '');
      a.append(img);

      const li = document.createElement('li');
      li.classList.add('list-item');
      li.append(a)
      return li
    })
  }(array);


  const ul = document.createElement('ul');
  ul.id = 'allPosts';
  ul.append(...allItems);

  const div = document.createElement('div');
  div.style.backgroundColor = 'tomato';
  div.insertAdjacentElement('afterbegin', ul);

  const h2 = document.createElement('h2');
  h2.textContent = 'I love JS';

  const p1 = document.createElement('p');
  p1.textContent = 'Bla-bla-bla';

  const span = document.createElement('span');
  span.textContent = '15.11.2020';

  const p2 = document.createElement('p');
  p2.textContent = 'Anna';
  p2.append(span);

  const input = document.createElement('input');
  input.type = 'checkbox';

  const article = document.createElement('article');
  article.append(h2, p1, div, p2, input,);

  console.log(article);

  place.prepend(article);
}

// ===== Form =====
creatForm(insertElem)
function creatForm(place) {
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'JS is magic';

    const desc = document.createElement('p');
    desc.textContent = 'learn JS and don not be afraid';

    const nameTitle = document.createElement('lable');
    nameTitle.textContent = 'Write name';

    const nameInput = document.createElement('input')
    nameInput.placeholder = 'name';

    const phoneTitle = document.createElement('lable');
    phoneTitle.textContent = 'Write name';

    const phoneInput = document.createElement('input')
    phoneInput.placeholder = 'name';
    
    const emailTitle = document.createElement('lable');
    emailTitle.textContent = 'Write name';

    const emailInput = document.createElement('input')
    emailInput.placeholder = 'name';

    const messageTitle = document.createElement('lable');
    messageTitle.textContent = 'Message';

    const message = document.createElement('textarea');
    message.placeholder = 'Your message write here';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';

    const form = document.createElement('form');
        form.append(formTitle, desc, nameTitle, nameInput,
        phoneTitle, phoneInput,
        emailTitle, emailInput,
        messageTitle, message, submitBtn);
    place.append(form);

}
