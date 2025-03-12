import Airplane from './airplane.js';

(function () {

    function displayFuelCapacity() {
        Airplane.availableAirplanes.forEach(function (element) {
            console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
        });
    }

    displayFuelCapacity();
})()