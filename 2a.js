// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey to hex
const privKeyHex = wallet.getPrivateKeyString();
console.log("privKey:", privKeyHex);

// pubKey
const pubKeyHex = wallet.getPublicKeyString();
console.log("pubKey:", pubKeyHex);