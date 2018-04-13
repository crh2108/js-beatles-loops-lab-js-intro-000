//Beatles for loop
function theBeatlesPlay(musicians, instruments) { //parameters are these two arrays
  var array = new Array(); //create empty array stored in a variable
  for (let i = 0 ; i < musicians.length; i++) { //for each element in the musicians array
    array.push(`${musicians[i]} plays ${instruments[i]}`); //takes the musician element in the ith position and corresponding instrument to create the string
  }
  return array
}

//Beatles while loop
function johnLennonFacts(lennonfacts) { //parameter is this array
  let i = 0; //set the index
  while (i < lennonfacts.length) { //for each element in array
    lennonfacts[i] = lennonfacts[i] + '!!!'; //update the value for that element to include '!!!'
    i++; //increase index til i = length
  }
  return lennonfacts;
}

//Beatles dowhile loop
function iLoveTheBeatles(n) { //parameter is a number
  var lovearray = new Array(); //create a new empty array
  do {
    lovearray.push('I love the Beatles!') //add this string to array
    n++ //and increment the number
  } while (n < 15) //repeat the do code, adding another string element, until n=15
  return lovearray
}
