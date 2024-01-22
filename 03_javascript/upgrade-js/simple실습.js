const word1 = "abc";
const word2 = "xyz";

const wordConcat = word1.concat(word2);
const wordspread = [...word1, ...word2];
const word3ConcatandSpread = (wordConcat + wordspread).split("");
console.log("wordConcat: ", wordConcat);
console.log("wordspread: ", wordspread);
