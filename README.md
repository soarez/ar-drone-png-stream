# ar-drone-png-stream

#### *HTTP png stream from nodecopter using `multipart/x-mixed-replace`.*

### Install

    npm install ar-drone-png-stream

### Usage:

`client` should be an instance of [`ar-drone`](https://github.com/felixge/node-ar-drone)

	var arDrone = require('ar-drone');
	var client  = arDrone.createClient();
	
    require('ar-drone-png-stream')(client, { port: 8000 });
    
When it is running open the browser at `http://localhost:8000` or include this HTML in a page

    <img src="localhost:8000" />