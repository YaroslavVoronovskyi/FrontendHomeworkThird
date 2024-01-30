// 1. Створіть функцію яка клонує об'єкти Приклад вхідних данних: 
// const obj = { cart: [{ id: 2, prices: [123] }], 
// userInfo: { id: 33, bio: { name: 'user', phone: ' + 380000000000', 
// location: { region: 'ua', state: 'lv' } } } } 
// Функція повина приймати обьєкти схожого типу і не бути прив'язана до назви полів.
// Використовувати JSON.stringify / parse забороненно

const user = {
	cart: [{
		id: 2,
		prices: [123]
	}],
	userInfo: {
		id: 33,
		bio: {
			name: 'user',
			phone: ' + 380000000000',
			location: {
				region: 'ua',
				state: 'lv'
			}
		}
	}
};

function cloneObject(user) {
	const newUser = Object.assign({}, user);
	return newUser;
}

const newUser = cloneObject(user);

console.log(user);
console.log(newUser);

// 2. Створіть функцію яка порівнює два об'єкти

function compareObjects(firstObject, secondObject) {
	let result = Object.entries(firstObject).sort().toString() ===
		Object.entries(secondObject).sort().toString()
	return result;
}

let firstObject = {
	name: "Yaroslav",
	location: "Kyiv"
}

let secondObject = {
	name: "Bob",
	location: "Lviv"
}

let thirdObject = {
	name: "Yaroslav",
	location: "Kyiv"
}

console.log(compareObjects(firstObject, secondObject)); // false 
console.log(compareObjects(firstObject, thirdObject)); // true 
console.log(compareObjects(user, newUser)); // true

// 3. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.

function checkNumber(number) {
	for (let index = 2; index <= number - 1; index++) {
		if (number % index == 0) {
			console.log(`${number} it is not a prime number`);
			return;
		} else {
			console.log(`${number} it is a prime number`);
			return;
		}
	}
}

checkNumber(1);
checkNumber(3);
checkNumber(4);
checkNumber(5);
checkNumber(512);
checkNumber(111);

// 4. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.

function recursiveFactorial(number) {
	if (number === 1) {
		return 1;
	} else {
		return number * recursiveFactorial(number - 1);
	}
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(11));
console.log(recursiveFactorial(15));

function iterativeFactorial(number) {
	let result = 1;
	for (let index = 2; index <= number; index++) {
		result *= index;
	}
	return result;
}

console.log(iterativeFactorial(1));
console.log(iterativeFactorial(5));
console.log(iterativeFactorial(11));
console.log(iterativeFactorial(15));

// 5. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом

function isPalindrome(expression) {
	let lastIndex = expression.length - 1;
	for (let index = 0; index < expression.length / 2; index++) {
		if (expression[index] != expression[lastIndex]) {
			return false;
		}
		lastIndex--;
	}
	return true;
}

console.log(isPalindrome("sizezis"));
console.log(isPalindrome("javaj"))
console.log(isPalindrome("java"));

// 6. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром.

function convertToUppercase(expression) {
	return String(expression).trim().toLocaleUpperCase();
}

console.log(convertToUppercase("   java script  "));
console.log(convertToUppercase("   java script  "));
console.log(convertToUppercase("   java123 script543  "));

// 7. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.

function removeDuplicates(array) {
	return Array.from(new Set(array));
}

let array = [
	"JavaScript", "Java", "React", "HTML", "CSS",
	"TypeScript", "JavaScript", "SCSS", "HTML", "Angular"
];

console.log(removeDuplicates(array));

// 8. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".

function convertDate(date) {
	return new Date(date).toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
}

let date = "01/30/2023 20:12:34"

console.log(convertDate(date));
console.log(convertDate(Date.now()));
