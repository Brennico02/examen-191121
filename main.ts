function ABAJO_X0 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_A == 1) {
            led.plot(0, index)
            basic.pause(500)
            led.unplot(0, index)
            posX = 0
            posY = index
            arribaX0 = 0
            abajoX0 = 1
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Botón_B = 0
    Botón_A = 1
    if (Botón_A == 1) {
        if (arribaX0 == 1) {
            interceptado = punto - posY
            for (let index = 0; index <= interceptado; index++) {
                led.plot(0, index + interceptado)
                basic.pause(500)
                led.unplot(0, index + interceptado)
                posX = 0
                posY = index + interceptado
                arribaX0 = 0
                abajoX0 = 1
                izquierdaY0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            DERECHA_Y4()
            ARRIBA_X4()
            IZQUIERDA_Y0()
        } else if (derechay0 == 1) {
            interceptado = punto - posX
            for (let index = 0; index <= interceptado; index++) {
                led.plot(interceptado - index, 0)
                basic.pause(500)
                led.unplot(interceptado - index, 0)
                posX = index + interceptado
                posY = 0
                arribaX0 = 0
                abajoX0 = 0
                izquierdaY0 = 1
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            ABAJO_X0()
            DERECHA_Y4()
            ARRIBA_X4()
        } else if (abajox4 == 1) {
            interceptado = punto - posY
            for (let index = 0; index <= 4; index++) {
                led.plot(punto, interceptado - index)
                basic.pause(500)
                led.unplot(punto, interceptado - index)
                posX = punto
                posY = interceptado - index
                arribaX0 = 0
                abajoX0 = 0
                izquierdaY0 = 1
                derechay0 = 0
                arribax4 = 1
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            IZQUIERDA_Y0()
            ABAJO_X0()
            DERECHA_Y4()
        } else if (izquierday4 == 1) {
            interceptado = punto - posX
            for (let index = 0; index <= interceptado; index++) {
                led.plot(posX + index, punto)
                basic.pause(500)
                led.unplot(posX + index, punto)
                posX = posX - index
                posY = punto
                arribaX0 = 0
                abajoX0 = 0
                izquierdaY0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 1
            }
            ARRIBA_X4()
            IZQUIERDA_Y0()
            ABAJO_X0()
        }
    }
})
function ARRIBA_X4 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_A == 1) {
            led.plot(punto, punto - index)
            basic.pause(500)
            led.unplot(punto, index - index)
            posX = punto
            posY = index
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 1
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function DERECHA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_B == 1) {
            led.plot(0, index)
            basic.pause(500)
            led.unplot(0, index)
            posX = index
            posY = 0
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 1
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function ARRIBA_X0 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_B == 1) {
            led.plot(0, punto - index)
            basic.pause(500)
            led.unplot(0, punto - index)
            posX = 0
            posY = punto - index
            arribaX0 = 1
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function IZQUIERDA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_B == 1) {
            led.plot(punto - index, punto)
            basic.pause(500)
            led.unplot(punto - index, punto)
            posX = punto - index
            posY = punto
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 1
            derechay4 = 0
        }
    }
}
input.onButtonPressed(Button.B, function () {
    Botón_B = 1
    Botón_A = 0
    if (Botón_B == 1) {
        if (abajoX0 == 1) {
            interceptado = posY
            for (let index = 0; index <= interceptado; index++) {
                led.plot(0, posY - index)
                basic.pause(500)
                led.unplot(0, posY - index)
                posX = 0
                posY = posY - index
                arribaX0 = 1
                abajoX0 = 0
                izquierdaY0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            DERECHA_Y0()
            ABAJO_X4()
            IZQUIERDA_Y4()
        } else if (izquierdaY0 == 1) {
            interceptado = punto - posX
            for (let index = 0; index <= interceptado; index++) {
                led.plot(posX + index, 0)
                basic.pause(500)
                led.unplot(posX + index, 0)
                posX = posX + index
                posY = 0
                arribaX0 = 0
                abajoX0 = 0
                izquierdaY0 = 0
                derechay0 = 1
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            ABAJO_X4()
            IZQUIERDA_Y4()
            ARRIBA_X0()
        } else if (arribax4 == 1) {
            interceptado = punto - posY
            for (let index = 0; index <= 4; index++) {
                led.plot(punto, posY + index)
                basic.pause(500)
                led.unplot(punto, posY + index)
                posX = punto
                posY = 0
                arribaX0 = posY + index
                abajoX0 = 0
                izquierdaY0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 1
                izquierday4 = 0
                derechay4 = 0
            }
            IZQUIERDA_Y4()
            ARRIBA_X0()
            DERECHA_Y0()
        } else if (derechay4 == 1) {
            interceptado = posX
            for (let index = 0; index <= interceptado; index++) {
                led.plot(posX - index, punto)
                basic.pause(500)
                led.unplot(posX - index, punto)
                posX = posX - index
                posY = punto
                arribaX0 = 0
                abajoX0 = 0
                izquierdaY0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 1
                derechay4 = 0
            }
            ARRIBA_X0()
            DERECHA_Y0()
            ABAJO_X4()
        }
    }
})
function ABAJO_X4 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_B == 1) {
            led.plot(punto, index)
            basic.pause(500)
            led.unplot(punto, index)
            posX = punto
            posY = index
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 1
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function IZQUIERDA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_A == 1) {
            led.plot(0, punto - index)
            basic.pause(500)
            led.unplot(0, punto - index)
            posX = punto - index
            posY = 0
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 1
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function DERECHA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        if (Botón_A == 1) {
            led.plot(index, punto)
            basic.pause(500)
            led.unplot(index, punto)
            posX = index
            posY = punto
            arribaX0 = 0
            abajoX0 = 0
            izquierdaY0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 1
        }
    }
}
let interceptado = 0
let posY = 0
let posX = 0
let derechay4 = 0
let izquierday4 = 0
let arribax4 = 0
let abajox4 = 0
let izquierdaY0 = 0
let derechay0 = 0
let abajoX0 = 0
let arribaX0 = 0
let punto = 0
let Botón_B = 0
let Botón_A = 0
Botón_A = 0
Botón_B = 1
punto = 4
arribaX0 = 1
abajoX0 = 0
derechay0 = 0
izquierdaY0 = 0
abajox4 = 0
arribax4 = 0
izquierday4 = 0
derechay4 = 0
ARRIBA_X0()
DERECHA_Y0()
ABAJO_X4()
IZQUIERDA_Y4()
