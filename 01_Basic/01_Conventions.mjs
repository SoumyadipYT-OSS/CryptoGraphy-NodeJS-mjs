/*
    Here is an example: We use the decipher object, just like we did with the cipher object in the previous
    method, invoking decipher. Update with the ciphertext to decrypt and use decipher.final when we're done.
*/

const crypto = require('crypto')
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const bobPublicKeyPem = bobKeyPair.publicKey.export(
    {type: 'spki', format: 'pem'}
)
    
const aliceSharedSecret = crypto.diffieHellman({
    publicKey: crypto.createPublicKey(bobPublicKeyPem),
    privateKey: aliceKeyPair.privateKey
})