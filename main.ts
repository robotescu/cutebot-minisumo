let sonar = 0
basic.pause(5000)
cuteBot.motors(20, -20)
basic.pause(500)
cuteBot.stopcar()
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    // senzor < 10 -> a detectat oponent si impinge pana la linie
    // 
    // senzor >= 10 -> se invarte sa caute oponent
    if (sonar >= 2 && sonar < 10) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(20, 20)
        }
    } else if (sonar >= 10) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) && sonar >= 10) {
            if (Math.randomBoolean()) {
                cuteBot.motors(30, 10)
            } else {
                cuteBot.motors(10, 30)
            }
            basic.pause(200)
            sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        }
    }
    // a gasit linia si se invarte la 180 grade
    if (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
        cuteBot.motors(20, -20)
        basic.showIcon(IconNames.Sword)
        basic.pause(1000)
    }
})
