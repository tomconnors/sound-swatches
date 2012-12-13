/*
  Compiler for coffee script.
  
  For each file you want compiled, provide the full path to the file and the full path to 
  the place you want the compiled version to go.  
*/

var spawn = require('child_process').spawn,
  abs_path = '/var/lib/stickshift/477c24b4514249b3841bf051d2c151b3/app-root/data/352705'
  files = [
    {
      'in': '/sound-swatches/app.coffee',
      'out': '/sound-swatches/'
    }    
  ],
  
  i = 0;
  
  //create a process to do the coffee script compilation
function run(file){
  file.process = spawn('coffee', ['--compile', '--output', abs_path + file['out'], abs_path + file['in'] ], { stdio: 'inherit' });
  file.process.stdout.on('data', function(data) {
    console.log(data);
  });
  file.process.stderr.on('data', function(data){
    console.log(data.toString());
  });
  file.process.on('exit', function(code){
    console.log('Process for file ' + file['in'] + ' exited with code ' + code);
  });  
}
  
for(i=0; i<files.length; i++){
  run(files[i]);
}
  
 