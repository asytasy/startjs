// завдання №1

/* function hello(){
    alert('Доброго вечора ми з України');
}

hello();
*/
// завдання №2
/*
function showMessage(name){
    return('Вітаю мене звати' +': ' + name );

}
   let result = showMessage('Ada');
    alert(result);
*/

// завдання №3
/*
function getSum( a, b) {
  return a + b;

}

let result = getSum (35, 30);
alert(result);
*/

// завдання №4
/*
function time(a ){

    return( a * 60);

}

let result = time(2);

alert(result);

*/
// завдання №5
/*
function farmer(covs, chickens, pigs){
   
  return ((covs * 4) + (chickens * 2) + ( pigs * 4));

}

let result =farmer(10, 5, 6) ;
alert(result); */

// завдання №6
/*
function rectangle( a, b) {

    return ((a + b) * 2);
}

let result = rectangle( 18, 10);

alert(result);
*/
// завдання №7
/*


function conversion (a){

    return (a= a*(1000/3600));
}
let result = Math.ceil(conversion(50));

alert(result);*/

// Розділ №3

//завдання 1
 
/*
function getArray(arr){
   arr = [30, 50, 3,2,6];
   return arr[0];
}
let result = getArray();
alert(result);
*/
//завдання 2

/*
function getArray(a, b){
 
    return [a , b];
}

let result = getArray(10, 30);

alert(result);*/

//завдання 3
/*
function getObj(a, d){

    return {
        likes: a,
        dislikes: d,
    };

}

let result = getObj(4,6);

console.log(result);
*/
//завдання 4 - 5 одинакові задачі
/*
function gerArray(arr){
    arr = [10,50,33,44,4,2,3,5,69];

    return arr[arr.length -1];
}

let result = gerArray();
alert(result);
*/

//завдання 6
/*
function getObj(x){
    return {
        needs: x * 0.5 ,
        wonts: x * 0.3,
        savings: x * 0.2,
    };
}
let result = getObj(10000);

console.log(result);*/

//завдання 7
/*
function gerArray (a){

    return [a * 0.5, a * 0.25, a * 0.125];
}

let result = gerArray(20);

console.log(result);*/

//завдання 8
/*
function objNew(obj){
     obj = {
        name: "Кіїв",
        population: "2,884,526",
        country: "Україна"
    };
    return `${obj.name} має населення ${obj.population} і знаходиться в ${obj.country} `;
}

let result = objNew();

alert(result); */

//завдання 9
/*

function getObj(obj){
    obj = {
       costPrice: 32.67,
       sellPrice: 45.00,
       inventory: 1200
   };


   return ((obj.sellPrice - obj.costPrice) * obj.inventory);
}
let result = getObj();
alert(result);*/
/*
function getDifferenceSumObject(obj){

    return obj.likes - obj.dislikes;
}

let result = getDifferenceSumObject({
    likes: 20,
    dislikes: 8,
});
console.log(result);*/
/*
function showProfit(obj){
  


    return ((obj.sellPrice - obj.costPrice) * obj.inventory);
 }
 let result = showProfit({
        costPrice: 32.67,
        sellPrice: 45.00,
        inventory: 1200
    });
 alert(result);*/

 // Завдання №5

 //1) Реалізувати функцію, яка приймає 3 параметри: операнд, перше число, друге число. Операнд - це один з символів - "+","-","*","/"
 //Функція має повертати результат отриманого з параметрів виразу. У разі неправильного операнда (якщо замість одного з операндів "+","-","*","/" введено щось інше) функція повертає текст - "Введить коректний операнд"

 /*function calcResult(a,  b) {

    if('+'){

        return a + b;

    } else {
        return 'введіть коректний операнд'
    }
    
 }
 
 let result = calcResult( 10, 5);
 console.log(result);
 
 
*/

 //2) Реалізуйте функцію, яка приймає 2 параметри, обидва числові. Функція має повертати true, якщо їх сума або одне з них дорівнюють 10
