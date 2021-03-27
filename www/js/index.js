/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready




// const cave = document.querySelector('cave-card')
// const house = document.querySelector('house-card')
// const casino = document.querySelector('casino-card')
// const cards = document.querySelector('cardcontainer')
// const template = document.getElementById('template').content
// const fragment = document.createDocumentFragment()
// const farmBtn = document.getElementById('farm-btn')
// const divActividades = document.getElementById('actividades')
// // const fechaAhora = Date.now()
// const tiempoTranscurrido = Date.now();
// const hoy = new Date(tiempoTranscurrido);
// const displayOro = document.getElementById('cantidad-gold')

// let actividades = {}



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const oroTotal = 0

// GRANJA
$(function () {
    var farm = document.getElementById('farm-card');
    // INICIALIZACIÓN DE HAMMER 
    var hammertimeUp = new Hammer.Manager(farm, {
        recognizers: [
            [Hammer.Swipe, {
                direction: Hammer.DIRECTION_UP
            }]
        ]
    });
    // USO DEL HAMMER 
    hammertimeUp.on("swipe", function (ev) {

        var oroFarm = random(10, 20);
        $('#actividades').append(" * Recolectaste " + oroFarm + " monedas desde Farm! <br>");

        oroTotal = oroFarm
        $('span').textContent = oroTotal
    });


})

// CAVE
$(function () {
    var cave = document.getElementById('cave-card')

    var hammerCave = new Hammer.Manager(cave, {
        recognizers: [
            [Hammer.Swipe, {
                direction: Hammer.DIRECTION_UP
            }]
        ]
    })
    hammerCave.on('swipe', function (e) {
        var oroCave = random(2, 10)
        $('#actividades').append('* Recolectaste ' + oroCave + ' monedas desde Cave! <br>')
        $('#cantidad-gold').val(oroCave)
        oroTotal += oroCave
        $('span').textContent = oroTotal
    })
})
// HOUSE
$(function () {
    var house = document.getElementById('house-card')

    var hammerHouse = new Hammer.Manager(house, {
        recognizers: [
            [Hammer.Swipe, {
                direction: Hammer.DIRECTION_UP
            }]
        ]
    })
    hammerHouse.on('swipe', function (e) {
        var oroHouse = random(2, 5)
        $('#actividades').append('* Recolectaste ' + oroHouse + ' monedas desde House! <br>')
        $('#cantidad-gold').val(oroHouse)
        oroTotal += oroHouse
        $('span').textContent = oroTotal
    })
})
// CASINO
$(function () {
    var casino = document.getElementById('casino-card')

    var hammerCasino = new Hammer.Manager(casino, {
        recognizers: [
            [Hammer.Swipe, {
                direction: Hammer.DIRECTION_UP
            }]
        ]
    })
    hammerCasino.on('swipe', function (e) {
        const index = [0, 1, -1]
        var oroCasino = random(0, 50)



        oroCasino = oroCasino * index[(Math.floor(Math.random() * 2) + 1)]

        if (oroCasino > 0) {
            $('#actividades').append('* Recolectaste ' + oroCasino + ' monedas desde Casino <br>')
            return
        } else if (oroCasino < 0) {
            $('#actividades').append('* Perdiste ' + oroCasino + ' monedas desde Casino <br>')
            return
        } else if (oroCasino == 0) {
            $('#actividades').append('* El casino hoy no pagó <br>')
            return
        }
        oroTotal += oroCasino
        $('span').textContent = oroTotal
    })
})

console.log(oroTotal)