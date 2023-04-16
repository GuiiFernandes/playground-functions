// Desafio 1 - Crie a função compareTrue
const compareTrue = (value1, value2) => value1 && value2;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (phrase) => phrase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties * 1;

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  const bigger = Math.max(...array);
  return array.reduce((counter, value) => {
    if (value === bigger) counter += 1;
    return counter;
  }, 0);
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) return 'os gatos trombam e o rato foge';
  return distanceCat1 > distanceCat2 ? 'cat2' : 'cat1';
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => array.map((value) => {
  if (value % 3 === 0 && value % 5 === 0) return 'fizzBuzz';
  if (value % 5 === 0) return 'buzz';
  if (value % 3 === 0) return 'fizz';
  return 'bug!';
});

// Desafio 9 - Crie a função encode e a função decode
const code = (phrase, codes) => {
  let newPhrase = '';
  for (let character of phrase) {
    if (codes[character] !== undefined) {
      newPhrase += codes[character];
    } else {
      newPhrase += character;
    }
  }
  return newPhrase;
};

function encode(phrase) {
  const codes = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return code(phrase, codes);
}

function decode(phrase) {
  const codes = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return code(phrase, codes);
}

// Desafio 10 - Crie a função techList
const techList = (array, name) => {
  const newArray = [];
  for (let item of array.sort()) {
    newArray.push({
      tech: item,
      name,
    });
  }
  return newArray;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