/*
 function getTwoParameters(a, b) {

    if (a === 10 || a + b === 10 ||b === 10 ){
        return true;
    } else {
       return false;
    }
   
 }
 
 let result = getTwoParameters(5,0);
 console.log(result);*/

 //3) Реалізувати функцію яка приймає 1 параметр - число. Функція має повертати  true, якщо число ділиться на 100 без залишку і false в усіх шнших випадках.

/*
 function getBooleanValue (sum){
    if( sum % 100 == 0 ){
        return true;
    } else {
        return false;
    }
 }

 let result = getBooleanValue(500);
 alert(result);
 */

 //4) реалізувати функцію, яка приймає імя у форматі рядка(string). Функція має повертати текст "Це жіноче імя", якщо остання літера імені - це "а" або "я" або рядок "Це чоловіче імя" в інших випадках
/*
 function getTextName(name){

    let index = name[name.length -1]; 

    if( index == 'a' || index  == 'я'){
        return  "Це жіноче імя" ;
    } else {
        return "Це чоловіче імя";
    } 
}

 let result = getTextName('Степан');
 console.log(result);
 */

 //5) 
/*

 function resultPlayers(player1, player2){


    if ( player1 === 'камінь' && player2 === 'ножиці' || player1 === 'ножиці' && player2 === 'папір' || player1 === 'папір' && player2 === 'камінь'){
        return 'Перемагає перший грваиець!';

    } else if( player2 === 'камінь' && player1 == 'ножиці' || player2 == 'ножиці' && player1 == 'папір' || player2 == 'папір' && player1 == 'камінь') {
        return 'Перемагає перший грваиець!';
    } else {
        return 'нічия';
    }
 }

 let result = resultPlayers("ножиці", "ножиці");

 console.log(result);

*/


//6
/*
function checkPaper(obj) {

    sheetRolls = obj.peaperRolls * 350;
    peoples = obj.people * 44;
    calk =   Math.ceil(sheetRolls / peoples);
   

       if (calk > 14 ) {
        return 'туалетний папір скінчиться ще не скоро вистачить ще на пару днів';
       } else if (calk < 13) {
        return ' Туалетний папір скінчиться через  днів, тож раджу замовити заздалегідь, щоб не сталося дупобіди';
       }

}

    let result = checkPaper({
        peaperRolls: 20,
        people: 7
    });

    console.log(result);
    */
//7
/*


function returtArrey(arr){

        if(arr.length <= 5){
            arr.push(33);
            return arr ;
            
        } else if(arr.length > 5 || arr.length <= 10){
            return `цей масив ${arr} його довжина ${arr.length}`;
        } else if(arr.length < 10){
            return 'Помилка занадто довгий масив';
        }

}

let result = returtArrey([4, 6, 7,4]);

alert(result);*/



///--------№6
//1 Реалізувати функцію, що перевіряє число, передане у якості аргумента. Якщо число дорівнює нулю або менше нуля, то повертаємо true, якщо більше нуля -false.
//Реалізувати функцію БЕЗ умовних конструкцій ( тобто без if/else, тернарних операторів або switch/case)
/*
function numberCheck(a){

    return a <= 0;
}

let result = numberCheck(0);
console.log(result);

*/
//2

/*
function equalityNumbers(a, b){

    return a === b;
}

let result = equalityNumbers(7,3);

console.log(result);
*/
//3 
/*

function getNtegerNamber(a,b){
    return a + b === 10 ;
}

let result = getNtegerNamber(10, 20);
console.log(result);
*/
//4
/*
function getAge(a){

    return ( a >= 18 ?  'можете придбати алкоголь' : 'Неповнолітнім алкогольні напої не продаються')

}

let result = getAge(16);
console.log(result);
*/

//5
/*
function getNameDrink(a){

   return ( a == 'Пиво' ? 'А чи є вам 18 років?' : 
   a == 'Горілка' ? 'А чи є вам 18 років?' :
    a == 'Коньяк'? 'А чи є вам 18 років?'
    : 'Будь ласка насолоджуйтесь вашім напоєм') ;
}

let result = getNameDrink('Коньяк');

console.log(result);
*/

