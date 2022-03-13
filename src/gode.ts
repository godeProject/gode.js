const kedmanee = ['ๅ', '/', '-', 'ภ', 'ถ', 'ุ', 'ึ', 'ค', 'ต', 'จ', 'ข', 'ช', '+', '๑', '๒', '๓', '๔', 'ู', '฿', '๕', '๖', '๗', '๘', '๙', 'ๆ', 'ไ', 'ำ', 'พ', 'ะ', 'ั', 'ี', 'ร', 'น', 'ย', 'บ', 'ล', '๐', '"', 'ฎ', 'ฑ', 'ธ', 'ํ', 'ี', 'ณ', 'ฯ', 'ญ', 'ฐ', ',', 'ฟ', 'ห', 'ก', 'ด', 'เ', '้', '่', 'า', 'ส', 'ว', 'ง', 'ฤ', 'ฆ', 'ฏ', 'โ', 'ฌ', '็', '๋', 'ษ', 'ศ', 'ซ', '.', 'ผ', 'ป', 'แ', 'อ', 'ิ', 'ื', 'ท', 'ม', 'ใ', 'ฝ', '(', ')', 'ฉ', 'ฮ', 'ฺ', '์', '?', 'ฒ', 'ฬ', 'ฦ']
const qwerty = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ",", '.', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']

export function convert(message: string) {
    let messageArray = [...message]
    let messageLength = messageArray.length
    let ans = []
    let i = 0
    while (i < messageLength) {
        if (messageArray[i] === ',') {
            if (qwerty.includes(messageArray[i - 1])) { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
            else if (kedmanee.includes(messageArray[i - 1])) { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
            else { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
        }
        else if (messageArray[i] === '.') {
            if (kedmanee.includes(messageArray[i - 1])) { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
            else if (qwerty.includes(messageArray[i - 1])) { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
            else { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
        }
        else if (messageArray[i] === '-') {
            if (messageArray[i - 1] === " " && messageArray[i + 1] === "") { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
            else if (kedmanee.includes(messageArray[i - 1])) { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
            else if (qwerty.includes(messageArray[i - 1])) { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
            else { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
        }
        else if (kedmanee.includes(messageArray[i])) { ans.push(qwerty[kedmanee.indexOf(messageArray[i])]) }
        else if (qwerty.includes(messageArray[i])) { ans.push(kedmanee[qwerty.indexOf(messageArray[i])]) }
        else if (messageArray[i] === " ") { ans.push(" ") }
        else { ans.push(messageArray[i]) }
        i++
    }
    let ansString = ans.join('')
    return ansString
}

export default { convert }