$(document).ready(function () {
  let sentence = prompt('write a sentence');
  var text = sentence;

  // first and last letter of a sentence and turn to string(newString())
  function newString(){
    let value = text.charAt(0) + text.charAt(text.length -1);
    value.toUpperCase
    return value.toString();
  }

  // my sentence to string first and last letter(reverseNewstring())
  function reverseNewstring() {
    let reverse = text.charAt(text.length -1) + text.charAt(0);
    return reverse.toUpperCase().toString();
  }

  // Third function (callFunctions())
  function callFunctions() {
    newString();
    reverseNewstring();
    return text + reverseNewstring();
  }
  function countCharacters() {
    var characterscount = text.length;
    let indexLetter = parseInt((text.length) / 2);
    return indexLetter;
  }

  // Create a function to count the number of letter in a sentence
  function countLetters() {
    return sentence.replace().length;
  }

  function getMiddleLetter(sentence) {
    const numLetters = countLetters(sentence);
    const middleIndex = Math.floor(numLetters / 2);

    // return sentence[middlenction addMiddleLetter (sentence); 
    const middleLetter = getMiddleLetter(sentence);
    return middleLetter + sentence.slice(0, middleLetter.length);
  }
  const originalSentence = "i am a sentence";
  const result = addMiddleLetter(originalSentence);
  console.log(result);

  // bonus 
  function countLetters() {
    return sentence.replace().length;
  }

  function getMiddleLetter() {
    const numLetters = countLetters();
    const middleIndex = Math.floor(numLetters / 2);
    return sentence
  }

  function addMiddleLetter(sentence) {
    const middleLetter = getMiddleLetter(sentence);
    return middleLetter + sentence.slice(0, middleLetter.length);
  }

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const originalSentence = "i am a sentence";
  const result = addMiddleLetter(originalSentence);
  const reversedResult = reverseString(result);
  console.log(reversedResult);

  // using jQuery to make image click able 
  $("img").click(function () {
    alert("This is an animal image");
  })
  
  // End
})