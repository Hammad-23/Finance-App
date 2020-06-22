
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
  window.location.href = "../index.html"
}