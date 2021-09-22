// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

const uncompress = (s) => {
    // todo
    var result = "";
    var nums = "0123456789";
    var i = 0;
    var j = 0;
    while (j < s.length){
      if(nums.includes(s[j])){
        j++
      }else{
        var n = Number(s.slice(i,j));
        for( var a = 0; a < n; a++){
          result += s[j]
        }
        j++;
        i = j;
      }
      
    }
    return result
  };
  
  
  
  