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


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// const hammer2 = new Hammer(squares[1], {});
// hammer2.on('swipe', function(ev) {
//     squares[1].innerHTML = ev.distance;
// })

const farm = document.querySelector('farm-card')
const cave = document.querySelector('cave-card')
const house = document.querySelector('house-card')
const casino = document.querySelector('casino-card')
const cards = document.querySelector('cardcontainer')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const oroTotal = 0
const farmBtn = document.getElementById('farm-btn')
const divActividades = document.getElementById('actividades')
// const fechaAhora = Date.now()
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
const displayOro = document.getElementById('cantidad-gold')

let actividades = {}


// var hammerFarm = new Hammer(farm);
// hammerFarm.on('pan swipe', function (ev) {
//     console.log('hay pan');
//     setActividad(ev)
// });

function getRandomFarm() { return Math.floor(Math.random() * 10) + 10 }
console.log(getRandomFarm())

function getRandomCave() { return Math.floor(Math.random() * 10) + 2 }

farmBtn.addEventListener('click', e => {
    setActividad(e)
})

const setActividad = (e) => {

    actividad = {
        id: Date.now(),
        oro: getRandomFarm(),
        fecha: hoy
    }
    actividades[actividad.id] = actividad
    setTotal(actividad.oro)
    imprimirActividades()
}

function imprimirActividades() {
    //vacio el divActividades
    divActividades.innerHTML = ''
    //instancio el texto que aparecerá en actividades
    let texto = ''
    Object.values(actividades).forEach(actividad => {
        let clone = template.cloneNode(true);
        if (actividad.oro > 0) {
            texto = 'Earns ' + actividad.oro + ' from the farm ' + hoy
        }
        clone.querySelector('p').textContent = texto
        console.log(texto)

        fragment.appendChild(clone)
    })
    divActividades.appendChild(fragment)

}

function setTotal(oro) {
    oroTotal += oro
    imprimirOro()
}

function imprimirOro() {
    displayOro.textContent = oroTotal
}
