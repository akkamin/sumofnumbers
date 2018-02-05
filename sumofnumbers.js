function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let count = 0;
  while (count < list.length) {
    sum += list[count];
    count++;
  }
  return sum;
}

function sumRecursion(list, key) {
  if (key > 0) {
    return list[key] + sumRecursion(list, key - 1);
  }
  return list[key];
}

function sumTheSimpleWay(list) {
  let sum = 0;
  _.each(list, function (element) {
    sum += element;
  });
  return sum;
}

const numbs = [1, 2, 3, 4, 5];

console.log(`sumFor: ${sumFor(numbs)}`);
console.log(`sumWhile: ${sumWhile(numbs)}`);
console.log(`sumRec: ${sumRecursion(numbs, numbs.length - 1)}`);
console.log(`sumEasy: ${sumTheSimpleWay(numbs)}`);

