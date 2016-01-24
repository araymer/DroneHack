var net = require('net');         
  
  var irFlags;
  
  var server = net.createServer(function(c) { //'connection' listener
      console.log('server connected');   
      c.on('connection', function() {  
    });
    serialPort.on('data', function(data) {
	     console.log(data);
	     data = data + " ";
    	if( !( /{.*}/.test(data) ) )
    		return;
    	var data = data.replace("L", "\"L\"").replace("R", "\"R\"");;
    	var parsed = JSON.parse(data);
    	if(parsed.L || parsed.R) {
    		c.write(data);
    	}
    });                 
    c.on('end', function() {              
    	console.log('server disconnected');
    });                  
    c.pipe(c);
    });
                                      
                                      
                                      
                                                                                             
   server.listen(9500, function() { //'listening' listener
      console.log('server bound');
   });
