// Bài 1
console.log("Welcome to Rikkei Academy");
// 1.2 : 
var age = prompt("Mời bạn nhập số tuổi của mình");
console.log("Bạn đã nhập số tuổi là: " + age);
// 1.3 :
document.write("Quyết tâm học lập trình JavaScript");
// 1.4 :
alert("Chào mừng bạn đến với học viện Rikkei Academy");
// 1.5 :
var confirmation = confirm("Bạn đã đủ 18 tuổi chưa?");
if (confirmation) {
  console.log("Người dùng đã xác nhận là đã đủ 18 tuổi.");
} else {
  console.log("Người dùng đã xác nhận là chưa đủ 18 tuổi.");
}
// Bài 2

var firstName = "Academy";
var lastName = "Rikkei";
var fullName = lastName + " " + firstName;
console.log("firstName có giá trị là: " + firstName);
console.log("lastName có giá trị là: " + lastName);
console.log("fullName có giá trị là: " + fullName);
// Bài 2.1
var myString = "Hello, world!";
var myNumber = 42;
var pi = 3.14;
var isTrue = true;
var isFalse = false;
var fruits = ["apple", "banana", "orange"];
var person = {
    name: "John",
    age: 30,
    isStudent: true
};
var emptyValue = null;
var undefinedValue;
function greet(name) {
    return "Hello, " + name + "!";
}
//Bài 3:
// 3.1:
// Nhập chiều dài và chiều rộng từ người dùng
var length = parseFloat(prompt("Nhập chiều dài của hình chữ nhật:"));
var width = parseFloat(prompt("Nhập chiều rộng của hình chữ nhật:"));

// Tính chu vi và diện tích
var perimeter = 2 * (length + width);
var area = length * width;

// Hiển thị kết quả
console.log("Chu vi của hình chữ nhật là: " + perimeter);
console.log("Diện tích của hình chữ nhật là: " + area);
// 3.2:
// Nhập bán kính từ người dùng
var radius = parseFloat(prompt("Nhập bán kính của hình tròn:"));

// Tính chu vi và diện tích
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

// Hiển thị kết quả
console.log("Chu vi của hình tròn là: " + perimeter);
console.log("Diện tích của hình tròn là: " + area);

// Bài 5:
let a1 = 5;
let b = "5";

console.log(a1 == b);  // true - So sánh giá trị, giá trị số 5 và chuỗi "5" có giá trị bằng nhau.
console.log(a1 === b); // false - So sánh giá trị và kiểu dữ liệu, kiểu dữ liệu khác nhau (number và string).
console.log(a1 != b);  // false - So sánh giá trị, giá trị số 5 và chuỗi "5" có giá trị bằng nhau.
console.log(a1 !== b); // true - So sánh giá trị và kiểu dữ liệu, kiểu dữ liệu khác nhau (number và string).
// Bài 6:
let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result); // 39 
// Bài 9:
console.log(0 || NaN || "Rikkei Academy" || null); // "Rikkei Academy"
console.log(null || NaN || false || null);           // null
console.log(undefined || 1 || 5 || null);            // 1
console.log("" || null || 5 || NaN);                 // 5
console.log(1 || null || 12 || NaN);                 // 1
// Bài 10:
console.log(0 && 1 && "Rikkei Academy" && null);     // 0
console.log(2 && NaN && false && null);              // 2
console.log(3 && 1 && 5 && null);                    // null
console.log("1" && undefined && 5 && NaN);           // undefined
console.log(1 && null && 12 && NaN);                 // null




