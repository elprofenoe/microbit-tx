input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.House)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
})
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(12)
basic.forever(function () {
	
})
