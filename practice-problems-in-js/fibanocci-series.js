let n= 8;
let a = 0;
let b = 1;
let sum;
let arr = [0, 1];

for(i=2; i<n;i++){
    sum = a+b ;
    a= b ;
    b=sum;
    arr.push (b);
}


console.log(arr);