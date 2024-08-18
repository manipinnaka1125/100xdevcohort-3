/*function lpggas(){
console.log("manipinnaka");

}
setTimeout(lpggas,5000);


setTimeoutPromisified(2000).then(callback);*/

//promisified funtion in js
/*function s(helo){
  setTimeout(helo,3000);
}
function promisedfuntions(){
    return new Promise(s);
}
function main(){
    console.log("it is working after 3seconds");
}
 promisedfuntions().then(main);*/ //promisified based approach 


 /*function hello(){not a promisified apprach used call back 
    console.log("it is working after 5second");
 }
 setTimeout(hello,5000);
function fileRead(err,data){
    if(err){
        console.log("it is an error");
    }
    else{
        console.log(data);
    }
}

const fs=require("fs");
fs.readFile("a.txt","utf-8").then(fileRead);*/


function random(r){
  setTimeout(r,5000);
}

let p=new Promise(random);
function callback(){
    console.log("promise succeded");
}

p.then(callback);




/*const fs=require("fs");
function print (err,data){
    if(err){
        console.log("error occured");
    }
    else 
    {
        console.log(data);
    }
}
fs.readFile("a.txt","utf-8",print);
console.log("done");
function dinner(){
    console.log("i want to dinnner");
}
function cooking(){
    console.log("i want to start cooking before eating the dinner");
}
console.log("after dinner after cooking i want to sleep");

setTimeout(dinner,5000);
setTimeout(cooking,6000);
let c=0;
for(let i=0;i<10000000000;i++){
    c+=1;

}
console.log("hello today my daily task are completed");
*/
/*const user={
    name:"maniswaroo",
    age:21
}
console.log(user.name);*/
/*class Rectange{
    constructor(w,h,c){
        this.w=w;
        this.h=h;
        this.c=c;
    }
    area(){
        const area=this.w*this.h;
    }
    paint(){
        console.log(`paintin ${this.c}`);
    }
}
const rect=new Rectange(3,4,"dffff");
console.log(rect);*/
/*const now=new Date();
console.log(now.getMonth());
const map =new Map();
map.set('name','harikiirat');
map.set('age',50);
console.log(map.get('name'));
console.log(map.get('age'));*/

