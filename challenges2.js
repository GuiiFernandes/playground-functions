// Desafio 11 - Crie a função generatePhoneNumber
const sizeArray = (array) => {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
};

const countRepeat = (num, array) => array.reduce((counter, value) => {
  if (value === num) return counter + 1;
  return counter;
}, 0);

const analyzeNumbers = (array) => {
  for (let num of array) {
    if (num < 0 || num > 9 || countRepeat(num, array) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
};

const generatePhoneNumber = (array) => {
  let result;
  result = sizeArray(array);
  if (!result) result = analyzeNumbers(array);
  if (!result) {
    result = `(${array.slice(0, 2).join('')})`;
    result += ` ${array.slice(2, 7).join('')}-${array.slice(7).join('')}`;
  }
  return result;
};

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lA, lB, lC) => lA < lB + lC && lB < lA + lC && lC < lA + lB;

// Desafio 13 - Crie a função hydrate
const hydrate = (phrase) => {
  const arrayNumbers = Array.from(phrase.matchAll(/[1-9]/g));
  let sum = 0;
  for (let num of arrayNumbers) {
    sum += Number(num[0]);
  }
  let plural = '';
  if (sum > 1) plural = 's';
  return `${sum} copo${plural} de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
