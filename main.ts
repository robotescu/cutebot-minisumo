let sonar = 0
basic.pause(5000)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    // senzor < 10 -> a detectat oponent si impinge pana la linie
    // 
    // senzor >= 10 -> se invarte sa caute oponent
    if (sonar >= 2 && sonar < 10) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.forward()
        }
    } else if (sonar >= 10) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) && sonar >= 10) {
            if (Math.randomBoolean()) {
                cuteBot.motors(100, 50)
            } else {
                cuteBot.motors(50, 100)
            }
            basic.pause(100)
        }
    }
    // a gasit linia si se invarte la 180 grade
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(100, -100)
        basic.pause(1000)
    }
})
