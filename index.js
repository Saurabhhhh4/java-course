1// alert("me");
2// document.write("saurabh here")
// console.warn("hey");
// console.error("this is error");
// // 3 javascript variable
//containers to store data value
// var number1 = 34;
// var number2 = 89;
// console.log(number1 + number2);
// // data type in javascript
// var str1 = "this is string";
// var str2 = "string yoo";
// var num1 = 78;
// var num2 = 56;
// // objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99, 977
// }
// console.log(marks);
/* data types in js
primitive:undefined,null,number,string,boolean,symbol
references:array nd object
*/
// array method//
// let myArr=["fan","camera","34","null","true"];
// console.log(myArr.length);
// myArr.push("saurs");
// pop
// myArr.shift();
// const newLen=myArr.unshift("saurabh");
// console.log(newLen);print new line
// console.log(myArr);
// string method in js
let myLovelyString="saurabh id good guy"
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.slice(1,3))
// d=myLovelyString.replace("saurabh","rohan");
// console.log(d,myLovelyString)
function avg(a,b){
    c=(a+b)/2;
    return c;
}
c1=avg(4,6);
c2=avg(14,16);
// console.log(c1,c2);
// conditional in js
// var age=34;
// if(age>8){
    // console.log('you are not akid')
// }
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getMinutes);
// let elem=document.getElementById('click');
// console.log(elem);
// let elemclass=Document.getelementByclassName("container")
// console.log(elemclass);
// elemclass[0].style.background="yellow"


// events in javascript
function clicked(){
    console.log('the button was clicked')   
}
window.onload('the document was loaded')
