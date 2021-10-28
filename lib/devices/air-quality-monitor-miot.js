'use strict';

const { AirMonitor } = require('abstract-things/climate');
const MiotApi = require('../iotDevice');



const { 
	Temperature,
	Humidity,
	AQI,
  PM10,
  CO2,
  BatteryLevel,
  Voltage,
  State
 } = require('./capabilities/sensor');

/**
 * Abstraction over a Mi Air Monitor.
 *
 * QingPing Air Monitor Lite support... sort of.
 *
 */
module.exports = class extends AirMonitor.with(
  MiotApi,

  Temperature,
	Temperature,
	Humidity,
	AQI,
  PM10,
  CO2,
  BatteryLevel,
  Voltage,
  State
) {
	static get type() {
		return 'miio:air-purifier';
	}

	constructor(options) {
		super(options);
		const { id } = this.handle.api;

    /* device auto off time in minutes 
    NOT IMPLEMENTED
    Unplugged = 0  # Not mentioned in the spec
    Charging = 1
    NotCharging = 2
    NotChargable = 3
    
    */
		this.defineProperty(
			{ did: `${id}`, siid: 9, piid: 6 },
			{
				name: 'power',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 9 && piid === 6) {
						return v.value;
					}
				}
			}
		);

    /* screen auto off time in seconds 
    NOT IMPLEMENTED
    Every1Second = 1
    Every1Minute = 60
    Every5Minutes = 300
    Every10Minutes = 600
    NotSet = 0
     */
		this.defineProperty(
			{ did: `${id}`, siid: 9, piid: 5 },
			{
				name: 'screen',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 9 && piid === 5) {
						return v.value;
					}
				}
			}
		);


		// Sensor value for Temperature capability C
		this.defineProperty(
			{ did: `${id}`, siid: 3, piid: 7 },
			{
				name: 'temperature',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 3 && piid === 7) {
						return v.value;
					}
				}
			}
		);

		// Sensor value for RelativeHumidity capability %
		this.defineProperty(
			{ did: `${id}`, siid: 3, piid: 1 },
			{
				name: 'humidity',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 3 && piid === 1) {
						return v.value;
					}
				}
			}
		);

		// Sensor value used for AQI (PM2.5) capability μg/m³
		this.defineProperty(
			{ did: `${id}`, siid: 3, piid: 4 },
			{
				name: 'pm2_5',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 3 && piid === 4) {
						return v.value;
					}
				}
			}
		);
		// Sensor value used for AQI (PM10) capability μg/m³
		this.defineProperty(
			{ did: `${id}`, siid: 3, piid: 5 },
			{
				name: 'pm10',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 3 && piid === 5) {
						return v.value;
					}
				}
			}
		);
		// Sensor value used for CO2 capability μg/m³
		this.defineProperty(
			{ did: `${id}`, siid: 3, piid: 8 },
			{
				name: 'carbonDioxide',
				mapper: v => {
					const { siid, piid } = v;
          console.log("map");
					if (siid === 3 && piid === 8) {
						return v.value;
					}
				}
			}
		);

		// Battery charge state %
		this.defineProperty(
			{ did: `${id}`, siid: 4, piid: 1 },
			{
				name: 'batteryLevel',
				mapper: v => {
					const { siid, piid } = v;
          console.log("map");
					if (siid === 4 && piid === 1) {
						return v.value;
					}
				}
			}
		);

		// Charging voltage in mA
		this.defineProperty(
			{ did: `${id}`, siid: 4, piid: 3 },
			{
				name: 'voltage',
				mapper: v => {
					const { siid, piid } = v;
          console.log("map");
					if (siid === 4 && piid === 3) {
						return v.value;
					}
				}
			}
		);


		// Start Time

    /*
    NOT IMPLEMENTED
    "start_time": {"siid": 9, "piid": 2},  # [0, 2147483647] step 1

    */
		this.defineProperty(
			{ did: `${id}`, siid: 9, piid: 2 },
			{
				name: 'start_time',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 9 && piid === 2) {
						return v.value;
					}
				}
			}
		);


		// End time
    /*  
    NOT IMPLEMENTED
    "end_time": {"siid": 9, "piid": 3},  # [0, 2147483647] step 1
    */    
		this.defineProperty(
			{ did: `${id}`, siid: 9, piid: 3 },
			{
				name: 'end_time',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 9 && piid === 3) {
						return v.value;
					}
				}
			}
		);

		// Charging State
    /*
    NOT IMPLEMENTED
    Unplugged = 0  # Not mentioned in the spec
    Charging = 1
    NotCharging = 2
    NotChargable = 3

    */
		this.defineProperty(
			{ did: `${id}`, siid: 4, piid: 2 },
			{
				name: 'charging_state',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 4 && piid === 2) {
						return v.value;
					}
				}
			}
		);


		// Temperature unit
    /*
    NOT IMPLEMENTED
    Celsius = "c"
    Fahrenheit = "f"
    */
		this.defineProperty(
			{ did: `${id}`, siid: 4, piid: 2 },
			{
				name: 'temperature_unit',
				mapper: v => {
					const { siid, piid } = v;

					if (siid === 9 && piid === 7) {
						return v.value;
					}
				}
			}
		);

	}



};
