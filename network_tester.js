var ping = require('ping');
var CronJob = require('cron').CronJob;

var IcarusIP = {'name':'icarus','value':'192.168.1.180'}
var RouterIP = {'name':'router','value':'192.168.1.1'}
var SonosIP = {'name':'sonos','value':'192.168.1.75'}
var HueIP = {'name':'hue','value':'192.168.1.13'}
var GoogleIP = {'name':'google','value':'google.com'}

var hosts = [IcarusIP, RouterIP ,SonosIP, HueIP,GoogleIP];



new CronJob('0,30 * * * * *', function() {
	var timestamp = new Date().toLocaleString()
  	console.log('You will see this message every 30 seconds' + timestamp);

  	hosts.forEach(function (arrayItem) {
    
    var hostname = arrayItem.name
    var hostaddress = arrayItem.value
    //console.log(hostname)
    //console.log(hostaddress)

    ping.sys.probe(hostaddress, function(isAlive){
        var msg = isAlive ? 'host ' + hostname + ' is alive' : 'host ' + hostname + ' is dead';
        console.log(msg);
	});

});


}, null, true);


