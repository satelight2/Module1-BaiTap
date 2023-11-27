function managePage() {
  let text = "";
  for (let i = 0; i < users.length; i++) {
    let acctive = users[i].status == 1 ? "Active" : "Not Active";
    let btn = users[i].status == 1 ? "Ban" : "Unban";
    text += `
    <tr>
   
    <td>${users[i].name}</td>
    <td>${users[i].email}</td>
    <td>${acctive}</td>
    <td><button class="btn btn--sm" onclick="changeActive(${users[i].id})">${btn}</button></td>
  
    <td>
        <button class="btn btn--sm" onclick="deleteUser(${users[i].id})">Delete</button>
    </td>
</tr>
    `;
  }
  document.getElementById("manage").innerHTML = text;
}
managePage();
function changeActive(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i].status = users[i].status == 1 ? 0 : 1;
      localStorage.setItem("users", JSON.stringify(users));
      managePage();
    }
  }
}
function deleteUser(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users.splice(i, 1);
      localStorage.setItem("users", JSON.stringify(users));
      managePage();
    }
  }
}
var form = document.getElementById("myForm"),
  imgInput = document.querySelectorAll(".img")[0],
  imgInput1 = document.querySelectorAll(".img")[1],
  file = document.getElementById("imgInput"),
  file1 = document.getElementById("imgInput1"),
  productName = document.getElementById("name"),
  stock = document.getElementById("stock"),
  newPrice = document.getElementById("newPrice"),
  oldPrice = document.getElementById("oldPrice"),
  badge = document.getElementById("badge"),
  category = document.getElementById("category"),
  sDate = document.getElementById("sDate"),
  submitBtn = document.querySelector(".submit"),
  userInfo = document.getElementById("data"),
  modal = document.getElementById("userForm"),
  modalTitle = document.querySelector("#userForm .modal-title"),
  newUserBtn = document.querySelector(".newUser");

let getData = JSON.parse(localStorage.getItem("products")) || { data: [] };

let isEdit = false,
  editId;
showInfo();

newUserBtn.addEventListener("click", () => {
  (submitBtn.innerText = "Submit"), (modalTitle.innerText = "Fill the Form");
  isEdit = false;
  imgInput.src = "./image/Profile Icon.webp";
  imgInput1.src = "./image/Profile Icon.webp";
  form.reset();
});

file.onchange = function () {
  if (file.files[0].size < 1000000) {
    // 1MB = 1000000
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result;
      imgInput.src = imgUrl;
    };

    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert("This file is too large!");
  }
};
file1.onchange = function () {
  if (file1.files[0].size < 1000000) {
    // 1MB = 1000000
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result;
      imgInput1.src = imgUrl;
    };

    fileReader.readAsDataURL(file1.files[0]);
  } else {
    alert("This file is too large!");
  }
};

function showInfo() {
  document
    .querySelectorAll(".employeeDetails")
    .forEach((info) => info.remove());
  getData.data.forEach((element, index) => {
    // console.log("elementtttttttttttttttttttt", element.id);
    // console.log("index", index);
    let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.image}" alt="" width="80" height="80"></td>
            <td><img src="${
              element.imageBackface
            }" alt="" width="80" height="80"></td>
            <td>${element.productTitle}</td>
            <td>${element.stock}</td>
            <td>${element.newPrice}</td>
            <td>${element.oldPrice}</td>
            <td>${element.badge}</td>
            <td>${element.category}</td>
            <td>${element.startDate}</td>


            <td>
                <button class=" btn-success" onclick="readInfo('${
                  element.image
                }','${element.imageBackface}' ,'${element.productTitle}', '${
      element.stock
    }', '${element.newPrice}', '${element.oldPrice}', '${element.badge}', '${
      element.category
    }', '${
      element.startDate
    }')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class=" btn-primary" onclick="editInfo(${
                  element.id
                })" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class=" btn-danger" onclick="deleteInfo(${
                  element.id
                })"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`;

    userInfo.innerHTML += createElement;
  });
}
showInfo();

