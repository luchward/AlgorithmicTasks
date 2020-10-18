/*
330. Натуральное число называется совершенным, если оно
равно сумме всех своих делителей, за исключением себя самого. Число
6 – совершенное, так как 6 = 1+2+3. Число 8 – не совершенное, так как
8 ≠ 1+2+4.Дано натуральное число n. Получить все совершенные числа,
меньшие n.
 */

function perfect(n) {
  const perfectNumbers = [];
  for (let i = 1; i <= n; i++) {
    const dividers = [];
    for (let j = 1; j < i; j++) {
      if (i % j === 0) dividers.push(j);
    }
    if (i === dividers.reduce((sum, item) => sum + item, 0)) {
      perfectNumbers.push(i);
    }
  }
  console.log('Perfect numbers: ', perfectNumbers.join(', '));
}
