radio.onReceivedString(function (receivedString) {
    if (receivedString == " ") {
        let cadena = mensaje.join("")
if (Object.keys(diccionario).indexOf(cadena) >= 0) {
            basic.showString("" + (diccionario[cadena]))
        } else {
            basic.showString("?")
        }
        mensaje = []
    } else {
        mensaje.push(receivedString)
    }
})
let mensaje: string[] = []
radio.setGroup(1)
let diccionario: { [key: string]: string } = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "": " "
}
