const alphabets = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const alphabetsUpp = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const alphabetsLow = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

// Cipher Get
function getCipher(alphabets_t = alphabets, shift = 3) {
    const arr = alphabets_t.split('')
    return arr.reduce((accum, character, index) => {
        let result = [...accum]
        let tIndex = (index + shift) % arr.length
        result[index] = arr[tIndex]
        return result;
    }, [])
}

// Encrypt 
let stringToEnc = 'аБв ГЯя'
console.log('Plain Text -', stringToEnc)

function encryptString(alphabets_t, stringToEnc, shift = 3) {
    let cipheredAlphabets = getCipher(alphabets_t, shift)
    const arr = alphabets_t.split('')
    let encryptedStr = stringToEnc
        .split('')
        .map(function (item, ind) {
            let indexInAlphabets = arr.findIndex(c => item == c)
            if (indexInAlphabets !== -1) {
                return (cipheredAlphabets[indexInAlphabets])
            }
            else {
                return item
            }
        })
    return encryptedStr.join('')
}

function decryptString(alphabets_t, stringToDec, shift = -3) {
    let cipheredAlphabets = getCipher(alphabets_t, shift)
    const arr = alphabets_t.split('')
    let decryptedStr = stringToDec
        .split('')
        .map(function (item, ind) {
            let indexInAlphabets = cipheredAlphabets.findIndex(c => item == c)
            if (indexInAlphabets !== -1) {
                return (arr[indexInAlphabets])
            }
            else {
                return item
            }
        })
    return decryptedStr.join('')
}

let encryptedText = encryptString(alphabetsUpp, stringToEnc, 3)
encryptedText = encryptString(alphabetsLow, encryptedText, 3)
console.log('encrypted text - ', encryptedText)

let decryptedText = decryptString(alphabetsUpp, encryptedText, 3)
decryptedText = decryptString(alphabetsLow, decryptedText, 3)

console.log('decrypted text - ', decryptedText)
