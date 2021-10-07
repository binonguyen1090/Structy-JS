// overlap subsequence
// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// test_00:
// overlapSubsequence("dogs", "daogt"); // -> 3
// test_01:
// overlapSubsequence("xcyats", "criaotsi"); // -> 4
// test_02:
// overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
// test_03:
// overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
// test_04:
// overlapSubsequence(
//   "mumblecorebeardleggingsauthenticunicorn",
//   "succulentspughumblemeditationlocavore"
// ); // -> 15


const overlapSubsequence = (str1, str2,i = 0, j = 0,hash={}) => {
    // todo
    let pos = i + "," + j
    if(pos in hash) return hash[pos]
    if(i == str1.length || j == str2.length) return 0
    if(str1[i] == str2[j]){
      hash[pos] = 1 + overlapSubsequence(str1, str2,i+1, j+1,hash)
      return hash[pos]
    }else{
        hash[pos] = Math.max(overlapSubsequence(str1, str2,i+1,j,hash),
                    overlapSubsequence(str1, str2,i, j+1,hash))
      return hash[pos]
      }
    
  };
  
  
  