function readInfo(
  pic,
  pic1,
  name,
  stock,
  newPrice,
  oldPrice,
  badge,
  category,
  sDate
) {
  (document.querySelector(".showImg").src = pic),
    (document.querySelector(".showImg1").src = pic1),
    (document.querySelector("#showName").value = name),
    (document.querySelector("#showStock").value = stock),
    (document.querySelector("#showNewPrice").value = newPrice),
    (document.querySelector("#showOldPrice").value = oldPrice),
    (document.querySelector("#showBadge").value = badge),
    (document.querySelector("#showCategory").value = category),
    (document.querySelector("#showsDate").value = sDate);
}

// function editInfo(id) {
//   isEdit = true;
//   // editId = index;
//   for (let i = 0; i < getData.data.length; i++) {
//     if (getData.data[i].id == id) {
//       imgInput.src = getData.data[i].image;
//       imgInput1.src = getData.data[i].imageBackface;
//       productName.value = getData.data[i].productTitle;
//       stock.value = getData.data[i].stock;
//       newPrice.value = getData.data[i].newPrice;
//       oldPrice.value = getData.data[i].oldPrice;
//       badge.value = getData.data[i].badge;
//       category.value = getData.data[i].category;
//       sDate.value = getData.data[i].startDate;
//     }
//   }
//   submitBtn.addEventListener("click", () => {
//     const newData = {
//       id: id,
//       image:
//         imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
//       imageBackface:
//         imgInput1.src == undefined
//           ? "./image/Profile Icon.webp"
//           : imgInput1.src,
//       productTitle: productName.value,
//       stock: stock.value,
//       newPrice: newPrice.value,
//       oldPrice: oldPrice.value,
//       badge: badge.value,
//       category: category.value,
//       startDate: sDate.value,
//     };
//     console.log("Before splice:", getData.data);

//     // Update the data in getData.data array using splice
//     getData.data.splice(index, 1, newData);

//     // Log the array after the splice operation
//     console.log("After splice:", getData.data);

//     // Update LocalStorage or perform other necessary actions
//     updateLocalStorage();
//   });

//   // const newData = {
//   //   id: id,
//   //   image:
//   //     imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
//   //   imageBackface:
//   //     imgInput1.src == undefined ? "./image/Profile Icon.webp" : imgInput1.src,
//   //   productTitle: productName.value,
//   //   stock: stock.value,
//   //   newPrice: newPrice.value,
//   //   oldPrice: oldPrice.value,
//   //   badge: badge.value,
//   //   category: category.value,
//   //   startDate: sDate.value,
//   // };
//   // console.log("newData", newData);

//   // submitBtn.innerText = "Update";
//   // modalTitle.innerText = "Update The Form";
// }
function editInfo(id) {
  isEdit = true;
  editId = id;
  for (let i = 0; i < getData.data.length; i++) {
    if (getData.data[i].id == id) {
      imgInput.src = getData.data[i].image;
      imgInput1.src = getData.data[i].imageBackface;
      productName.value = getData.data[i].productTitle;
      stock.value = getData.data[i].stock;
      newPrice.value = getData.data[i].newPrice;
      oldPrice.value = getData.data[i].oldPrice;
      badge.value = getData.data[i].badge;
      category.value = getData.data[i].category;
      sDate.value = getData.data[i].startDate;
    }
  }
}

