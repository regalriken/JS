# My Projects for JS
# done 6 out of 9
## [Project link](https://stackblitz.com/edit/dom-project-chaiaurcode-49bjcjlb?file=index.html)

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

Project 2

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

Project 3 

``` javascript

let myClock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  myClock.textContent = date.toLocaleTimeString();
}, 1000);


```

Project 4

``` javascript

function answerChecker(guessedNumber, answerNumber) {
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    return 'INVALID';
  }

  if (guessedNumber === answerNumber) {
    return 'PASSED';
  } else if (guessedNumber > answerNumber) {
    return 'HIGH';
  } else if (guessedNumber < answerNumber) {
    return 'LOW';
  }
}

function display(
  result,
  guessedNumber,
  guessedNumberBox,
  play,
  previousGuesses,
  previousGuessesBox
) {
  const message = document.querySelector('.lowOrHi');
  const remainingGuesss = document.querySelector('.lastResult');

  const myBtn = document.getElementById('subt');

  function itemsToDisplay() {
    previousGuesses.push(guessedNumber);
    previousGuessesBox.textContent = previousGuesses;
    remainingGuesss.textContent = play;
    guessedNumberBox.value = '';
    guessedNumberBox.focus();
  }
  switch (result) {
    case 'PASSED':
      myBtn.disabled = true;
      message.textContent = `Correct guess`;
      previousGuesses.push(guessedNumber);

      previousGuessesBox.textContent = previousGuesses;

      guessedNumberBox.focus();
      guessedNumberBox.disabled = true;
      break;

    case 'HIGH':
      message.textContent = 'guess is high';
      itemsToDisplay();
      break;

    case 'LOW':
      message.textContent = 'guess is low';
      itemsToDisplay();
      break;

    case 'GAMEOVER':
      previousGuesses.push(guessedNumber);
      previousGuessesBox.textContent = previousGuesses;

      myBtn.disabled = true;
      message.textContent = 'GAME OVER';
      remainingGuesss.textContent = play;
      guessedNumberBox.disabled = true;

      break;
    default:
      message.textContent = 'something is not right :/';
      break;
  }
}

function game() {
  let myForm = document.querySelector('.form');
  const answerNumber = Math.floor(Math.random() * 100) + 1;

  let play = 10;
  let previousGuesses = [];
  const previousGuessesBox = document.querySelector('.guesses');
  // console.log(answerNumber); // help for debugging
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let guessedNumberBox = document.querySelector('.guessField');
    let guessedNumber = parseInt(guessedNumberBox.value);
    let result = answerChecker(guessedNumber, answerNumber);

    if (result !== 'INVALID') {
      if (result !== 'PASSED') {
        play--;
      }

      if (play <= 0 && result !== 'PASSED') {
        display(
          'GAMEOVER',
          guessedNumber,
          guessedNumberBox,
          play,
          previousGuesses,
          previousGuessesBox
        );
        return 'GAMEOVER';
      }
      display(
        result,
        guessedNumber,
        guessedNumberBox,
        play,
        previousGuesses,
        previousGuessesBox
      );
    } else if (result === 'INVALID') {
      const message = document.querySelector('.lowOrHi');
      message.textContent = 'Enter a number between 1 and 100';
      return;
    }
  });
}
game();

```

Project 5

``` javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>ASCII</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> </div>
  `;
});

```

Project 6

``` javascript

let colorChange = null;

function interval(action) {
  let generatePastelWithFont = () => {
    const hue = Math.floor(Math.random() * 360);
    const bgColor = `hsl(${hue}, 70%, 80%)`;
    const fontColor = `hsl(${hue}, 40%, 25%)`;
    return [bgColor, fontColor];
  };

  if (action === 'Start') {
    colorChange = setInterval(() => {
      let newColor = generatePastelWithFont();
      document.body.style.backgroundColor = newColor[0];
      document.body.style.color = newColor[1];
    }, 1000);
  } else if (action === 'Stop') {
    clearInterval(colorChange);
    colorChange = null;
  }
}

document.getElementById('start').addEventListener('click', () => {
  interval('Start');
});

document.getElementById('stop').addEventListener('click', () => {
  interval('Stop');
});

```
