// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurences of the same characters are compressed into the number of occurences followed by the character. Single character occurences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// test_00:
// compress('ccaaatsss'); // -> '2c3at3s'
// test_01:
// compress('ssssbbz'); // -> '4s2bz'
// test_02:
// compress('ppoppppp'); // -> '2po5p'
// test_03:
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// test_04:
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'
const compress = (s) => {
    // todo
    let i = 0;
    let j = 0;
    let result = '';
    while (j < s.length +1){
      if(s[j] == s[i]){
        j++
      }else{
        n = j - i;
        if(n==1)
          result += s[i]
        else
          result += (j-i) + s[i]
        i = j
        j++ 
      }
    }
      return result;
  };
  
  
    console.log(compress('ssssbbz'))
  