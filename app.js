How to make encryption and decryption in NodeJS. encryption and decryption using AES256.

A NodeJS module have inbuilt “CRYPTO” module for AES-256 encryption with random IV (initialization vectors).

So Let’s start, How to make encryption and decryption in NodeJS. encryption and decryption using AES256.

How to make encryption and decryption in NodeJS. encryption and decryption using AES256.

npm i aes256

We can do encryption and decryption using two mathod.
1. using static encryption and decryption
2. using AesCipher.

Need to initialise in app.js ( as per your requirment you can include. )
var aes256 = require(‘aes256’);

1. Example using static encryption and decryption.

var key = 'my_secret_key';  // better way to store in config file and call here.
var plaintext = 'my plaintext message';
 
var encrypted = aes256.encrypt(key, plaintext);
var decrypted = aes256.decrypt(key, encrypted);

2. Example using AesCipher

var key = 'my_secret_key';  // better way to store in config file and call here.
var plaintext = 'my plaintext message';
 
var cipher = aes256.createCipher(key);
 
var encrypted = cipher.encrypt(plaintext);
var decrypted = cipher.decrypt(encrypted);

