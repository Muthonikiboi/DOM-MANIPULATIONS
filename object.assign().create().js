//use of assign
var constant1={
    a:"GOAL",
    b:"PRACTICE",
    c:"PROGRESS",
    d:"FAITH",
};
let constant2=Object.assign({a:"FACTS",g:"PRICES"},constant1);
console.log(constant2.a,constant2.g);

//use of create()
let creation={
    name:"Joy Elizabeth Muthoni Kiboi",
    role:"student at Dedan Kimathi University",
    course:"Bsc",
    year:2.3,
    shoow(){
       console.log("name:",this.name);
    }
}
let p=Object.create(creation);
p.name="Emmanuel Getange Mokomba";
p.shoow();
