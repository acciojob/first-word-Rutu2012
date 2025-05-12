function firstWord(s) {
  if (!str) return ""; // handle empty string

    const spaceIndex = str.indexOf(" ");
    if (spaceIndex === -1) {
        return str; // no space found, return entire string
    }

    return str.substring(0, spaceIndex);
}
console.log(firstWord("see and stop"));
console.log(firstWord("Hello World"));
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
