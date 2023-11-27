let checkLogin = localStorage.getItem("idUser");
let users = JSON.parse(localStorage.getItem("users")) || [];

function cart() {
  // lấy ra id của user
  // lấy ra danh sách user
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      //check xem user nào đang đăng nhập
      let text = "";
      let pay = 0;
      for (let index = 0; index < users[i].cart.length; index++) {
        pay += +users[i].cart[index].quantity * users[i].cart[index].newPrice;
        text += `
                                <tr>
                                    <td class="table__img"><img src=${
                                      users[i].cart[index].image
                                    }> </td>
                                    <td class="table__title"> ${
                                      users[i].cart[index].productTitle
                                    }</td>
                                    <td class="table__price"> $${
                                      users[i].cart[index].newPrice
                                    }</td>
                                    <td>
                                        <button class="btn__inDe" onclick=decrease(${
                                          users[i].cart[index].id
                                        }) >-</button>
                                        ${users[i].cart[index].quantity}
                                        <button class="btn__inDe" onclick=increase(${
                                          users[i].cart[index].id
                                        })>+</button>
                                    </td>
                                    <td class="table__subtotal"> $${
                                      users[i].cart[index].quantity *
                                      users[i].cart[index].newPrice
                                    } </td>
                                    <td> <button class="btn btn--sm" onclick=deleteProduct(${
                                      users[i].cart[index].id
                                    }) >Delete</button> </td>
                                </tr>
                        `;
      }
      document.getElementById("tbody").innerHTML = text;
      document.getElementsByClassName("pay")[0].innerHTML = `$${pay}`;
    }
    //   break;
  }
}

cart();
// function click tăng số lượng sản phẩm
function increase(idProduct) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id == idProduct) {
          users[i].cart[j].quantity = ++users[i].cart[j].quantity;
          localStorage.setItem("users", JSON.stringify(users));
          cart();
          break;
        }
      }
      break;
    }
  }
}
// function click giảm số lượng sản phẩm
function decrease(idProduct) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id == idProduct) {
          users[i].cart[j].quantity = --users[i].cart[j].quantity;
          localStorage.setItem("users", JSON.stringify(users));
          cart();

          break;
        }
      }
      break;
    }
  }
}
// function click xoá sản phẩm
function deleteProduct(idProduct) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id == idProduct) {
          users[i].cart.splice(j, 1);
          localStorage.setItem("users", JSON.stringify(users));
          cart();
          document.getElementsByClassName("cartCount")[0].innerHTML =
            users[i].cart.length;
          break;
        }
      }
      break;
    }
  }
}
// function move to checkout page with data from cart
function moveToCheckout() {
  window.location.href = "checkout.html";
}
