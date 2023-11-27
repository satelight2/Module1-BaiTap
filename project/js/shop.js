let itemPage = 8;
let totalPage = 1;
let currentPage = 1;
let start;
let end;

// FUNCTION TÍNH START VÀ END DỰA VÀO currentPage
function startEnd(current) {
  start = (current - 1) * itemPage;
  end = current * itemPage;
}
function totalPages(pages) {
  totalPage = Math.ceil(pages.length / itemPage);
}
totalPages(products.data);
startEnd(1);
function getProducts(param) {
  let productContainer = document.querySelector(".product__container");
  let html = "";
  for (let i = 0; i < param.length; i++) {
    if (i >= start && i < end) {
      let badgeClass = "";
      switch (param[i].badge) {
        case "Hot":
          badgeClass = "light-pink";
          break;
        case "Sale":
          badgeClass = "light-blue";
          break;
        case "Old":
          badgeClass = "light-orange";
          break;
        case "New":
          badgeClass = "light-green";
          break;
      }
      html += `
            <div class="product__item" data-category="${param[i].category}">
            <div class="product__banner">
              <a href="details.html" class="product__images">
                <img
                  src="${param[i].image}"
                  alt=""
                  class="product__img default"
                />
                <img
                  src="${param[i].imageBackface}"
                  alt=""
                  class="product__img hover"
                />
              </a>
              <div class="product__actions">
                <a href="#" class="action__btn" aria-label="Quick View">
                  <i class="fi fi-rr-eye"></i>
                </a>
                <a
                  href="#"
                  class="action__btn"
                  aria-label="Add to Wishlist"
                >
                  <i class="fi fi-rr-heart"></i>
                </a>
                <a href="#" class="action__btn" aria-label="Compare">
                  <i class="fi fi-rr-shuffle"></i>
                </a>
              </div>
              <div class="product__badge ${badgeClass}">${param[i].badge}</div>
            </div>
            <div class="product__content">
              <span class="product__category">${param[i].category}</span>
              <a href="details.html">
                <h3 class="product__title">${param[i].productTitle}</h3>
              </a>
              <div class="product__rating">
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-star"></i>
              </div>
              <div class="product__price flex">
                <span class="new__price">$${param[i].newPrice}</span>
                <span class="old__price">$${param[i].oldPrice}</span>
              </div>
              <a
                
                
                class="action__btn cart__btn add-to-cart "
                aria-label="Add to cart"
              >
                <i onclick=addToCart(${param[i].id}) class="fi fi-rr-shopping-bag-add"></i>
              </a>
            </div>
          </div>
            `;
    }
  }
  productContainer.innerHTML = html;

  // $(".add-to-cart").on("click", function (e) {
  //   // console.log("clicked");
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
  //   console.log(cart);
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
}

getProducts(products.data);

// FUNCTION show ListPage
function showListPage() {
  let text = "";
  for (let i = 1; i <= totalPage; i++) {
    text += `
             <li onclick=choosePage(${i}) class="pagination__btn">${i}</li>
        `;
  }
  document.getElementsByClassName("pagination")[0].innerHTML = `
        <span onclick="prePage()"><i class="fi fi-rr-angle-double-left"></i> </span>
        ${text}
        <span onclick="nextPage()"><i class="fi fi-rr-angle-double-right"></i> </span>
    `;
  document.getElementsByClassName("pagination__btn")[0].classList.add("active");
}
showListPage();

// FUNCTION TẠO PAGINATION
function choosePage(a) {
  let paginationBtn = document.getElementsByClassName("pagination__btn");
  // gán trang hiện tại bằng trang vừa click
  currentPage = a;
  for (let i = 0; i < paginationBtn.length; i++) {
    if (i == a - 1) {
      paginationBtn[i].classList.add("active");
    } else {
      paginationBtn[i].classList.remove("active");
    }
  }
  startEnd(a);
  getProducts(products.data);
}
// function next ảnh tiếp theo
function nextPage() {
  currentPage++;
  if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  choosePage(currentPage);
}
function prePage() {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  choosePage(currentPage);
}

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
function filterProduct(value) {
  //if value == all => show all products
  if (value == "all") {
    getProducts(products.data);
    totalPages(products.data);
    showListPage();
    return;
  }
  let result = searchProduct(value);

  //show new  ListPage
  totalPages(result);
  showListPage();
  getProducts(result);
}
/* --------------------------------------------------------------------------- */
function searchProduct(value) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let result = products.data.filter((item) => {
    return item.category.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });

  return result;
}
// function hiển thị sản phẩm sau khi tìm kiếm
function showSearchProduct() {
  let value = document.getElementById("search-input").value;
  let result = searchProduct(value);
  getProducts(result);
}
// function tìm kiếm sản phẩm
function delaySearchProduct() {
  setTimeout(showSearchProduct, 1000);
}
delaySearchProduct();
document.getElementById("totalProducts").textContent = products.data.length;

