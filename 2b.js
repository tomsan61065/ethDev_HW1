// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();

// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey);

// step 2:  public_key_hash = Keccak-256(public_key)
const public_key_hash = keccak256(pubKey);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
let address = "0x" + public_key_hash.substring(public_key_hash.length - 40, public_key_hash.length);

console.log("address:", address);
//console.log("address:", wallet.getAddressString());