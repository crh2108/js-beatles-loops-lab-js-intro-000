function theBeatlesPlay(musicians, instruments) { //parameters are these two arrays
  var array = new Array(); //create empty array stored in a variable
  for (let i = 0 ; i < musicians.length; i++) { //for each element in the musicians array
    array.push(`${musicians[i]} plays ${instruments[i]}`); //takes the musician element in the ith position and corresponding instrument to create the string
  }
  return array
}

function johnLennonFacts(lennonfacts) { //parameter is this array
  var lennonfacts = new Array();
  let i = 0;
  while (i < lennonfacts.length) {
    lennonfacts.push(lennonfacts[i] + '!!!');
    i++;
  }
  return lennonfacts
}
