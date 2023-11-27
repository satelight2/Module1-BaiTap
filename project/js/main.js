// let itemPage = 8;
// let totalPage = 1;
// let currentPage = 1;
// let start;
// let end;
// const formOpenBtn = document.querySelector("#form-open"),
//   home = document.querySelector(".login-register-section"),
//   blackGround = document.querySelector(".black__background"),
//   formContainer = document.querySelector(".form_container"),
//   formCloseBtn = document.querySelector(".form_close"),
//   signupBtn = document.querySelector("#signup"),
//   loginBtn = document.querySelector("#login"),
//   pwShowHide = document.querySelectorAll(".pw_hide");
let storedProducts = JSON.parse(localStorage.getItem("products")) || {
  data: [],
};
// console.log("storedProducts", storedProducts.data);
let products = {
  data: [
    // {
    //   id: 1,
    //   productTitle: "Colorful Pattern T-Shirt",
    //   category: "MenTshirt",
    //   newPrice: "30",
    //   oldPrice: "50",
    //   image: "../assets/img/product-1-1.jpg",
    //   imageBackface: "../assets/img/product-1-2.jpg",
    //   badge: "Sale",
    //   stock: 10,
    // },
    // {
    //   id: 2,
    //   productTitle: "Nice Art T-Shirt",
    //   category: "MenTshirt",
    //   newPrice: "40",
    //   oldPrice: "55",
    //   image: "../assets/img/product-2-1.jpg",
    //   imageBackface: "../assets/img/product-2-2.jpg",
    //   badge: "Hot",
    //   stock: 1,
    // },
    // {
    //   id: 3,
    //   productTitle: "Sport Fashion Shoes",
    //   category: "Shoes",
    //   newPrice: "30",
    //   oldPrice: "35",
    //   image: "../assets/img/product-3-1.jpg",
    //   imageBackface: "../assets/img/product-3-2.jpg",
    //   badge: "Old",
    //   stock: 2,
    // },
    // {
    //   id: 4,
    //   productTitle: " Fashion Pants ",
    //   category: "Pants",
    //   newPrice: "35",
    //   oldPrice: "39",
    //   image: "../assets/img/product-4-1.jpg",
    //   imageBackface: "../assets/img/product-4-2.jpg",
    //   badge: "New",
    //   stock: 3,
    // },
    // {
    //   id: 5,
    //   productTitle: "Beautiful Hats ",
    //   category: "Hats",
    //   newPrice: "10",
    //   oldPrice: "12",
    //   image: "../assets/img/product-5-1.jpg",
    //   imageBackface: "../assets/img/product-5-2.jpg",
    //   badge: "Sale",
    //   stock: 4,
    // },
    // {
    //   id: 6,
    //   productTitle: "Purle T-Shirt",
    //   category: "MenTshirt",
    //   newPrice: "20",
    //   oldPrice: "25",
    //   image: "../assets/img/product-6-1.jpg",
    //   imageBackface: "../assets/img/product-6-2.jpg",
    //   badge: "Hot",
    //   stock: 5,
    // },
    // {
    //   id: 7,
    //   productTitle: "Chic Chiffon Blouse",
    //   category: "WomenBlouses",
    //   newPrice: "20",
    //   oldPrice: "25",
    //   image: "../assets/img/product-7-1.jpg",
    //   imageBackface: "../assets/img/product-7-2.jpg",
    //   badge: "Hot",
    //   stock: 0,
    // },
    // {
    //   id: 8,
    //   productTitle: "Denim Trucker Jacket",
    //   category: "MenJacktes",
    //   newPrice: "25",
    //   oldPrice: "30",
    //   image: "../assets/img/product-8-1.jpg",
    //   imageBackface: "../assets/img/product-8-2.jpg",
    //   badge: "Old",
    //   stock: 0,
    // },
    // {
    //   id: 9,
    //   productTitle: "Denim Trucker Jacket",
    //   category: "MenTshirt",
    //   newPrice: "22",
    //   oldPrice: "23",
    //   image: "../assets/img/product-9-1.jpg",
    //   imageBackface: "../assets/img/product-9-2.jpg",
    //   badge: "Hot",
    //   stock: 0,
    // },
    // {
    //   id: 10,
    //   productTitle: "Walk on Air: Lightweight Sandal Edition",
    //   category: "Sandals",
    //   newPrice: "12",
    //   oldPrice: "13",
    //   image: "../assets/img/product-10-1.jpg",
    //   imageBackface: "../assets/img/product-10-2.jpg",
    //   badge: "Sale",
    //   stock: 10,
    // },
    // {
    //   id: 11,
    //   productTitle: "Curve Envy: Flaunt Your Style with Our Bottoms",
    //   category: "WomenBottoms",
    //   newPrice: "32",
    //   oldPrice: "33",
    //   image: "../assets/img/product-11-1.jpg",
    //   imageBackface: "../assets/img/product-11-2.jpg",
    //   badge: "Hot",
    //   stock: 10,
    // },
    // {
    //   id: 12,
    //   productTitle: "Fierce Femininity: Empowering Women's Shirts",
    //   category: "WomenTops",
    //   newPrice: "42",
    //   oldPrice: "43",
    //   image: "../assets/img/product-12-1.jpg",
    //   imageBackface: "../assets/img/product-12-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 13,
    //   productTitle: "Bold & Beautiful Backpacks: Carry in Confidence",
    //   category: "Bags",
    //   newPrice: "142",
    //   oldPrice: "143",
    //   image: "../assets/img/product-13-1.jpg",
    //   imageBackface: "../assets/img/product-13-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 14,
    //   productTitle: "Bold & Beautiful Backpacks: Carry in Confidence",
    //   category: "MenTshirt",
    //   newPrice: "23",
    //   oldPrice: "30",
    //   image: "../assets/img/product-14-1.jpg",
    //   imageBackface: "../assets/img/product-14-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 15,
    //   productTitle: "Chic Cascade: Flowing Tops for Every Occasion",
    //   category: "MenTshirt",
    //   newPrice: "23",
    //   oldPrice: "30",
    //   image: "../assets/img/product-15-1.jpg",
    //   imageBackface: "../assets/img/product-15-2.jpg",
    //   badge: "Hot",
    // },
    // {
    //   id: 16,
    //   productTitle: "Radiant Ruffles: Trendsetting Men's Blouses",
    //   category: "MenTshirt",
    //   newPrice: "13",
    //   oldPrice: "20",
    //   image: "../assets/img/product-16-1.jpg",
    //   imageBackface: "../assets/img/product-16-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 17,
    //   productTitle: "Modern Muse: Statement-Making Men's Tops",
    //   category: "MenJacktes",
    //   newPrice: "33",
    //   oldPrice: "40",
    //   image: "../assets/img/product-17-1.jpg",
    //   imageBackface: "../assets/img/product-17-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 18,
    //   productTitle: "Harmony in Hues: Colorful Women's Tops",
    //   category: "WomenTops",
    //   newPrice: "43",
    //   oldPrice: "50",
    //   image: "../assets/img/product-18-1.jpg",
    //   imageBackface: "../assets/img/product-18-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 19,
    //   productTitle: "Sleek & Chic: Minimalist Women's Blouses",
    //   category: "WomenTops",
    //   newPrice: "33",
    //   oldPrice: "40",
    //   image: "../assets/img/product-19-1.jpg",
    //   imageBackface: "../assets/img/product-19-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 20,
    //   productTitle: "Casual Couture: Elevated Everyday Women's Tees",
    //   category: "WomenTops",
    //   newPrice: "43",
    //   oldPrice: "50",
    //   image: "../assets/img/product-20-1.jpg",
    //   imageBackface: "../assets/img/product-20-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 21,
    //   productTitle: "Draped in Style: Women's Tops Extravaganza",
    //   category: "WomenTops",
    //   newPrice: "23",
    //   oldPrice: "30",
    //   image: "../assets/img/product-21-1.jpg",
    //   imageBackface: "../assets/img/product-21-2.jpg",
    //   badge: "New",
    // },
    // {
    //   id: 22,
    //   productTitle: "Whimsical Waves: Playful Tops for Her",
    //   category: "WomenTops",
    //   newPrice: "13",
    //   oldPrice: "20",
    //   image: "../assets/img/product-22-1.jpg",
    //   imageBackface: "../assets/img/product-22-2.jpg",
    //   badge: "Hot",
    // },
    // {
    //   id: 23,
    //   productTitle: "City Lights, City Heights: Urban Women's Tops",
    //   category: "WomenTops",
    //   newPrice: "53",
    //   oldPrice: "60",
    //   image: "../assets/img/product-23-1.jpg",
    //   imageBackface: "../assets/img/product-23-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 24,
    //   productTitle: "Glamour in Layers: Stylish Women's Shirts",
    //   category: "WomenTops",
    //   newPrice: "24",
    //   oldPrice: "25",
    //   image: "../assets/img/product-24-1.jpg",
    //   imageBackface: "../assets/img/product-24-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 25,
    //   productTitle: "Effortless Chic: Contemporary Women's Tees",
    //   category: "WomenSkirts",
    //   newPrice: "64",
    //   oldPrice: "75",
    //   image: "../assets/img/product-25-1.jpg",
    //   imageBackface: "../assets/img/product-25-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 26,
    //   productTitle: "Boho Bliss: Free-Spirited Women's Tops",
    //   category: "WomenSkirts",
    //   newPrice: "94",
    //   oldPrice: "105",
    //   image: "../assets/img/product-26-1.jpg",
    //   imageBackface: "../assets/img/product-26-2.jpg",
    //   badge: "Hot",
    // },
    // {
    //   id: 27,
    //   productTitle: "Luxe Layers: Sophisticated Women's Blouses",
    //   category: "WomenSkirts",
    //   newPrice: "64",
    //   oldPrice: "85",
    //   image: "../assets/img/product-27-1.jpg",
    //   imageBackface: "../assets/img/product-27-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 28,
    //   productTitle: "Bag Enchantment: Unveiling Elegance",
    //   category: "Sandals",
    //   newPrice: "24",
    //   oldPrice: "25",
    //   image: "../assets/img/product-28-1.jpg",
    //   imageBackface: "../assets/img/product-28-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 29,
    //   productTitle: "Chic Carryalls: Your Statement in Style",
    //   category: "Sandals",
    //   newPrice: "14",
    //   oldPrice: "15",
    //   image: "../assets/img/product-29-1.jpg",
    //   imageBackface: "../assets/img/product-29-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 30,
    //   productTitle: "Chic Carryalls: Your Statement in Style",
    //   category: "Sandals",
    //   newPrice: "44",
    //   oldPrice: "45",
    //   image: "../assets/img/product-30-1.jpg",
    //   imageBackface: "../assets/img/product-30-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 31,
    //   productTitle: "Sleek & Structured: Modern Bag Elegance",
    //   category: "Sandals",
    //   newPrice: "44",
    //   oldPrice: "45",
    //   image: "../assets/img/product-31-1.jpg",
    //   imageBackface: "../assets/img/product-31-2.jpg",
    //   badge: "Hot",
    // },
    // {
    //   id: 32,
    //   productTitle: "Sole Symphony: Step into Elegance",
    //   category: "Sandals",
    //   newPrice: "24",
    //   oldPrice: "25",
    //   image: "../assets/img/product-32-1.jpg",
    //   imageBackface: "../assets/img/product-32-2.jpg",
    //   badge: "Hot",
    // },
    // {
    //   id: 33,
    //   productTitle: "Trendy Totes & Beyond: The Art of Carrying",
    //   category: "Bags",
    //   newPrice: "114",
    //   oldPrice: "125",
    //   image: "../assets/img/product-33-1.jpg",
    //   imageBackface: "../assets/img/product-33-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 34,
    //   productTitle: "Beyond Borders: Global Inspirations in Bags",
    //   category: "Bags",
    //   newPrice: "144",
    //   oldPrice: "155",
    //   image: "../assets/img/product-34-1.jpg",
    //   imageBackface: "../assets/img/product-34-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 35,
    //   productTitle: "Artisan Allure: Handcrafted Bag Treasures",
    //   category: "Bags",
    //   newPrice: "244",
    //   oldPrice: "255",
    //   image: "../assets/img/product-35-1.jpg",
    //   imageBackface: "../assets/img/product-35-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 36,
    //   productTitle: "Fashion Fusion: Bags for the Modern Maven",
    //   category: "Bags",
    //   newPrice: "214",
    //   oldPrice: "215",
    //   image: "../assets/img/product-36-1.jpg",
    //   imageBackface: "../assets/img/product-36-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 37,
    //   productTitle: "Effortless Elegance: Signature Bag Statements",
    //   category: "Bags",
    //   newPrice: "284",
    //   oldPrice: "295",
    //   image: "../assets/img/product-37-1.jpg",
    //   imageBackface: "../assets/img/product-37-2.jpg",
    //   badge: "Old",
    // },
    // {
    //   id: 38,
    //   productTitle: "Sculpted in Leather: Pinnacle of Luxury Bags",
    //   category: "Bags",
    //   newPrice: "184",
    //   oldPrice: "195",
    //   image: "../assets/img/product-38-1.jpg",
    //   imageBackface: "../assets/img/product-38-2.jpg",
    //   badge: "Old",
    // },
    ...storedProducts.data,
  ],
};
// localStorage.setItem("products", JSON.stringify(products));

