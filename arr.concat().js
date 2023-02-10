var a=[34,89,67];
var b=[
    [23,45],
    [90,23,],
];
//concatinate the array
var c=a.concat(b);
console.log(c);

//change 34 t0 20
a[0]=20;
console.log(a);

//add an element into the array b
var d=b[1].push(234);
console.log(b);

//see if change affects the whole array c
console.log(c);  