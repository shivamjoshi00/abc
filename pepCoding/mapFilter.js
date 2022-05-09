 // map , filter, reduce

 let myArr=[1,2,3,4,5,6];

//  let newArr=myArr.map(function(x){
//      return x*x;
//  })

//  console.log(myArr);
//  console.log(newArr);
   

//Filter

// let newArr=myArr.filter(function(x){
//        return x%2!=0;
// })
// console.log(myArr);  
// console.log(newArr);

 // Reduce

 let newArr=myArr.reduce(function(y,x){
    return y+x;
 },1)

 console.log(myArr);  
console.log(newArr);