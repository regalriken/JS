# My Projects for JS
## [Project link](https://stackblitz.com/edit/dom-project-chaiaurcode-vferbr8x?file=index.html)

#### Solution Code
Project 1

``` javascript

const myButtonList = document.querySelectorAll('.button');
console.log(myButtonList);

const bodyTag = document.querySelector('body');

myButtonList.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    btnId = event.target.id;
    switch (btnId) {
      case 'grey':
        bodyTag.style.backgroundColor = 'grey';
        bodyTag.style.color = 'aqua';
        break;
      case 'white':
        bodyTag.style.backgroundColor = 'white';
        bodyTag.style.color = 'black';
        break;
      case 'blue':
        bodyTag.style.backgroundColor = 'blue';
        bodyTag.style.color = 'white';
        break;
      case 'yellow':
        bodyTag.style.backgroundColor = 'yellow';
        bodyTag.style.color = 'red';
        break;
      default:
        bodyTag.style.backgroundColor = 'white';
        bodyTag.style.color = 'black';
        break;
    }
  });
});

```

Project 1

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height <= 0 || isNaN(height)) {
    result.textContent = 'Please give me valid height';
    result.style.color = 'red';
    return;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.textContent = 'Please give me valid weight';
    result.style.color = 'red';
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  bmi = bmi.toFixed(2);

  result.textContent = bmi;

  document.querySelector('#under').style.color = 'black';
  document.querySelector('#normal').style.color = 'black';
  document.querySelector('#over').style.color = 'black';
  result.style.color = 'black';

  if (bmi < 18.6) {
    const colorChange = document.querySelector('#under');
    colorChange.style.color = 'red';
    result.style.color = 'red';
  } else if (18.6 <= bmi && bmi <= 24.9) {
    const colorChange = document.querySelector('#normal');
    colorChange.style.color = 'green';
    result.style.color = 'green';
  } else {
    const colorChange = document.querySelector('#over');
    colorChange.style.color = 'red';
    result.style.color = 'red';
  }
});


```