const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];



//zad1
console.log("zadanie 1");
let joinArr = (arr0,arr1) => [...arr0, ...arr1];
console.log(joinArr(arr1,arr2));

//zad2
console.log("zadanie 2");
let reverseArr = (numbers) => numbers.reverse();
console.log(reverseArr(numbers)[0]);

//zad3
console.log("zadanie 3");
let filterArray = arr2.filter(maslo => maslo.length > 5);
console.log(filterArray) 

//zad4
console.log("zadanie 4");
let initialValue = 0;
let sumWithInitial = numbers.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
console.log(sumWithInitial);

//zad5
console.log("zadanie 5");
let map1 = numbers.map(x => x * x +3);
console.log(map1);



//zad dodatkowe 1
console.log("zad dodatkowe 1");
let dodatkowe1 = arr2.filter(maslo => maslo.length <= 5 && maslo.endsWith("ek"));
console.log(dodatkowe1); 

//zad dodatkowe 2
console.log("zad dodatkowe 2");
let dodatkowe2 = numbers.filter((abc) => abc % 2 == 0);
console.log(dodatkowe2); 