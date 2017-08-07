var sentence =(prompt("Enter a preferred sentence:"));

var bookends = function (sentence) {
  var firstLetter = sentence.charAt(0);
  var lastLetter = sentence.charAt(sentence.length - 1);
  var firstLetter = firstLetter.toUpperCase();
  var lastLetter = lastLetter.toUpperCase();
  var middleLetters = sentence.substring(1, sentence.length-1);
  var lettersArray = [firstLetter, middleLetters, lastLetter];
  return lettersArray;
};

var capitalize = function(sentence) {
	var lettersArray = bookends(sentence);
  return lettersArray[0] + lettersArray[1] + lettersArray[2];
};

var swap = function(sentence) {
  var letters = bookends(sentence);
  return letters[2] + letters[1] + letters[0];
};

var shorten = function(sentence) {
  var letters = bookends(sentence);
  return letters[2] + letters[0];
}

var combine = function(sentence) {
  var letters = bookends(sentence);
  return sentence + shorten(sentence);
};

var midpoint = function(sentence) {
  var midpoint =  (sentence.length - sentence.length % 2) /2;
  var midLetter = sentence.charAt(midpoint);
  return reverse(midLetter + combine(sentence));
};

var reverse = function(sentence) {
  return sentence.split('').reverse().join('');
}

// alert(capitalize(sentence));
//
// // alert(swap(sentence));

// alert(shorten(sentence));
//
// alert(combine(sentence));

// alert(midpoint(sentence));

alert(midpoint(sentence));
