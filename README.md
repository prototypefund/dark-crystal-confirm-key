
# Confirm key

Generate a short mnemonic from a key, to help with verbally confirming two keys are the same.

## API

```
const confirmKey = requre('.')
const mnemonic = confirmKey(key, options)
```

Generate a mnemonic.  Key is a buffer of any length, options is an optional object which may include:
- `language` - one of 'chinese_simplified', 'chinese_traditional', 'english', 'french', 'italian', 'japanese', 'korean', 'spanish'
- `wordlist` - a custom wordlist to replace the one from `bip39`. Should be an array of 2048 words.
- `numWords` - the number of words to derive (default: 2) 

## Example

```
const confirmKey = require('.')
const crypto = require('crypto')

const key = crypto.randomBytes(32)
console.log(confirmKey(key)) // machine bag 
```
