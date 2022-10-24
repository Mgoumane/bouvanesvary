let t = [ 2,5,3,56 ];
let t2 = t.map( (element)=>{ return element * 2 } );
//filter
let t4 = t.filter((element)=>{return element % 2 == 0 });
console.log(t4);

let t5 = t.reduce((a,b)=>{return a + b},20000);
console.log(t5);

let a =[1,23546546,3];
let[x,y] = a;
y = 9;

let t6 = t.map( (element)=>{ return element * 2 } );
let t7 = t.map( element => element * 2);
console.log(t7);

// Déstructuration:
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
// new way
const vehicles2 = ['mustang', 'f-150', 'expedition'];
const [car2, truck2, suv2] = vehicles;



