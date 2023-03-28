let Temps = 0
let pasos = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Temps)
    Temps += 1
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
    basic.showNumber(pasos)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (pasos == 1000) {
        music.playMelody("F A E A - C5 E A ", 120)
    }
})
