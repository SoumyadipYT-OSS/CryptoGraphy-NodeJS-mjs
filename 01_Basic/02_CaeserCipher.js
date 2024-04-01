function homeWork_CaesarCipher(text, shift) {

    var res = '';

    for (var i=0; i<text.length; i++) {
        var charCode = text.charCodeAt(i);

        if (charCode >= 65  &&  charCode <= 90) {
            // Uppercase letters
            res += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97  &&  charCode <= 122) {
            // Lowercase letters
            res += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            // Non-alphabetic characters, don't shift them
            res += text.charAt(i);
        }
    }

    return res;
}


// User input sharing plain text
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the text: ', (text) => {
    rl.question('Enter the shift: ', (shift) => {
        shift = parseInt(shift);
        console.log(homeWork_CaesarCipher(text, shift));
        rl.close();
    });
});