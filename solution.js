const consonantCount = (str) => {
  let consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('')
  return consonant.reduce((a, c) => a + str.includes(c), 0)
}

console.log(consonantCount('bcdfghjklmnpqrstvwxyz')) // 21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')) // 42

// ---------------- Alternate Solution ----------------

const consonantCounts = (str) => {
    let consonant = 'bcdfghjklmnpqrstvwxyz'
    let strArr = str.split('')
    let count = 0
    for (let i = 0; i < strArr.length; i++) {
        if (consonant.includes(strArr[i].toLowerCase())) {
            count++
        }
    }
    return count
}
  
  console.log(consonantCounts('bcdfghjklmnpqrstvwxyz')) // 21
  console.log(consonantCounts('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')) // 42