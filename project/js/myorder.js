let getOrders = JSON.parse(localStorage.getItem("orders")) || { data: [] };
let userInfo = document.getElementById("data-order");

let isLoginId = JSON.parse(localStorage.getItem("idUser"));
let userLoginOrder = [];

getOrders.forEach((element) => {
  if (element.idUser == isLoginId) {
    userLoginOrder.push(element);
  }
});

function showOrder() {
  document
    .querySelectorAll(".employeeDetails")
    .forEach((info) => info.remove());
  for (let i = 0; i < userLoginOrder.length; i++) {
    let pay = 0;
    for (let j = 0; j < userLoginOrder[i].orderCart.length; j++) {
      pay +=
        +userLoginOrder[i].orderCart[j].quantity *
        userLoginOrder[i].orderCart[j].newPrice;
    }
    let createElement = `<tr class="employeeDetails">
    <td>${i + 1}</td>
    <td>${userLoginOrder[i].idOrder}</td>
  
    <td>${userLoginOrder[i].orderDateTime}</td>
    <td>$${pay}</td>
    <td>${userLoginOrder[i].status}</td>
    <td>
        <button class="btn btn--sm" onclick="readInfo(${
          userLoginOrder[i].idOrder
        })" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

    
        <button class="btn--sm btn" data-bs-toggle="modal" data-bs-target="#cancel" onclick="calcelOr(${
          userLoginOrder[i].idOrder
        })">Cancel</button>

    </td>
    </tr>`;
    userInfo.innerHTML += createElement;
  }
}

showOrder();

function readInfo(id) {
  let readData = document.getElementById("readDataBody");

  readData.innerHTML = "";
  for (let i = 0; i < userLoginOrder.length; i++) {
    if (userLoginOrder[i].idOrder == id) {
      let pay = 0;
      let text = "";
      for (let j = 0; j < userLoginOrder[i].orderCart.length; j++) {
        pay +=
          +userLoginOrder[i].orderCart[j].quantity *
          userLoginOrder[i].orderCart[j].newPrice;
      }

      let createElement = `

      <div class="container">
        <!-- <div class="row d-flex justify-content-center align-items-center h-100"> -->
          <!-- <div class="col-lg-8 col-xl-6"> -->
            <div class="card border-top border-bottom border-3" style="border-color: var(--border-color-alt) !important;" >
              <div class="card-body p-5">
    
                <p class="lead fw-bold mb-5" style="color: var(--first-color);">Purchase Reciept</p>
    
                <div class="row">
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">Date</p>
                    <p>  ${userLoginOrder[i].orderDateTime}</p>
                  </div>
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">Order No.</p>
                    <p>${userLoginOrder[i].idOrder}</p>
                  </div>
                </div>
    
                <div class="mx-n5 px-5 py-4" style="background-color: #f2f2f2;">
               
                ${userLoginOrder[i].orderCart
                  .map(
                    (product) => `
                <div class="row">
                  <div class="col-md-8 col-lg-3">
                    <img src="${product.image}" alt="">
                  </div>
                  <div class="col-md-8 col-lg-6">
                    <p>${product.productTitle} x<span>${
                      product.quantity
                    }</span></p>
                  </div>
                  <div class="col-md-4 col-lg-3">
                    <p>$${(
                      parseFloat(product.newPrice) * product.quantity
                    ).toFixed(2)}</p>
                  </div>
                </div>
              `
                  )
                  .join("")}
                  <div class="row">
                    <div class="col-md-8 col-lg-9">
                      <p class="mb-0">Shipping</p>
                    </div>
                    <div class="col-md-4 col-lg-3">
                      <p class="mb-0">$0</p>
                    </div>
                  </div>
                </div>
    
                <div class="row my-4">
                  <div class="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                    <p class="lead fw-bold mb-0" style="color: var(--first-color);">$${pay}</p>
                  </div>
                </div>
    
                <p class="lead fw-bold mb-4 pb-2" style="color: var(--first-color);">Tracking Order</p>
    
                <div class="row">
                  <div class="col-lg-12">
    
                    <div class="horizontal-timeline">
    
                      <ul class="list-inline items d-flex justify-content-between">
                        <li class="list-inline-item items-list">
                          <p class="py-1 px-2 rounded text-white" style="background-color: var(--first-color);">pendding</p
                            class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">
                        </li>
                        <li class="list-inline-item items-list">
                          <p class="py-1 px-2 rounded text-white" style="background-color: var(--first-color);">Shipped</p
                            class="py-1 px-2 rounded text-white" style="background-color: #f37a27;">
                        </li>
                        <li class="list-inline-item items-list">
                          <p class="py-1 px-2 rounded text-white" style="background-color: var(--first-color);">On the way
                          </p>
                        </li>
                        <li class="list-inline-item items-list text-end" style="margin-right: 8px;">
                          <p style="margin-right: -8px;">Delivered</p>
                        </li>
                      </ul>
    
                    </div>
    
                  </div>
                </div>
    
                <p class="mt-4 pt-2 mb-0">Want any help? <a href="#!" style="color: var(--first-color);">Please contact
                    us</a></p>
    
              </div>
            </div>
          <!-- </div> -->
        <!-- </div> -->
      </div>

      `;

      readData.innerHTML += createElement;
    }
  }
}

function calcelOr(id) {
  let cancel = document.getElementById("cancelBody");
  cancel.innerHTML = "";
  for (let i = 0; i < userLoginOrder.length; i++) {
    if (userLoginOrder[i].idOrder == id) {
      let createElement = `
      <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cancel">Modal title</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure to cancel this order?
          </div>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-primary" onclick="cancelOrder(${userLoginOrder[i].idOrder})">Yes</button>
            <button  type="button" data-bs-dismiss="modal" class="btn btn-danger" >Keep Order</button>
          </div>
      </div>
      `;
      cancel.innerHTML += createElement;
    }
  }
}
function cancelOrder(id) {
  for (let i = 0; i < userLoginOrder.length; i++) {
    if (userLoginOrder[i].idOrder == id) {
      userLoginOrder[i].status = "cancel";
      localStorage.setItem("orders", JSON.stringify(getOrders));
      showOrder();
    }
  }
  //set background color for status
  let status = document.querySelectorAll(".employeeDetails td:nth-child(5)");
  for (let i = 0; i < status.length; i++) {
    if (status[i].innerHTML == "Canceled") {
      status[i].style.backgroundColor = "#f37a27";
    }
  }
  //CLOSE MODAL

  let myModalEl = document.getElementById("cancel");
  let modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
}
