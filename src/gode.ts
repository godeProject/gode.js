import * as layout from './layout'

export function qwkm(message: string) {
    let messageArray = [...message]
    let messageLength = messageArray.length
    let ans = []
    let i = 0
    while (i < messageLength) {
        if (messageArray[i] === ',') {
            if (layout.qwerty.includes(messageArray[i - 1])) {
                ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
            }
            else if (layout.kedmanee.includes(messageArray[i - 1])) {
                ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
            }
            else {
                ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
            }
        }
        else if (messageArray[i] === '.') {
            if (layout.kedmanee.includes(messageArray[i - 1])) {
                ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
            }
            else if (layout.qwerty.includes(messageArray[i - 1])) {
                ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
            }
            else {
                ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
            }
        }
        else if (messageArray[i] === '-') {
            if (messageArray[i - 1] === " " && messageArray[i + 1] === "") {
                ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
            }
            else if (layout.kedmanee.includes(messageArray[i - 1])) {
                ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
            }
            else if (layout.qwerty.includes(messageArray[i - 1])) {
                ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
            }
            else {
                ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
            }
        }
        else if (layout.kedmanee.includes(messageArray[i])) {
            ans.push(layout.qwerty[layout.kedmanee.indexOf(messageArray[i])])
        }
        else if (layout.qwerty.includes(messageArray[i])) {
            ans.push(layout.kedmanee[layout.qwerty.indexOf(messageArray[i])])
        }
        else if (messageArray[i] === " ") {
            ans.push(" ")
        }
        else {
            ans.push(messageArray[i])
        }
        i++
    }
    let ansString = ans.join('')
    return ansString
}

export function qwmn(message: string) {
    let messageArray = [...message]
    let messageLength = messageArray.length
    let ans = []
    let i = 0
    while (i < messageLength) {
        if (layout.manoonchai.includes(messageArray[i])) {
            ans.push(layout.qwerty[layout.manoonchai.indexOf(messageArray[i])])
        }
        else if (layout.qwerty.includes(messageArray[i])) {
            ans.push(layout.manoonchai[layout.qwerty.indexOf(messageArray[i])])
        }
        else if (messageArray[i] === " ") {
            ans.push(" ")
        }
        else {
            ans.push(messageArray[i])
        }
        i++
    }
    let ansString = ans.join('')
    return ansString
}

export default { qwkm, qwmn }