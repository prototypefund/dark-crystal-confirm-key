const { describe } = require('tape-plus')
const confirmKey = require('..')
const sodium = require('sodium-native')

describe('basic', (context) => {
  context('derive words from key', (assert, next) => {
    const key = randomBytes(32)
    const words = confirmKey(key)
    assert.equal(typeof words, 'string', 'returns a string')
    const words2 = confirmKey(key)
    assert.equal(words, words2, 'derives the same words a second time')
    console.log(words)
    next()
  })
})

function randomBytes (n) {
  const b = sodium.sodium_malloc(n)
  sodium.randombytes_buf(b)
  return b
}
