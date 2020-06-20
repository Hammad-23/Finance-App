

function signUp() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    let user = {
        name: name,
        email: email,
        password: password
    }
  localStorage.setItem("user",JSON.stringify(user))
  const data = localStorage.getItem("user")
  const user2 = JSON.parse(data)
  window.location.href = "index.html"


}


function logIn() {
  
const userEmail = document.getElementById("userEmail").value
const userPass = document.getElementById("userPass").value
const data = localStorage.getItem("user")
  const user2 = JSON.parse(data)
if(userEmail===user2.email && userPass===user2.password){
    alert("log in successfully")
    window.location.href = "src/transaction/transaction.html"
}


}