//6
/*
function gerArray(arr){

    return (arr.length >= 5 ? 'масив занадто довгий' : 'масив занадто короткий');

}

let result = gerArray([4,5,8,9]);

console.log(result);*/

//7
/*

function getObj(obj){

    return (obj.age <= '23' ? 'у вас є знижка - 50% на проїзд': 'нажаль у вас не має пільг на проїзд');

}

let result = getObj({
    name: 'Сергій',
    age: '18',
    job: 'student',
});

console.log(result);*/

//8
/*
function getDayOfWeek(a){

    switch(a){
        case  1: 
        alert('Сьогодні Понеділок');
        break;

        case 2: 
        alert('Сьогодні Вівторок');
        break;

        case   3: 
        alert('Сьогодні Середа');
        break;

        case  4: 
        alert('Сьогодні Читверг');
        break;

        case 5: 
        alert('Сьогодні Пятниця');
        break;

        case 6: 
        alert('Сьогодні Субота');
        break;

        case 7: 
        alert('Сьогодні Неділя');
        break;
    }

}

   alert(getDayOfWeek(7));*/

   ///7

   //задача 1
   /*
   const arr = [1, 2, 3, 4, 5];
    let i = 0;
   while(arr.length){
    i++;
   }

   console.log(i);
   
*/
   //задача 2
/*
   const arr = [1, 5, 10, 15, 20, 25];

   for(let  i = arr.length -1; i >= 0; i--){
    const result = arr[i];
    console.log(result);
   }
 */
 //задача 3
 /*
 const obj = {
    name: 'Василь',
    age: 30,
    city: 'Полтава',
    profession: 'Тесляр',
    wife: 'Марічка'
 };

 for(let key in obj){

    console.log(obj);
 }*/
 //задача 4
 /*
 const arr = ['football', 'basketball', 'tennis', 'squash', 'baseball'];

 for(let value of arr){

    console.log(value);

 }*/

  //задача 5
/*
  const arr = [
    {
        name: 'Петро',
        age: 21
    },
    {
        name: 'Мыхайло',
        age: 24 
    },
    {
        name: 'Оксана',
        age: 19
    },
    {
        name: 'Степан',
        age: 42 
    },
    {
        name: 'Наталя',
        age: 16
    },
  ];



  for(let key in arr ){
   
    console.log(arr[key]);
  }*/

   //задача 6
/*
   const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
   ];

   let sum= 0;

for (let i = 0; i < arr.length; i++){
    for(let j= 0; j <  arr[i].length; j++){

    sum = sum + arr[i][j] + j;
    }

    
}
console.log(sum);
*/


     //задача 7

/*
     function findNumber(numCheck){
        let rowСoncat = '';
        let sum = 0;
        
        for(let i = 1; i <= numCheck; i++){
            
            sum += i;
            
        }
        return sum ;
     }

     let res = findNumber(5);

     console.log(res);
*/

     //8
/*
     let arr = [2, 'hello', true, 'string'];
  
     let newArray = [];
     function checkArray(arr){
    
        for(i = 0; i < arr.length; i++ ){
            newArray.push(typeof (arr[i]));
        }
       return newArray;
     }
     checkArray(arr);
     console.log(newArray);
  
*/
    //9 
/*
    let arr = [2, 4, 'hello', 6, 'string', 6];
    let sum = 0; 

    function getSum(arr){

        for(i = 0 ; i < arr.length; i++){
            if(typeof arr[i] !== 'number')
                continue;
          sum = sum + arr[i] ;
        }

    }

    getSum(arr);
    console.log(sum);
    */

    //10
    /*
    
    let arr = [10, 5, 6, 7, 10];
    let num = 6;
    let sum = 0;

    function getSum(arr, num){
        


        for (let i = 0; i < arr.length; i++){
            if(arr[i] === num) break;
            sum = sum + arr[i];
        }
        return sum + num;
    }
  let result = getSum(arr, num);
  console.log(result);*/