import { createApp, ref } from "vue";

createApp({
    setup() {
        const alphabets = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        const alphabetsUpp = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        const alphabetsLow = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        const nSteps = ref(5);
        const inp_mess = ref("Привет АБВЭЮЯ абвэюя");
        const outCiphMessage = ref("dd");
        const inpToDeCipherMess = ref("Фхнжйч ЕЁЖВГД еёжвгд");
        const outDeCipherMess = ref("dd");

        function getCipher(alphabets_t = alphabets, shift = 3) {
            const arr = alphabets_t.split('')
            return arr.reduce((accum, character, index) => {
                let result = [...accum]
                let tIndex = (index + shift) % arr.length
                result[index] = arr[tIndex]
                return result;
            }, [])
        }

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

        const encryptOnChange = () => {
            outCiphMessage.value = encryptString(alphabetsUpp, inp_mess.value, nSteps.value);
            outCiphMessage.value = encryptString(alphabetsLow, outCiphMessage.value, nSteps.value);
            // console.log(outCiphMessage)

        }


        const decryptOnChange = () => {
            outDeCipherMess.value = decryptString(alphabetsUpp, inpToDeCipherMess.value, nSteps.value);
            outDeCipherMess.value = decryptString(alphabetsLow, outDeCipherMess.value, nSteps.value);
            // console.log(outCiphMessage)

        }

        encryptOnChange()
        decryptOnChange()

        return {
            count: ref(0),
            inp_mess,
            nSteps,
            encryptString,
            alphabetsLow,
            alphabetsUpp,
            outCiphMessage,
            encryptOnChange,
            decryptOnChange,
            inpToDeCipherMess,
            outDeCipherMess
        };
    }
}).mount("#app");
