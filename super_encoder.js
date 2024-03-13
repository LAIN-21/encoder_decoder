// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher, } = require('./encryptors.js')

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const firstEncrypt = caesarCipher(str, 6);
  const secondEncrypt = symbolCipher(firstEncrypt);
  const thirdEncrypt = reverseCipher(secondEncrypt);
  return thirdEncrypt;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const firstEncrypt = reverseCipher(str);
  const secondEncrypt = symbolCipher(firstEncrypt);
  const thirdEncrypt = caesarCipher(secondEncrypt, -6);
  return thirdEncrypt;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the code...\n> ');
process.stdin.on('data', handleInput);