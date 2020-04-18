const {PythonShell} =require ('python-shell');//requireing the module
let pyshell = new PythonShell('pythoScript.py');//can pass option as a parameter 
//you can create mutiple shell instance for multiple users or can work on one with multiple instance
//this module works on the ste of python that means you can send the data form python to this file via functions like 
//python->node     print()  you can say print(value) in python file the this module capture
//node->python     input() or other same kind of things like readline()  in python and send from this module to python by send function


//example 
//receiving data
pyshell.on('message',function(message){
    //use message value to do some stuff
    console.log(message);
})

//sending data

pyshell.send();