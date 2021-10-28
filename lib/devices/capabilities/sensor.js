'use strict';

const { Thing } = require('abstract-things');
const {
	Temperature,
	RelativeHumidity,
	PM2_5,
  PM10,
	Illuminance,
	AtmosphericPressure,
	PowerLoad,
	PowerConsumed,
  CarbonDioxide,
  Voltage
} = require('abstract-things/sensors');

const BatteryLevel = require('abstract-things/common/battery-level.js');
const State = require('abstract-things/common/state.js');

function bind(Type, updateName, property) {
	return Thing.mixin(Parent => class extends Parent.with(Type) {
		propertyUpdated(key, value) {
			if(key === property) {
				this[updateName](value);
			}

			super.propertyUpdated(key, value);
		}
	});
}

module.exports.Temperature = bind(Temperature, 'updateTemperature', 'temperature');
module.exports.Humidity = bind(RelativeHumidity, 'updateRelativeHumidity', 'humidity');
module.exports.Illuminance = bind(Illuminance, 'updateIlluminance', 'illuminance');
module.exports.CO2 = bind(CarbonDioxide, 'updateCarbonDioxide', 'carbonDioxide');
module.exports.AQI = bind(PM2_5, 'updatePM2_5', 'pm2_5');
module.exports.PM10 = bind(PM10, 'updatePM10', 'pm10');


module.exports.AtmosphericPressure = bind(AtmosphericPressure, 'updateAtmosphericPressure', 'atmosphericPressure');
module.exports.PowerLoad = bind(PowerLoad, 'updatePowerLoad', 'powerLoad');
module.exports.PowerConsumed = bind(PowerConsumed, 'updatePowerConsumed', 'powerConsumed');

module.exports.BatteryLevel = bind(BatteryLevel, 'updateBatteryLevel', 'batteryLevel');
module.exports.Voltage = bind(Voltage, 'updateVoltage', 'voltage');

module.exports.State = bind(State, 'updateState', 'State');

/**
 * Setup sensor support for a device.
 */
function mixin(device, options) {
	if(device.capabilities.indexOf('sensor') < 0) {
		device.capabilities.push('sensor');
	}

	device.capabilities.push(options.name);
	Object.defineProperty(device, options.name, {
		get: function() {
			return this.property(options.name);
		}
	});
}

module.exports.extend = mixin;
