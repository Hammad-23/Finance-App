


console.log(firebase.firestore)
function signUp() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value


    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userResponse){

      console.log(userResponse)
      const userId = userResponse.user.uid

      // firebase.firestore().collection('users').add({
        firebase.firestore().collection('users').doc(userId).set({
        name,
        email,
        age
      }).then(function(){
        alert("Successfully Registered!")
        window.location.href = "index.html"

      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)

     

      })
    
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
     
    

    });


    let user = {
        name: name,
        
    }
  localStorage.setItem("user",JSON.stringify(user))
  const data = localStorage.getItem("user")
  const user2 = JSON.parse(data)
  


}


function logIn() {
  
const userEmail = document.getElementById("userEmail").value
const userPass = document.getElementById("userPass").value

firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then(function(userResponse){

  console.log(userResponse)
  const userId = userResponse.user.uid
  localStorage.setItem('userId',userId)

  alert("Successfully Logged In")
  window.location.href = "src/transaction/transaction.html"
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage)
});

// const data = localStorage.getItem("user")
//   const user2 = JSON.parse(data)
// if(userEmail===user2.email && userPass===user2.password){
//     alert("log in successfully")
//    
// }


}