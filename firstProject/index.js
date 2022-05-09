//1.Ways to print in js
// console.log("hello world",4+7,"how are you");
// alert("hello");
// document.write("this is me");

//2.Java Script console API
// console.log("hello");
// console.warn("this is warning ");
// console.error("this is an a error");

//3. JavaScript Variables--Containers to store data value

//4. Functinons in javaScript
// Avg of two numbersjnk bghdn edgn
//     c=(a+b)/2;
//     return c;
// } 
// c1=avg(10,14);
// c2=avg(2,3);
// console.log(c1,c2);

// 5.USe of array in JavaSCript
//
//var arr=[1,2,3,4,5,6,7];
// for(var a=0;a<arr.length;a++){
//     console.log(arr[a]);
// }

// arr.forEach(function(e){
//     console.log(e);
// })
// let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(myDate.getFullYear());

//6.Dom Manupulation 

// let elem=document.getElementById('Click');
// console.log(elem);
// let myElement=document.getElementsByClassName('btn');
// console.log(myElement);

//7.Events in JavaScript
//  function clicked(){
//      console.log("Send button  is Clicked");
//  }
//  firstContainer.addEventListener('click',function(){
//      console.log("Is clicked");
//  })
//  firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out container");
// })
container.addEventListener('mouseup',function(){
    console.log("Mouse up when on container");
})
container.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>This is the best parr in the world</b>"
    console.log("Mouse down when on container");
})