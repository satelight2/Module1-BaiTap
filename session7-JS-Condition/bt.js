// Bài 1 : 
// Nhập số tuổi từ người dùng
var age = prompt("Nhập số tuổi của bạn:");

// Kiểm tra tuổi và hiển thị thông báo tương ứng
if (age >= 18) {
  console.log("Bạn đã đủ 18 tuổi.");
} else {
  console.log("Bạn chưa đủ 18 tuổi.");
}

// Bài 2 :
// Nhập số giờ từ người dùng
var hours = prompt("Nhập số giờ trong ngày (từ 0 đến 23):");

// Kiểm tra số giờ và hiển thị thông báo tương ứng
if (hours >= 0 && hours < 18) {
  console.log("Good day");
} else if (hours >= 18 && hours <= 23) {
  console.log("Good evening");
} else {
  console.log("Số giờ không hợp lệ. Vui lòng nhập số giờ từ 0 đến 23.");
}

// Bài 3 :
// Nhập số giờ từ người dùng
var hours = prompt("Nhập số giờ trong ngày (từ 0 đến 23):");

// Kiểm tra số giờ và hiển thị thông báo tương ứng
if (hours >= 0 && hours < 10) {
  console.log("Good morning");
} else if (hours >= 10 && hours < 20) {
  console.log("Good day");
} else if (hours >= 20 && hours <= 23) {
  console.log("Good evening");
} else {
  console.log("Số giờ không hợp lệ. Vui lòng nhập số giờ từ 0 đến 23.");
}

// Bài 4 :
// Nhập số từ người dùng
var number = parseInt(prompt("Nhập một số:"));

// Kiểm tra xem số là số chẵn hay số lẻ và hiển thị thông báo tương ứng
if (number % 2 === 0) {
  console.log(number + " là số chẵn.");
} else {
  console.log(number + " là số lẻ.");
}


// Bài 5 :
// Nhập số từ người dùng
var number = parseInt(prompt("Nhập một số:"));

// Kiểm tra số nhập vào và hiển thị thông báo tương ứng bằng switch case
switch (number % 2) {
  case 0:
    console.log(number + " là số chẵn.");
    break;
  case 1:
    console.log(number + " là số lẻ.");
    break;
  default:
    console.log("Đây không phải là số nguyên.");
}

// Bài 6 :
// Nhập màu từ người dùng
var color = prompt("Nhập một màu (xanh, đỏ, vàng):");

// Kiểm tra màu và hiển thị thông báo tương ứng
switch (color) {
  case "xanh":
    console.log("Màu bạn đã chọn là xanh.");
    break;
  case "đỏ":
    console.log("Màu bạn đã chọn là đỏ.");
    break;
  case "vàng":
    console.log("Màu bạn đã chọn là vàng.");
    break;
  default:
    console.log("Màu không hợp lệ.");
}


// Bài 7 :
// Nhập số nguyên x từ người dùng
var x = parseInt(prompt("Nhập một số nguyên:"));

// Kiểm tra giá trị của x và hiển thị thông báo tương ứng
if (x === 0) {
  console.log("x có giá trị là 0.");
} else if (x > 0) {
  console.log("x là số nguyên dương.");
} else {
  console.log("x là số nguyên âm.");
}


// Bài 8 :
// Nhập cân nặng (kg) và chiều cao (m) từ người dùng
var weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
var height = parseFloat(prompt("Nhập chiều cao của bạn (m):"));

// Tính chỉ số BMI
var bmi = weight / (height * height);

// Phân loại kết quả BMI

if (bmi < 18.5) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " - Cân nặng thấp.");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " - Trọng lượng bình thường.");
} 
else if (bmi >=25 ){
    console.log("BMI của bạn là " + bmi.toFixed(2) + " - Thừa cân.");
    } else if (bmi >= 25 && bmi < 29.9) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " - Tiền béo phì.");
}else if (bmi >= 30 && bmi < 34.9) {
    console.log("BMI của bạn là " + bmi.toFixed(2) + " - Béo phì độ 1.");
} 
else if (bmi >= 35 && bmi < 39.9) {
    console.log("BMI của bạn là " + bmi.toFixed(2) + " - Béo phì độ 2.");
}else if (bmi >= 40) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " - Béo phì độ 3.");
}

// Bài 9 :
// Nhập điểm từ người dùng cho các môn học
var toan = parseFloat(prompt("Nhập điểm môn Toán:"));
var li = parseFloat(prompt("Nhập điểm môn Lý:"));
var hoa = parseFloat(prompt("Nhập điểm môn Hóa:"));
var van = parseFloat(prompt("Nhập điểm môn Văn:"));
var su = parseFloat(prompt("Nhập điểm môn Sử:"));
var dia = parseFloat(prompt("Nhập điểm môn Địa:"));

// Tính điểm trung bình
var diemTrungBinh = (toan + li + hoa + van + su + dia) / 6;

// Xếp loại kết quả học tập
if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
  console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2) + " - Xếp loại GIỎI.");
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
  console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2) + " - Xếp loại KHÁ.");
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
  console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2) + " - Xếp loại TRUNG BÌNH.");
} else {
  console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2) + " - Xếp loại YẾU.");
}


// Bài 10 :
// Nhập số tháng từ người dùng
var month = parseInt(prompt("Nhập số tháng (từ 1 đến 12):"));

// Kiểm tra số tháng và hiển thị số ngày tương ứng
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng " + month + " có 31 ngày.");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng " + month + " có 30 ngày.");
    break;
  case 2:
    console.log("Tháng 2 có 28 hoặc 29 ngày, tùy vào năm.");
    break;
  default:
    console.log("Số tháng không hợp lệ. Vui lòng nhập số tháng từ 1 đến 12.");
}