var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/* New arrival swiper */
var swiperProduct = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});
/* Products Tab */
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    console.log("clicked", e);
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});

// /* move to cart jquery  animation*/
// $(".add-to-cart").on("click", function (e) {
//   console.log("clicked");
//   e.preventDefault(); //stop the browser from following the link
//   var cart = $(".shopping-cart");
//   var imgtodrag = $(this)
//     .parent(".product__content")
//     .parent(".product__item")
//     .find("img")
//     .eq(0);
//   console.log(
//     $(this)
//       .parent(".product__content")
//       .parent(".product__item")
//       .find("img")
//       .eq(0)
//   );
//   if (imgtodrag) {
//     var imgclone = imgtodrag
//       .clone()
//       .offset({
//         top: imgtodrag.offset().top,
//         left: imgtodrag.offset().left,
//       })
//       .css({
//         opacity: "0.8",
//         position: "absolute",
//         height: "150px",
//         width: "150px",
//         "z-index": 99,
//       })
//       .appendTo($("body"))
//       .animate(
//         {
//           top: cart.offset().top + 10,
//           left: cart.offset().left + 15,
//           width: 90,
//           height: 90,
//         },
//         1000,
//         "easeInOutExpo"
//       );

//     setTimeout(function () {
//       cart.effect(
//         "shake",
//         {
//           times: 2,
//         },
//         300
//       );
//     }, 1500);

