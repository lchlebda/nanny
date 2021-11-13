radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 90 && !(isCrying)) {
        isCrying = true
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
        }
        basic.clearScreen()
        isCrying = false
    }
})
input.onSound(DetectedSound.Quiet, function () {
    radio.sendNumber(90)
})
let isCrying = false
radio.setGroup(1)
isCrying = false
