/*
№1
Сделайте функцию, выводящую в консоль ваше имя.
*/
// function Output(){
//     console.log("Mary")
// }
// Output();
/*
№2⊗jsPmFBInr

Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
*/

// function SumOutput(){
//     let sum=0;
//     for (let i=1; i<100; i++){
//         sum+=i;
//     }
//     console.log(sum)
// }

// SumOutput();

//201
/*
№1

Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
*/
// function Kub(num){
//     console.log(Math.pow(num, 3))
// }
// Kub(2);

/*
№2

Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. 
В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
*/
// function OtOrPol(num){
//     if(num>=0){
//         console.log('+++')
//     }else{
//         console.log('---')
//     }
// }
// OtOrPol(1);
// OtOrPol(-1)

//202
/*
№1

Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
*/
// function SumTri(a, b, c){
//     console.log(a+b+c);
// }
// SumTri(1, 2, 3);

//203
/*
№1

Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:

let param1 = 1;
let param2 = 2;
let param3 = 3;
С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
*/
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function SumT(a, b, c){
//     console.log(a+b+c);
// }
// SumT(param1, param2, param3)

//205
/*
№1

Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

*/
// function Kub(num){
//     return Math.pow(num, 3);
    
// }
// let res= Kub(3);
// console.log(res);

/*
№2

Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. 
С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
*/
// function OutputSqrt(num){
//     return Math.sqrt(num);
// }
// console.log(OutputSqrt(3)+OutputSqrt(4))

//206
/*
№1

Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
*/
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// console.log(round(sqrt(2)))

/*
№2

Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.
*/
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res= sum(sqrt(2), sqrt(3), sqrt(4))
// console.log(res);

/*
№3

Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

function round(num) {
	return num.toFixed(3);
}
С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.
*/
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res= round(sum(sqrt(2), sqrt(3), sqrt(4)))
// console.log(res);

//209
/*
№1

Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
*/
// function fun1(num){
// 	cout=0;
//     while (num>10){
// 		num=num/2;
// 		cout+=1;
// 	}
// 	console.log(cout)
// }
// fun1(24)

//210
/*
№1

Дана следующая функция:

function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}

console.log(func(3, 4));
Перепишите ее в сокращенной форме согласно изученной теории.
*/
// function func3(num1, num2) {
// 	let res;
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }
// console.log(func3(3, 4));

//210
/*
№1

Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
*/
// function fun4(arr1){
// 	for (let elem of arr1) {
// 		if (elem % 2!=0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }
// console.log(fun4([1, 2, 3]))

/*
№2

Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
*/
// function fun5(numb){
// 	for(let i=0; i<String(numb).length; i++){
// 		if(String(numb)[i]%2==0){
// 			return false;
// 		}
// 	}
// 	return true;

// }
// console.log(fun5(123))

/*
№3

Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
*/
// function fun6(arr){
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i]==arr[i+1]){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// console.log(fun6([1, 2, 2, 3]))

//212
/*
№4

Дана следующая функция:

function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.
*/
// function func(num) {
// 	return num >= 0;
// }
// console.log(func(2))

//Практика функции
/*
№1

Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
*/
function sumArr(arr){
	let sum=0
	for(let elem of arr){
		sum+=elem;
	}
	console.log(sum)
}
sumArr([1, 2, 3])

/*
№2

Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
*/
function arrDelit(num){
	let arrD=[];
	for(let i=1; i<=num; i++){
		if(num%i==0){
			arrD.push(i);
		}
	}
	console.log(arrD)
}
arrDelit(6)

/*
№3

Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
*/
function arrStr(str){
	console.log(str.split(''))
}
arrStr('hello world')

/*
№4

Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
*/
function strReverse(str1){
	console.log(str1.split('').reverse().join(''))
}
strReverse('hello world')

/*
№5

Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
*/
function strUp(str2){
	console.log(str2[0].toUpperCase()+str2.substring(1))
}
strUp('hello world')

/*
№6

Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
*/
function strUpAll(str4){
	let res = "";
	let words=str4.split('')
    for (let i = 0; i < words.length; i++) {
		res += words[i].toUpperCase();
    }
    console.log(res)
}
strUpAll('hello world')

/*
№7

Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
*/
function arrZap(num4){
	let arrN=[];
	for(let i=1; i<=num4; i++){
		arrN.push(i)
	}
	console.log(arrN)
}
console.log(arrZap(12))

/*
№8

Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
*/
function sumNum(num){
	let sum2=0;
	for(let i=0; i<String(num).length; i++){
		sum2+=Number(String(num)[i])
	}
	console.log(sum2)
}
sumNum(123)

/*
№9

Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
*/
function Year(y){
	if(y==365){
		console.log('обычный')
	}else if(y==366){
		console.log('високосный')
	}else{
		console.log('---')
	}
}
Year(366)

/*
№10

Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
*/
function sekSut(sec){
	console.log(sec/60/60/24)
}
sekSut(86400)

/*
№11

Сделайте функцию, которая будет возвращать случайный элемент из массива.
*/
function randEl(arr4){
	let randomIndex = Math.floor(Math.random() * (arr4.length - 1))
	console.log(arr4[randomIndex])
}
randEl([1, 2, 2, 3, 4])

 /*
 №12

Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
 */
function prime(num) {
	for (let i = 2; i < num; i++) {
	  if (num % i == 0) return false;
	}
	return true;
  }
console.log(prime(2))
console.log(prime(4))
