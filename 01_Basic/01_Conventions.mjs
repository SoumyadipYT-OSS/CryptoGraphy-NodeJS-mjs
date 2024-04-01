/*
    Here is an example: We use the decipher object, just like we did with the cipher object in the previous
    method, invoking decipher. Update with the ciphertext to decrypt and use decipher.final when we're done.
*/
import crypto from 'crypto';

// Key and IV setup
// AES-256-CBC uses 32 byte keys and 16 byte IVs
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// The plain text message to be encrypted
const plainText = "This is a plain text message!";

// Create a cipher object ("aes-256-cbc" this algorithm is used for encryption. This works as a block cipher)
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

let encrypted = cipher.update(plainText, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted: ', encrypted);