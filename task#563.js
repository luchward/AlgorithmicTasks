/*
563. Назовем натуральное число палиндромом, если его запись
читается одинаково с начала и с конца (как, например, 4884, 393, 1).
б) Найти все меньшие 100 числа – палиндромы, которые при
возведении в квадрат также дают палиндромы.
 */

function powPalindrome() {
  const result = [];
  const isPalindrome = num => num.toString() === num.toString()
                                                    .split('')
                                                    .reverse()
                                                    .join('');
  for (let i = 0; i < 100; i++) {
    if (isPalindrome(i) && isPalindrome(Math.pow(i, 2))) {
      result.push(i);
    }
  }
  console.log('Power palindromes: ', result.join(', '));
}
