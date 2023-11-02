let button = document.querySelector("#btnAdd");
let input = document.querySelector("#input");
let checkbox = document.querySelector("#chkBox");
let msg = document.querySelector(".msg");
let bottom = document.querySelector(".bottomd");
let ptext = document.querySelector(".ptext");
button.onclick = function () {
  checkInput();
};
let checkInput = () => {
  if (input.value == "") {
    msg.innerHTML = "Không được để trống";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  displayData();
};
let displayData = () => {
  bottom.innerHTML += `
    <div class="list-item">
        <input type="checkbox" name="" id="" />
        <p>${data["text"]}</p>
        <span class="title" ><i onclick="editItem(this)" class="fas fa-edit"></i></span>
        <span class="delete" ><i onclick="deleteItem(this)" class="fas fa-trash-alt"></i></span>
    </div>
  `;
  input.value = "";
};
let deleteItem = (e) => {
  e.parentElement.parentElement.remove();
};
let editItem = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
checkbox.addEventListener("change", function () {
  if (this.checked) {
    ptext.style.textDecoration = "line-through";
  } else {
    ptext.style.textDecoration = "none";
  }
});
