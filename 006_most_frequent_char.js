// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// test_00:
// mostFrequentChar('bookeeper'); // -> 'e'
// test_01:
// mostFrequentChar('david'); // -> 'd'
// test_02:
// mostFrequentChar('abby'); // -> 'b'
// test_03:
// mostFrequentChar('mississippi'); // -> 'i'
// test_04:
// mostFrequentChar('potato'); // -> 'o'
// test_05:
// mostFrequentChar('eleventennine'); // -> 'e'
// test_06:
// mostFrequentChar("riverbed"); // -> 'r'

const mostFrequentChar = (s) => {
    // todo
    var hash = {}
    for( var i of s){
      if(!(i in hash)){
        hash[i] = 0
      }
      hash[i] += 1
    }
    var max = s[0]
    var result = s[0]
    for ( var i of s){
      if(hash[i] > hash[max]){
        console.log(hash[max])
        result = i
      }
        
    }
    return result
  };
  
  
  console.log(mostFrequentChar('bookeeper'))

  module.exports = {
    mostFrequentChar
  };