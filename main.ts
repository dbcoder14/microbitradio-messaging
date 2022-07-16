input.onButtonPressed(Button.A, function () {
    radio.sendString("RUN")
    basic.showString("Sent")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Let's Play")
    basic.showString("Sent")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("STOP")
    basic.showString("Sent")
})
radio.setGroup(1)
basic.forever(function () {
	
})
