const consonantCount = (str) => {
  let consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('')
  return consonant.reduce((a, c) => a + str.includes(c), 0)
}

console.log(consonantCount('bcdfghjklmnpqrstvwxyz')) // 21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')) // 42