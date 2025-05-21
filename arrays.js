//ВИЗНАЦЕНЯ типів даних
// let num = null;
// let num = "";

//функція 
function showArr(arr)
{
    for(let elem of arr)
    {
        console.log(elem);
    }
}

// console.log(typeof(num));
//сьвореня масива 1
let arr = new Array();
// arr[0] = 10;
// arr[1] = 20;
// arr[33]= 30;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[33]);
console.log(arr[2]);
//створеня неявного масивва
// let array1 = [1,-5,34,876,43343,878,453,100000];
// console.log("Array at the start :" + array1);
// array1 [0] = 100;
// console.log("Array after chaging some value :" + array1);
// console.log("Array Length:" + array1.length);

// for (let i = 0; array1.length; i++);
// {
//     console.log(`Elem " ${i} = value : ${array1[i]}`);

// }
// array1.forEach((elem  , ind)=>{console.log(`Elem ${ind} = value : ${elem}`);
// })
//добавляє елемент
array1.push(777);
//видаляє  елемент
array1.pop();
// видаляє 1 елемент
array1.shift();
//добавляє 1 елемент
array1.unshift(666);

//пошук числа в масиві
console.log("index of 223 :" +array1.indexOf(223));
//шукаю справа на ліво
console.log("index of 223 :" +array1.lastIndexOf(221));

// for(let elem of array1)
// {
//     console.log(elem);
// }
//сортуваня масиву
// array1.sort((a,d)=> a-d);
array1.sort((a,d)=> a<d ? -1 : a>b ? 1 : 0);
console.log("Array after sorting :" + array1);
//вирізає елементи 
array1.splice(0,2);
console.log("array1 splice :" + array1);


array1[66] = 7777;
for(let elem of array1)
{
    console.log(elem);
}
//шукає парні елементи якщо змінить буде шукать не парні 
let forlterArrau= array1.filter((el) => el%2==0);
console.log("Filter element");
for(let elem of forlterArrau)
{
    console.log(elem);
}

let str = forlterArrau.join(" = ");
console.log(str);

let strlitArray = str.Split(" = ");
for(let elem of  strlitArray)
{
    console.log(elem);
}
