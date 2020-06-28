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
const tableDiv = document.getElementById("tableDiv")


const table = document.getElementById("table")
  tableDiv.appendChild(table)
table.setAttribute("class","table")
const thead = document.createElement("THEAD")
 table.appendChild(thead)


const tr =  document.createElement("TR")
tr.setAttribute("id","t-r")
  thead.appendChild(tr)
const th1 =  document.createElement("TH")






th1.innerHTML = "#"
th1.setAttribute("scope","col")
const th2 = document.createElement("TH")
th2.innerHTML = "Date"
th2.setAttribute("scope","col")
const th3 = document.createElement("TH")
th3.innerHTML = "Amount"
th3.setAttribute("scope","col")
const th4 = document.createElement("TH")
th4.innerHTML = "Category"
th4.setAttribute("scope","col")


tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)


let tableBody = document.createElement("TBODY")

let tableRow1 = document.createElement("TR")
  tableBody.appendChild(tableRow1)
let th11 = document.createElement("TH")
  tableRow1.appendChild(th11)
  th11.setAttribute("scope","row")


const td1 = document.createElement("TD")
th11.appendChild(td1)
td1.innerHTML = inputDate
const td2 = document.createElement("TD")
td2.innerHTML = inputAmount
th11.appendChild(td2)
const td3 = document.createElement("TD")
td3.innerHTML = mySelect
th11.appendChild(td3)


















}