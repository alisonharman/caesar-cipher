

const shiftCharacter = function(plaintext, key) {
    // do not shift if letter is blank" "
    if (plaintext === " ") {
      return plaintext;
    }

    // ensure letter is lowerCase as algorithm only works with lowerCase
    plaintext = plaintext.toLowerCase();

    // need to check if key and letter will take it outside the range of the lower-case unicode alphabet
    let index = plaintext.charCodeAt(0);
    let newIndex = index + key;
    // wraps index if larger than 122 (which equals z)
    if (newIndex > 122) {
      newIndex = newIndex - 122 + 96;
    }
    // wraps index if smaller than 97 (which equals a)
    if (newIndex < 97) {
      newIndex =  122 - (96 - newIndex); 
    }

    const char = String.fromCharCode(newIndex)
    return char;
  };
  
  const encrypt = function(plaintext, key) {
    let encryptedString = "";
    for (let c of plaintext) {
      const newChar = shiftCharacter(c, key);
      encryptedString += newChar;
    }
    return encryptedString;
  }

  module.exports = { encrypt };