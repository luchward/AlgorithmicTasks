/*
338.Даны натуральное число n , целые числа a1,.. . , a25 , b1, ... ,bn .
Среди a1,.. . , a25 нет повторяющихся чисел, нет их и среди b1, ... ,bn .
а) Построить пересечение последовательностей a1, ... ,a25 и
b1, ... ,bn (т.е. получить в каком-нибудь порядке все числа,
принадлежащие последовательности a1, .. . , a25 и последовательности
b1, ... ,bn одновременно)+.
 */

function sequenceIntersection(firstArray, secondArray) {
  const set = new Set(firstArray);
  const intersection = [];
  let setSize = set.size;
  secondArray.forEach(item => {
    set.add(item);
    set.size > setSize ? setSize++ : intersection.push(item);
  });
  console.log('Sequence intersection: ', intersection.join(', '));
}
