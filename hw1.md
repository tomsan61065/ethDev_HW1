## 作業描述

### (20%) 1. Please compare hash function and cryptographic hash function and give an example.

Ans: 
hash function 能夠將不同資料映射成固定長度的資料 

> ex: 將 int 轉為 binary 並只取後三碼
> 9 -> 1001 -> 01
> 11 -> 1011 -> 11

cryptographic hash function 是 hash function 的一種，也有人稱作 one-way hash function，要求有下列性質
   
 1. 確定性的(Deterministic): 相同輸入給出相同輸出
 2. 能夠快速計算(Fast)
 3. 不可逆(infeasible): 不容易由已知 hash value 推出原始訊息 
 4. 隨機性(randomness): 不同輸入給出不同輸出(幾乎完全無關的輸出)(雪崩效應 avalance effect) 
 5. 避免碰撞(collision resistance): 不容易找到相同輸出的不同輸入
 
> ex: 1 跟 2 只差 1，但經過 sha256 後不但輸出不同，且兩輸出差異極大
> 1 -> sha256 -> 6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b
> 2 -> sha256 -> d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35


### (80%) 2. Peter is a noob in cryptocurrency and would like to get some Ethers. First step for him is tohave an Ethereum account. He decides to generate an account and manages the wallet himself so he canunderstand the principles behind. From the class, he knows the account is created by the following steps:

  1.	Create a keypair of private/public key
  2.	public_key = ECDSA(private_key) 
  3.	public_key_hash = Keccak-256(public_key)
  4.	address = `'0x'` + last 20 bytes of public_key_hash



### (30%) a. Can you print the private/public key with hex string representation? Please give us an example.

```javascript=
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
```
執行結果
```
$ node 2a.js
privKey: 0x7612f0a88a2029ed19641b75c1a0ec0f54e712173d2e34fd5238e0de9012b18e
pubKey: 0xc1603bc76cd78e51b4ae1c8b2ce85524ee1be42ec487d71d1d33fedb86ce7eb5947c29bb1a83bbea15dc612ce2022d842a21226314d48ba865e97cc4eaf69775
```


### (20%) b. In addition, if we don’t want to use the getAddressString() to get the address, how can we obtain the address by hashing the public key?

```javascript=
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
```
執行結果
```
$ node 2b.js
pubKey: <Buffer 20 95 39 98 44 f1 cd 57 e9 9a d3 84 9a 11 fd fe 3a 41 b0 2b d9 07 82 f8 5c 26 39 e4 d9 7c b0 91 5f d9 e7 e1 36 dd 1f 57 6b 80 aa 36 42 20 39 75 46 7f ... >
address: 0x3728af2060bc193cf29cba9642110fef1bddeb12
```


 ### (30%) c. There is a file called Keystore that is used to encrypt the private key and save in a JSON file. Can you generate a Keystore with the password "nccu"? You can find the details about Keystore below.


 ```jsonld=
{  
   "address":"5256a18d89204fdd33aa2f96c53db35b9943948a",
   "crypto":{  
      "cipher":"aes-128-ctr",
      "ciphertext":"120ba51c4301c5ae796d1b5645694982171de1f    5529d2f7babcd6e04236683be",
      "cipherparams":{  
         "iv":"0db3da6705736643e2b3d1fe2939b3b5"
      },
      "kdf":"scrypt",
      "kdfparams":{  
         "dklen":32,
         "n":262144,
         "p":1,
         "r":8,
         "salt":"73c70a97c1879f706fa58d0efc320a524dd9ef627d50706c19877be298ab3ddc"
      },
      "mac":"a5cdffda2feaf6277ce3dfe0f365f0cedf89a83a20b8dfb5e6e4    a5b78079b6c8"
   },
   "id":"fd92b66b-9cd7-4a2a-9fea-3886b01197ce",
   "version":3
}
```

## Bonus (總成績加分)

- What is HD Wallet, BIP32, BIP39 and BIP44? (+2%) 
- What is RFC 6979 for? (+2%)

> Write an article, specify detailed background and problem statement as well as the scheme on how to address the problem. And publish the article on the Medium or somewhere.

article link: https://hackmd.io/U2ZMfmW0SzWeDry4dLazeg?both