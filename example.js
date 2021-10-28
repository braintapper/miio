const miio = require('./lib');

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