//     imgclone.animate(
//       {
//         width: 0,
//         height: 0,
//       },
//       function () {
//         $(this).detach();
//       }
//     );
//   }
// });
/* show menu */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//show login-register-section section
// function showLoginRegisterSection() {
//   formOpenBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     home.classList.add("show");
//     blackGround.classList.toggle("appear");
//     home.classList.toggle("upTop");
//   });

//   formCloseBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     home.classList.remove("show");
//     blackGround.classList.toggle("appear");
//     home.classList.toggle("upTop");
//   });

//   pwShowHide.forEach((icon) => {
//     icon.addEventListener("click", () => {
//       let getPwInput = icon.parentElement.querySelector("input");
//       if (getPwInput.type === "password") {
//         getPwInput.type = "text";
//         icon.classList.replace("uil-eye-slash", "uil-eye");
//       } else {
//         getPwInput.type = "password";
//         icon.classList.replace("uil-eye", "uil-eye-slash");
//       }
//     });
//   });

//   signupBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.add("active1");
//   });
//   loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.remove("active1");
//   });
// }
function toggleForms(formToShow) {
  if (formToShow === "loginForm") {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
  } else if (formToShow === "signupForm") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }
}

function uuid() {
  return Math.floor(
    Math.random() * 885688785522 + new Date().getMilliseconds()
  );
}
function signUp() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let formContainer = document.querySelector(".form_container");
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let obj1 = {
    name: userName,
    email: email,
    password: password,
    status: 1,
    id: uuid(),
    cart: [],
  };
  // lọc xem user đã đăng kí email đó chưa hay chưa
  let find = users.filter((item) => {
    return item.email == email;
  });
  if (find.length != 0) {
    console.log("email đã được đăng kí");
    return;
  }
  users.push(obj1);
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("userName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";

  // After successful registration, hide the signup modal
  $("#loginModal").modal("hide");

  // Show the registration success modal
  $("#registrationSuccessModal").modal("show");
}

