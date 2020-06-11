function translatePigLatin(str) {
var vowels = ['a', 'e', 'i', 'o', 'u'],
  result = str.split('');
  
  if (vowels.includes(str.charAt(0))) {
    return str += 'way';
  } else if (str.charAt(0) === "q" && str.charAt(1) === "u") {
      result.shift();
      result.shift();
      result.push('quay');
      return result.join('')
  } else {
        for (var i = 0; i < str.length; i++) {
          if (!vowels.includes(str[i])) {
            result.push(result.shift());
          } else {
              result.push('ay');
              return result.join('')
          }
        }
    }
}

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    const word = $("input#word").val();
    const translatedWord = translatePigLatin(word);
    
    $("#output").text(translatedWord)

    event.preventDefault();
  });
});

