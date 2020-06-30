// const user ={
//     name: "Hammad",

// }
// localStorage.setItem("user",JSON.stringify(user))

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

getName()
getMonthAndYear()
function getName() {
    const data = localStorage.getItem("user")
  const user2 = JSON.parse(data)
    // const name = JSON.parse( localStorage.getItem('user') )
    const userName = document.getElementById("userName")
    userName.innerHTML = user2.name
}

function getMonthAndYear() {
    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const monthElement = document.getElementById("month")
    const yearElement = document.getElementById("year")
    monthElement.value = currentMonth
    yearElement.value = currentYear
     
    // console.log(currentMonth)
}

function logOut() {
  window.localStorage.clear()
  window.location.href = "../../index.html"
}


function addIncome() {
// const column1 = document.getElementById("column1")
// const column2 = document.getElementById("column2")
// const column3 = document.getElementById("column3")


const inputAmount = document.getElementById("inputAmount").value
const inputDate = document.getElementById("inputDate").value
const inputDes = document.getElementById("inputDes").value
const mySelect = document.getElementById("mySelect").value
// column1.innerHTML = inputDate
// column3.innerHTML = inputAmount
// column2.innerHTML = mySelect
let tableBody = document.getElementById("tableBody")
let tr = document.createElement("TR")
let th = document.createElement("TH")
th.setAttribute("scope","row")
let td1 = document.createElement("TD")
let td2 = document.createElement("TD")
let td3 = document.createElement("TD")

tableBody.appendChild(tr)
tr.appendChild(th)
th.appendChild(td1)
th.appendChild(td2)
th.appendChild(td3)

td1.innerHTML = inputDate
td2.innerHTML = mySelect
td3.innerHTML = inputAmount
















}