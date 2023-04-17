
//Sum Zero
let opposites = false

function addToZero(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
         if (array[i] + array[j] === 0){
            return opposites = true
            
    }
    }
}
}

//This function is O(n^2) due to its two nested for loops
//making multiple array checks


//Unique Characters
 const hasUniqueChars = (word) => {
    let lettersArray = []

    for (let i=0; i<word.length; i++){
        if(lettersArray.includes(word[i])){
            return false
        } else {
            lettersArray.push(word[i])
        }
    }
    return true
 }

 // This function is 0(n) as its a single for loop checking 
 //and adjusting an array. 


 //Pangram Sentence

function isPangram(string){
    string = string.toLowerCase()
    const {length} = string
    const alphabet = `abcdefghijklmnopqrstuvwxyz`
    const alphabetArray = alphabet.split(``)
    for (let i=0; i<length; i++){
        const index = alphabetArray.indexOf(string[i])
        if (index !== -1){
            alphabetArray.splice(index, 1)
        }
    }
    return !alphabetArray.length
}

console.log(isPangram(`The quick brown fox jumps over the lazy dog!`))

// This function is 0(n) because of the splice function
//increasing the time linearly depending on the length of the string

//Longest Word

function longestWord(array) {
    let word = ``
    for (let i =0; i<array.length; i++){
        if (word.length < array[i].length){
            word = array[i]
        }
    }
    return word
  }

//This function is 0(n) because of the for loop being
//dependent on the length of the inputted array