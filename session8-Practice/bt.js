// // Bài 1: Tính giai thừa
//     function giaiThua(n){
//     if (n == 0 || n == 1)
//       return 1;
//     return n * giaiThua(n - 1);
//   }
  
//   const n = +prompt('Nhập số nguyên dương: ');
//   console.log('Giai thừa của ' + n + ' là: ' + giaiThua(n));
  
//   // Bài 2: Đảo ngược chuỗi  
    // function daoChuoi(c) {
    //   return c.split('').reverse().join('');
    // }

    // const cauNhap = prompt("Nhập một câu: ");
    // const cauDaoNguoc = daoChuoi(cauNhap);
    // console.log(`Câu đảo ngược: ${cauDaoNguoc}`);
  
//   // Bài 3: Bảng nhân
//   function bangNhan(soNd) {
//     for (let i = 1; i <= n; i++) {
//       let s = '';
//       for (let j = 1; j <= n; j++) {
//         s += (i + j - 1) + ' ';
//       }
//       console.log(s);
//     }
//   }
  
//   const soNd = +prompt('Nhập số nguyên dương n: '); 
//   bangNhan(soNd);
  
//   // Bài 4: Dãy Fibonacci
//   function inDayFibonacci(m) {
//     const fibonacci = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     console.log(fibonacci.slice(0, m).join(", "));
//   }
  
//   const soLuongFibonacci = 15;
//   inDayFibonacci(soLuongFibonacci);
  
  
//   // Bài 5: Tam giác vuông 
    const n = 5;
    for (let i = 1; i <= n; i++) {
      let row = '';
        for (let j = 1; j <= i; j++) {
          row+= '*';
        }
          row+= '';
          console.log(row); 
      }
      
    console.log('------------------------------');

    for (let i = 0; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= 5 - i; j++) {
        row+= '*';
      }
        row+= '';
          console.log(row); 

    }
  console.log('------------------------------');

  for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if(i <= 5 - j){
        row+= ' ';
      }else{
        row+= '*';
      };
    }
      console.log(row);
  }
console.log('------------------------------');

  for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
      if(i >= j){
        row+= ' ';
      }else{
        row+= '*';
      };
    }
        console.log(row);
  }
  console.log('------------------------------');




// }
 // Bài 6: Số hoàn hảo
    // function laSoHoanHao(n) {
    //   let tongUoc = 0;
    //   for (let i = 1; i < n; i++) {
    //       if (n % i === 0) {
    //           tongUoc += i;
    //       }
    //   }
    //   return tongUoc === n;
    // }

    // const soNhap = +prompt("Nhập một số nguyên: ");
    // if (soNhap > 0) {
    //   if (laSoHoanHao(soNhap)) {
    //       console.log(`${soNhap} là số hoàn hảo.`);
    //   } else {
    //       console.log(`${soNhap} không là số hoàn hảo.`);
    //   }
    // } else {
    //   console.log("Vui lòng nhập số nguyên dương.");
    // }


