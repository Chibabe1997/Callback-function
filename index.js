/*function doSomething(value){
    console.log(value)
}
doSomething("chidinma")*/

const names = ["ama","kendi","chika","prince"];

const forMyEach = (arr, cb)=>{
    for(var i = 0;  i < arr.length; i++);
    const element = arr[i];
    cb(element);
}
forMyEach(names, (name)=>{
    console.log(name);
})