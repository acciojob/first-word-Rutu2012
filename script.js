function firstWord(s) {
  if (!str) return ""; 

    const spaceIndex = str.indexOf(" ");
    if (spaceIndex === -1) {
        return str; 
    }

    return str.substring(0, spaceIndex);
}
console.log(firstWord("see and stop"));
console.log(firstWord("Hello World"));


// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
