let input = 'Of all the souls I\'ve known, his was the most...human.';
let vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === 'e') {
        resultArray.push(input[i]);
      };
      if (input[i] === 'u') {
        resultArray.push(input[i]);
      };
    };
  };
};

console.log(resultArray.join('').toUpperCase());