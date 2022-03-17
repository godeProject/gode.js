import * as layout from './layout'

class InvalidLayoutCombinationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "InvalidLayoutCombinationError"
    }
}

export type ThaLayout = ['Manoonchai', 'Kedmanee']
export type EngLayout = ['QWERTY']

/**
 * Convert between QWERTY and Kedmanee layout
 * @param {String} message Message that you want to convert
 */
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

/**
 * Convert between QWERTY and Manoonchai layout
 * @param {String} message Message that you want to convert
 */
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

/**
 * Universal-ly convert method.
 * @param {EngLayout} englayout User's English keyboard layout
 * @param {ThaLayout} thalayout User's Thai keyboard layout
 * @param {String} message Message that you want to convert
 */
export function convert(englayout: EngLayout, thalayout: ThaLayout, message: string) {
    if (thalayout.toString() === 'Manoonchai' && englayout.toString() === 'QWERTY') {
        let ans = qwmn(message)
        return ans
    }
    else if (thalayout.toString() === 'Kedmanee' && englayout.toString() === 'QWERTY') {
        let ans = qwkm(message)
        return ans
    }
    else {
        throw new InvalidLayoutCombinationError('Layout combination provided is invalid!')
    }
}

export default { qwkm, qwmn, convert }