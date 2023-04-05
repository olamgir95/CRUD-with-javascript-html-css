let container = document.getElementById("body2");
let inputname = document.getElementById("name");
let inputemail = document.getElementById("email");
let inputnumber = document.getElementById("phonenumber");
let button = document.querySelector(".btnjs");
let search = document.querySelector("#search");

let arr = [
  { id: 1, name: "Mount", email: "Mount@gmail.com", phone: "+998991611911" },
  { id: 2, name: "Anna", email: "Anna@gmail.com", phone: "+998991174111" },
  { id: 3, name: "Ella", email: "Ella@gmail.com", phone: "+998991111156" },
  { id: 4, name: "Harry", email: "Harry@gmail.com", phone: "+998991111189" },
  { id: 5, name: "Hazard", email: "Hazard@gmail.com", phone: "+998991111167" },
];

function getUser() {
  let user = "";
  user = ` <div class="user"> <div class="users" >${arr.length} Users</div></div>`;
  arr.map((value, index) => {
    user += `<div class="section">
    
        <div class="num">${index + 1}</div>
        <div class="num">${value.name}</div>
        <div class="num">${value.email}</div>
        <div class="num">${value.phone}</div>
        <div class="num"> 
            <i onclick='updateUser(${
              value.id
            })' class="fa-solid fa-arrow-rotate-left arrow iii"></i>
           <i onclick='deleteUser(${
             value.id
           })' class="fa-solid fa-trash-can trash iii"></i> 
        </div>
    </div>`;
  });

  container.innerHTML = user;
}
getUser();

function deleteUser(userid) {
  let newArr = arr.filter((value) => userid !== value.id);
  alert(`Are you sure you want to delete this user?`);
  arr = newArr;
  getUser();
}

function addUser() {
  let adduser = {
    id: arr.length + 1,
    name: inputname.value,
    email: inputemail.value,
    phone: inputnumber.value,
  };
  isNaN(inputname.value) &&
    inputemail.value.includes("@") &&
    true != isNaN(inputnumber.value) &&
    inputnumber.value != "" &&
    (arr = [...arr, adduser]);
  getUser();
  console.log(adduser);
}
function updateUser(id) {
  arr.map((value) => {
    if (id === value.id)
      new Promise((res, rej) => {
        value.name  = prompt("Enter a new name");
        value.email  = prompt("Enter a new email");
        value.phone  = prompt("Enter a new phone number")
          res()
      });
    getUser();
  });
}

button.addEventListener("click", async () => {
  addUser();
  getUser();
  inputname.value = "";
  inputemail.value = "";
  inputnumber.value = "";
});

let arrclone = arr;
search.addEventListener("input", (e) => {
  let x = e.target.value;

  let newArr = arr.filter((value) => {
    return value.name.toLocaleLowerCase().includes(x.toLocaleLowerCase());
  });
  arr = newArr;
  if (search.value == "") arr = arrclone;

  getUser();
});