function signIn() {
  // lấy tất cả những user đã đăng kí rồi
  let users = JSON.parse(localStorage.getItem("users")) || [];
  //lấy email người dùng nhập
  let email = document.getElementById("email1").value;
  // lấy password người dùng nhập
  let password = document.getElementById("password1").value;

  console.log("email", email);
  console.log("password", password);

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      // lưu id người dùng lên localstorage
      localStorage.setItem("idUser", users[i].id);
      //close modal login
      let myModalEl = document.getElementById("loginModal");
      let modal = bootstrap.Modal.getInstance(myModalEl);
      modal.hide();
      //show cart
      showCart();

      // After successful login, hide the login modal
      $("#loginModal").modal("hide");

      // Show the login success modal
      $("#loginSuccessModal").modal("show");
      return;
    }
  }
}
function openLoginModal() {
  $("#loginModal").modal("show");
  $("#registrationSuccessModal").modal("hide");
}
function signOut() {
  localStorage.removeItem("idUser");

  let myModalEl = document.getElementById("exampleModal");
  let modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
  showCart();
}
function showCart() {
  let isLogin = localStorage.getItem("idUser");
  //if user is login

  if (isLogin) {
    document.getElementById("form-open").style.display = "none";
    let user = JSON.parse(localStorage.getItem("users"));
    let userName = user.find((item) => {
      return item.id == isLogin;
    });
    document.getElementsByClassName("header__action-say")[0].style.display =
      "block";
    document.getElementsByClassName(
      "header__action-say"
    )[0].innerHTML = `Hello,  ${userName.name}`;
    document.getElementById("a__heart").style.display = "block";
    document.getElementById("a__cart").style.display = "block";
    document.getElementById("a__signOut").style.display = "block";
    document.getElementsByClassName("cartCount")[0].innerHTML =
      userName.cart.length;
  } else {
    document.getElementById("form-open").style.display = "block";
    document.getElementsByClassName("header__action-say")[0].style.display =
      "none";
    document.getElementById("a__heart").style.display = "none";
    document.getElementById("a__cart").style.display = "none";
    document.getElementById("a__signOut").style.display = "none";
  }
}
showCart();
