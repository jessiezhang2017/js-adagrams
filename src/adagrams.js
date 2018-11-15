const Adagrams = {

  drawLetters() {
    const letters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B",
    "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E",
    "E", "E", "E", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "I",
    "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M",
    "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O",
    "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T",
    "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X",
    "Y", "Y", "Z"];

    const selected = {};
    let i = 0;
    let draw = -1;

    while(i < 10) {
       draw = Math.floor(Math.random() * letters.length);
       if (!selected[draw]) {
          selected[draw] = letters[draw];
          i += 1;
       }
    }

    return Object.values(selected);
  },

  usesAvailableLetters(input,lettersInHand) {

    for(let letter of input) {
      if(lettersInHand.includes(letter)) {
         lettersInHand.splice(lettersInHand.indexOf(letter),1);
      }
      else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    const letter_values = {a:1, b:3, c:3, d:2, e:1, f:4,
   g: 2, h:4, i:1, j:8, k:5, l:1, m:3,
    n:1, o:1, p:3, q:10, r:1, s:1, t:1,
   u:1, v:4, w:4, x:8, y:4, z:10};

   const word_divided = word.toLowerCase().split('').map(letter => letter_values[letter]);

   let value = word_divided.reduce((a, b) => a + b, 0);

   if(word.length >= 7 && word.length <= 10) {
     value += 8;
   }
   return value;
  },

};


// Do not remove this line or your tests will breAk!
export default Adagrams;
