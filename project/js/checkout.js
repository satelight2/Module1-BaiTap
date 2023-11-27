let checkLogin1 = localStorage.getItem("idUser");
let users1 = JSON.parse(localStorage.getItem("users")) || [];

const section = document.querySelector(".popUpMess"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");
// showBtn.addEventListener("click", () => section.classList.add("active"));
overlay.addEventListener("click", () => section.classList.remove("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));
function renderCheckoutTable() {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].id == checkLogin1) {
      //check xem user nào đang đăng nhập
      let text = "";
      let pay = 0;
      for (let index = 0; index < users1[i].cart.length; index++) {
        pay += +users1[i].cart[index].quantity * users1[i].cart[index].newPrice;
        text += `
        <tr>
            
      
            <td> <img  class="order__img" src=${
              users1[i].cart[index].image
            }> </td>
            <td>
            <span class="table__price">$${users1[i].cart[index].newPrice}</span>
             
             </td>
            <td> 
               <p class="table__quantity">  ${
                 users1[i].cart[index].quantity
               }</p>
               
             
            </td>
            <td> 
            <span class="table__price">$${
              users1[i].cart[index].quantity * users1[i].cart[index].newPrice
            }</span>
             </td>
         
        </tr>
                    `;
      }
      document.getElementById("order-summary-body").innerHTML = text;
      document.getElementById("total-amount").innerHTML = `$${pay}`;
    }
    break;
  }
}
renderCheckoutTable();

document
  .getElementById("handleCheckout")
  .addEventListener("click", function (event) {
    // Handle the form data
    event.preventDefault();
    for (let i = 0; i < users1.length; i++) {
      if (users1[i].id == checkLogin1) {
        if (users1[i].status == 1) {
          handleCheckout();
        } else {
          showBlockedModal();
        }
      }
    }
  });
function handleCheckout() {
  // //Retrieve input values when the checkout button is clicked
  const fullName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("adr").value;
  const city = document.getElementById("city").value;

  let cartOrder = [];
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].id == checkLogin1) {
      cartOrder = users1[i].cart;
    }
  }
  //get full day time order

  const orderItem = {
    idOrder: Math.random() * 885688785522 + new Date().getMilliseconds(),
    idUser: checkLogin1,
    status: "pending",
    fullName,
    email,
    address,
    city,
    orderCart: cartOrder,
    orderDateTime: new Date().toLocaleString(),
  };

  // console.log(order);
  // Add order to local storage
  let getOrders = JSON.parse(localStorage.getItem("orders")) || [];
  getOrders.push(orderItem);
  localStorage.setItem("orders", JSON.stringify(getOrders));
  //clear cart after checkout success
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].id == checkLogin1) {
      users1[i].cart = [];
    }
    // }
    localStorage.setItem("users", JSON.stringify(users1));
    showCart();
    //Ensure that the section is correctly selected
    const section = document.querySelector(".popUpMess");

    // Log a message to check if the function is being called
    // console.log("handleCheckout function is called");
    setTimeout(() => {
      section.classList.add("active");
    }, 2000);
  }
}
function showBlockedModal() {
  // Create a modal element
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = "blockedModal";
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");

  // Create modal content
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger">Account Blocked</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-danger">Your account has been blocked. Please contact support for assistance.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;

  // Append the modal to the document
  document.body.appendChild(modal);

  // Show the modal
  const blockedModal = new bootstrap.Modal(
    document.getElementById("blockedModal")
  );
  blockedModal.show();

  // Remove the modal from the DOM after it is hidden
  blockedModal._element.addEventListener("hidden.bs.modal", function () {
    document.body.removeChild(modal);
  });
}