function deleteInfo(id) {
  // console.log("iddelete", id);
  if (confirm("Are you sure want to delete?")) {
    for (let i = 0; i < getData.data.length; i++) {
      // console.log("getData.data[i].id tren", getData.data[i].id);

      if (getData.data[i].id == id) {
        // console.log("getData.data[i].id", getData.data[i].id);
        getData.data.splice(i, 1);
        updateLocalStorage();
        showInfo();
      }
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const information = {
    id: Math.floor(Math.random() * 1000),
    image:
      imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
    imageBackface:
      imgInput1.src == undefined ? "./image/Profile Icon.webp" : imgInput1.src,
    productTitle: productName.value,
    stock: stock.value,
    newPrice: newPrice.value,
    oldPrice: oldPrice.value,
    badge: badge.value,
    category: category.value,
    startDate: sDate.value,
  };

  if (!isEdit) {
    getData.data.push(information);
    updateLocalStorage();
  } else {
    isEdit = false;
    for (let i = 0; i < getData.data.length; i++) {
      if (getData.data[i].id == editId) {
        getData.data.splice(i, 1, information);
      }
    }
    updateLocalStorage();
  }

  submitBtn.innerText = "Submit";
  modalTitle.innerHTML = "Fill The Form";

  showInfo();
  //update product after add new product

  form.reset();

  //close form after submit
  var myModalEl = document.getElementById("userForm");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();

  imgInput.src = "./image/Profile Icon.webp";
  imgInput1.src = "./image/Profile1 Icon.webp";
});
// Update LocalStorage with the latest products data
function updateLocalStorage() {
  localStorage.setItem("products", JSON.stringify(getData));
}

function populateOrdersTable() {
  let ordersData = JSON.parse(localStorage.getItem("orders")) || { data: [] };
  const tableBody = document.getElementById("manageOrdersTable");
  tableBody.innerHTML = ""; // Clear existing content
  let text = "";
  for (let i = 0; i < ordersData.length; i++) {
    let pay = 0;
    for (let j = 0; j < ordersData[i].orderCart.length; j++) {
      pay +=
        ordersData[i].orderCart[j].quantity *
        ordersData[i].orderCart[j].newPrice;
    }

    // Define a function to get the text color based on the status
    function getStatusColor(status) {
      switch (status.toLowerCase()) {
        case "pending":
          return "orange";
        case "pending complete":
          return "blue";
        case "delivered":
          return "green";
        case "cancel":
          return "red";
        default:
          return "black"; // Default color
      }
    }

    text += `
      <tr>
        <td>${ordersData[i].idOrder}</td>
        <td>${ordersData[i].orderDateTime}</td>
        <td style="color: ${getStatusColor(ordersData[i].status)}">${
      ordersData[i].status
    }</td>
        <td>$${pay}</td>
        <td>
          <div class="dropdown">
            <button class="btn btn--sm dropdown-toggle" type="button" id="statusDropdown${i}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Change Status
            </button>
            <div class="dropdown-menu" aria-labelledby="statusDropdown${i}">
              <a class="dropdown-item" href="#" style="color: ${getStatusColor(
                "Pending"
              )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Pending')">Pending</a>
              <a class="dropdown-item" href="#" style="color: ${getStatusColor(
                "Pending Complete"
              )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Pending Complete')">Pending Complete</a>
              <a class="dropdown-item" href="#" style="color: ${getStatusColor(
                "Delivered"
              )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Delivered')">Delivered</a>
              <a class="dropdown-item" href="#" style="color: ${getStatusColor(
                "Cancel"
              )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Cancel')">Cancel</a>
            </div>
          </div>
          <button class="btn btn--sm" data-bs-toggle="modal" data-bs-target="#readOrder" onclick="viewOrderDetails(${
            ordersData[i].idOrder
          })">View</button>
        </td>
      </tr>
    `;
  }
  tableBody.innerHTML = text;
}

// Function to view order details (replace this with your actual implementation)

function applyOrderFilter() {
  const selectedStatus = document.getElementById("orderStatusFilter").value;

  // Filter orders based on the selected status
  const filteredOrders =
    selectedStatus === "all"
      ? ordersData
      : ordersData.filter(
          (order) => order.status.toLowerCase() === selectedStatus
        );

  // Repopulate the table with filtered data
  populateOrdersTable(filteredOrders);
}

// Call the function to populate the table when the page loads
populateOrdersTable();

function changeStatus(id, newStatus) {
  let ordersData = JSON.parse(localStorage.getItem("orders")) || { data: [] };

  for (let i = 0; i < ordersData.length; i++) {
    if (ordersData[i].idOrder == id) {
      ordersData[i].status = newStatus;

      // Save the updated ordersData to localStorage
      localStorage.setItem("orders", JSON.stringify(ordersData));

      // Repopulate the orders table with the updated data
      populateOrdersTable();
    }
  }
}
function applyOrderFilter() {
  let selectedStatus = document
    .getElementById("orderStatusFilter")
    .value.toLowerCase();
  let filteredOrders = [];

  if (selectedStatus === "all") {
    // Show all orders
    filteredOrders = JSON.parse(localStorage.getItem("orders")) || { data: [] };
  } else {
    // Filter orders based on the selected status
    let allOrders = JSON.parse(localStorage.getItem("orders")) || { data: [] };
    filteredOrders = allOrders.filter(
      (order) => order.status.toLowerCase() === selectedStatus
    );
  }

  // Update the displayed orders table with the filtered data
  updateOrdersTable(filteredOrders);
}

function updateOrdersTable(ordersData) {
  const tableBody = document.getElementById("manageOrdersTable");
  tableBody.innerHTML = ""; // Clear existing content
  let text = "";

  for (let i = 0; i < ordersData.length; i++) {
    let pay = 0;
    for (let j = 0; j < ordersData[i].orderCart.length; j++) {
      pay +=
        ordersData[i].orderCart[j].quantity *
        ordersData[i].orderCart[j].newPrice;
    }

    // Continue with the rest of your table row rendering logic
    text += `
      <tr>
        <td>${ordersData[i].idOrder}</td>
        <td>${ordersData[i].orderDateTime}</td>
        <td style="color: ${getStatusColor(ordersData[i].status)}">${
      ordersData[i].status
    }</td>
        <td>$${pay}</td>
        
        <td>
        <div class="dropdown">
          <button class="btn btn--sm dropdown-toggle" type="button" id="statusDropdown${i}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Change Status
          </button>
          <div class="dropdown-menu" aria-labelledby="statusDropdown${i}">
            <a class="dropdown-item" href="#" style="color: ${getStatusColor(
              "Pending"
            )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Pending')">Pending</a>
            <a class="dropdown-item" href="#" style="color: ${getStatusColor(
              "Pending Complete"
            )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Pending Complete')">Pending Complete</a>
            <a class="dropdown-item" href="#" style="color: ${getStatusColor(
              "Delivered"
            )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Delivered')">Delivered</a>
            <a class="dropdown-item" href="#" style="color: ${getStatusColor(
              "Cancel"
            )}" onclick="changeStatus(${
      ordersData[i].idOrder
    }, 'Cancel')">Cancel</a>
          </div>
        </div>
        <button class="btn btn--sm" data-bs-toggle="modal" data-bs-target="#readOrder" onclick="viewOrderDetails(${
          ordersData[i].idOrder
        })">View</button>
      </td>
        </td>
      </tr>
    `;
  }

  tableBody.innerHTML = text;
}

// Function to get the text color based on the status
function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "pending":
      return "orange";
    case "pending complete":
      return "blue";
    case "delivered":
      return "green";
    case "cancel":
      return "red";
    default:
      return "black"; // Default color
  }
}

// Initial population of the orders table
populateOrdersTable();

function viewOrderDetails(id) {
  let userLoginOrder = JSON.parse(localStorage.getItem("orders")) || {
    data: [],
  };
  let userList = JSON.parse(localStorage.getItem("users")) || { data: [] };

  let readData = document.getElementById("readOrderBody");
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

      for (let k = 0; k < userList.length; k++) {
        if (userList[k].id == userLoginOrder[i].idUser) {
          text = userList[k].name;
        }
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
                <div class="row">
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">Name Customer</p>
                    <p>  ${text}</p>
                  </div>
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">To Address</p>
                    <p>${userLoginOrder[i].address}</p>
                  </div>
                
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">City</p>
                    <p>  ${userLoginOrder[i].city}</p>
                  </div>
                  <div class="col mb-3">
                    <p class="small text-muted mb-1">email</p>
                    <p>${userLoginOrder[i].email}</p>
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
