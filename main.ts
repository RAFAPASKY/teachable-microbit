bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    MENSAJE = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (MENSAJE == "ARRIBA") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (MENSAJE == "ABAJO") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (MENSAJE == "DERECHA") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (MENSAJE == "IZQUIERDA") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let MENSAJE = ""
bluetooth.startUartService()
basic.showLeds(`
    . # # # .
    . # . # .
    . # # . .
    . # . # .
    . # # # .
    `)
basic.forever(function () {
	
})
