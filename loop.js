/*
1. for loop
2. while loop
3. do while loop
4. for of loop --> array
5. for in loop --> object
 */
const fruits = ["apple","banana","guava","jackfruit"];
for(const fruit of fruits){
    //console.log(fruit);
}
for(let i = 0 ; i<=6 ; i++){
   // console.log(i);
}
for(let i = 0 ; i< fruits.length ;i++)
{
   // console.log(i);
   // console.log(fruits[i]);
}
const age = [20, 22, 24 , 98,25,4]
for(let i = 0 ; i<age.length ;i++)
{
    //console.log(age[i])
}
let i = 0;
while(i<fruits.length){
    //console.log(fruits[i])
    i++;
}
let n= 0;
while(n<age.length){
    console.log(age[n]);
    n++;
}
