
var litecoin = require('./lib');

var client = new litecoin.Client({
  host: 'localhost',
  port: 9332,
  user: 'yourusername',
  pass: 'youpassword'
});

client.cmd('getbalance', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

