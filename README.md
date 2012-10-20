# ar-drone-png-stream

#### *HTTP png stream from nodecopter using `multipart/x-mixed-replace`.*

Usage:

`client` should be an instance of [`ar-drone`](https://github.com/felixge/node-ar-drone)

	var arDrone = require('ar-drone');
	var client  = arDrone.createClient();
	
    require('ar-drone-png-stream')(client, { port: 8000 });
    
