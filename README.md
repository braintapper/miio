
# (Only) Added QingPing Air Monitor Lite with Miot API

This fork of `@rifat/miio` adds support for the QingPing Air Monitor Lite (`cgllc.airm.cgdn1`).

## Installation

To install into your project:

```
npm install @braintapper/miio
```

To install globally for access to the command line tool:

```
npm install -g @braintapper/miio
```


## Sample Code

Prerequisites:

1. IP address of your QingPing Air Monitor Lite `{ip}`
2. Device token for your QingPing Air Monitor Lite `{device token}`


### How to get your device token

To get the token, you need to set the device up with the Mi Home application (and register for an account). Make sure you set your region to Chinese Mainland.

Once you've set it up with the Mi Home application, you need use [Xiaomi-cloud-tokens-extractor](https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor) to get your tokens. You will need to enter your Mi account username and password to get the token.


### test.js
``` 
const miio = require('@braintapper/miio');
miio.device({ address: '{ip}', token: '{device token}' })
  .then( async function(device) {
    console.log('Connected to', device);
    output = await device.state();
    console.log(output);
    await device.destroy(); // disconnect
  })
  .catch(function (err) {
    console.log("ERROR!");
    console.log(err);
    
  })
```

### Sample Output

```
> node test

Connected to MiioDevice {
  model=cgllc.airm.cgdn1,
  types=miio:air-purifier, sensor, miio, air-monitor,
  capabilities=voltage, battery-level, carbon-dioxide, pm10, pm2.5, relative-humidity, temperature, state
}
{
  batteryLevel: 100,
  temperature: Temperature { value: 22.2, unit: 'C' },
  relativeHumidity: 58,
  'pm2.5': 0,
  pm10: 0,
  carbonDioxide: 905,
  voltage: Voltage { value: 4139, unit: 'V' }
}
```


# Further Information

For further documentation, go to aholstenson [`miio`]([Github](https://github.com/aholstenson/miio)
repository.

# Attributions

Fork of: [`@rifat/miio`](https://www.npmjs.com/package/@rifat/miio) [Github](https://github.com/torifat/miio)
...which is a fork of github9984's [`miio`](https://github.com/github9984/miio)
...which is a fork of kingkong123's [`miio`](https://github.com/kingkong123/miio)
...which is a fork of aholstenson's [`miio`](https://github.com/aholstenson/miio)

QingPing details from rytilahti's [`python-miio`][(https://github.com/rytilahti/python-miio](https://github.com/rytilahti/python-miio/blob/324422436d7075a9fba0d3686cc5c63009db82d7/miio/airqualitymonitor_miot.py))



