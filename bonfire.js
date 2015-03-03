/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
*/

function unite(arr1, arr2, arr3) {
  var newArray=[], flag=0, returnArray=[];
  newArray=arr1.concat(arr2,arr3);
  function contains(num, idx){
    for(var i=0; i<idx;i++){
      if(num===newArray[i])
        return false;
    }
    return true;
  }
  
  
  for(var i=0;i<newArray.length;i++)
  {
      if(contains(newArray[i],i)){
        returnArray.push(newArray[i]);
      }
  }
  
  return returnArray;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

/*
Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.
*/

function convert(str) {
  // &colon;&rpar;
  var strArray = str.split(" ");
  var subArray, returnString="";
  for(var i=0;i<strArray.length;i++){
    subArray=strArray[i].split("");
    for(var j=0;j<subArray.length;j++){
      switch(subArray[j]){
        case "&": subArray[j]="&amp;";
                  break;
        case "<": subArray[j]="&lt;";
                  break;
        case ">": subArray[j]="&gt;";
                  break;
        default: continue;
      }      
    }
    if(i==strArray.length-1)
      returnString+=subArray.join("");
    else
      returnString+=subArray.join("")+" ";
  }
  return returnString;
}

convert('&&&');

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var strArray = str.split("");
  console.log(strArray);
  for(var i=1,j=0;i<strArray.length;i++, j++)
  {
    if(strArray[i]==strArray[i].toUpperCase() && strArray[i]!==" " && strArray[i]!=="_" && strArray[i]!=="-"){
       if(strArray[j]!==" " && strArray[j]!=="_"){
         strArray.splice(i,0," ");
         i++;
         j++;
       }
    }
  }
  str=strArray.join("").toLowerCase();
  return str.replace(/[ _]/g,"-");
}

spinalCase('This Is Spinal Tap');