// function hiển thị giỏ hàng
function addToCart(idProduct) {
  // kiểm tra xem người dùng đã đăng nhập hay chưa.
  let checkLogin = localStorage.getItem("idUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  //if user not login => show login modal
  if (!checkLogin) {
    let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  }
  //đi lấy giỏ hàng của user để đi mua hàng
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      // lấy ra được giỏ hàng của user
      // users[i].cart
      // có id sản phẩm rồi thì xét xem đó là sản phẩm nào
      for (let j = 0; j < products.data.length; j++) {
        if (products.data[j].id == idProduct) {
          let check = true;
          let result;
          for (let k = 0; k < users[i].cart.length; k++) {
            if (users[i].cart[k].id == idProduct) {
              check = false;
              result = k;
              break;
            }
          }
          if (!check) {
            // chứng tỏ sản phẩm đã có trong giỏ hàng
            users[i].cart[result].quantity = ++users[i].cart[result].quantity;
            localStorage.setItem("users", JSON.stringify(users));
            // gọi lại hàm  showCart để hiển thị lại số lượng

            $(".add-to-cart").on("click", function (e) {
              console.log("clicked");
              e.preventDefault(); //stop the browser from following the link
              var cart = $(".shopping-cart");
              var imgtodrag = $(this)
                .parent(".product__content")
                .parent(".product__item")
                .find("img")
                .eq(0);
              console.log(
                $(this)
                  .parent(".product__content")
                  .parent(".product__item")
                  .find("img")
                  .eq(0)
              );
              if (imgtodrag) {
                var imgclone = imgtodrag
                  .clone()
                  .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left,
                  })
                  .css({
                    opacity: "0.8",
                    position: "absolute",
                    height: "150px",
                    width: "150px",
                    "z-index": 99,
                  })
                  .appendTo($("body"))
                  .animate(
                    {
                      top: cart.offset().top + 10,
                      left: cart.offset().left + 15,
                      width: 90,
                      height: 90,
                    },
                    1000,
                    "easeInOutExpo"
                  );

                setTimeout(function () {
                  cart.effect(
                    "shake",
                    {
                      times: 2,
                    },
                    300
                  );
                }, 1500);

                imgclone.animate(
                  {
                    width: 0,
                    height: 0,
                  },
                  function () {
                    $(this).detach();
                  }
                );
              }
            });
            showCart();
          } else {
            users[i].cart.push({ ...products.data[j], quantity: 1 });
            localStorage.setItem("users", JSON.stringify(users));
            showCart();

            $(".add-to-cart").on("click", function (e) {
              console.log("clicked");
              e.preventDefault(); //stop the browser from following the link
              var cart = $(".shopping-cart");
              var imgtodrag = $(this)
                .parent(".product__content")
                .parent(".product__item")
                .find("img")
                .eq(0);
              console.log(
                $(this)
                  .parent(".product__content")
                  .parent(".product__item")
                  .find("img")
                  .eq(0)
              );
              if (imgtodrag) {
                var imgclone = imgtodrag
                  .clone()
                  .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left,
                  })
                  .css({
                    opacity: "0.8",
                    position: "absolute",
                    height: "150px",
                    width: "150px",
                    "z-index": 99,
                  })
                  .appendTo($("body"))
                  .animate(
                    {
                      top: cart.offset().top + 10,
                      left: cart.offset().left + 15,
                      width: 90,
                      height: 90,
                    },
                    1000,
                    "easeInOutExpo"
                  );

                setTimeout(function () {
                  cart.effect(
                    "shake",
                    {
                      times: 2,
                    },
                    300
                  );
                }, 1500);

                imgclone.animate(
                  {
                    width: 0,
                    height: 0,
                  },
                  function () {
                    $(this).detach();
                  }
                );
              }
            });
          }
          break;
        }
      }
      break;
    }
  }
  //if user login => add to cart
}
