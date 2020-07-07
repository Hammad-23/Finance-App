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

getTransactions()

function getName() {
  //   const data = localStorage.getItem("user")
  // const user2 = JSON.parse(data)
  //   // const name = JSON.parse( localStorage.getItem('user') )
   const userId =localStorage.getItem('userId')
   console.log(userId)

   firebase.firestore().collection('users').doc(userId).get()
   .then(function(snapshot){
     console.log(snapshot.data())

     const userObj = snapshot.data()
     
    const userName = document.getElementById("userName")
    userName.innerHTML = userObj.name


   }).catch(function(){


   })

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



// const inputAmount = document.getElementById("inputAmount").value

// const inputDate = document.getElementById("inputDate").value
// const inputDes = document.getElementById("inputDes").value
// const mySelect = document.getElementById("mySelect").value

// let tableBody = document.getElementById("tableBody")
// let tr = document.createElement("TR")
// let th = document.createElement("TH")
// th.setAttribute("scope","row")
// let td1 = document.createElement("TD")
// let td2 = document.createElement("TD")
// let td3 = document.createElement("TD")

// tableBody.appendChild(tr)
// tr.appendChild(th)
// tr.appendChild(td1)
// tr.appendChild(td2)
// tr.appendChild(td3)
 

// td1.innerHTML = inputDate
// td2.innerHTML = mySelect
// td3.innerHTML = inputAmount

const userId = localStorage.getItem('userId')
firebase.firestore().collection('transactions').add({
  amount: inputAmount,
  date: inputDate,
  transactionCategory: mySelect,
  description: inputDes,
  userId,
  type: 'Income'
  

}).then(function(){
alert("Transaction Saved.")

clearIncome()

getTransactions()

$('#incomeModal').modal('hide')

}).catch(function(error){

  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage)

})




}


function clearIncome(){


  
 document.getElementById("inputAmount").value = ''

 document.getElementById("inputDate").value = ''
 document.getElementById("inputDes").value = ''
 document.getElementById("mySelect").value = ''

}





function addExpense() {
  const userId =localStorage.getItem('userId')
  const amount = document.getElementById("expenseAmount").value
  const date = document.getElementById("expenseDate").value
  const time = document.getElementById("expenseTime").value
  const description = document.getElementById("expenseDescription").value

  firebase.firestore().collection('transactions').add({

    amount,
    date,
    time,
    description,
    userId,
    type: 'Expense'
  }).then(function(){
    alert('Transaction Saved.')
    clearExpense()
    $('#expenseModal').modal('hide')

  }).catch(function(error){
    alert(error.message)

  })



}


function clearExpense() {

  document.getElementById("expenseAmount").value = ''
   document.getElementById("expenseDate").value = ''
   document.getElementById("expenseTime").value = ''
   document.getElementById("expenseDescription").value = ''

}


function getTransactions(){

  firebase.firestore().collection('transactions').get()
  .then(function(snapshot){
  
    // const userTransactions = snapshot.data()
    snapshot.forEach(function(doc){

      const data = doc.data()


//       const inputAmount = document.getElementById("inputAmount").value

// const inputDate = document.getElementById("inputDate").value
// const inputDes = document.getElementById("inputDes").value
// const mySelect = document.getElementById("mySelect").value

let tableBody = document.getElementById("tableBody")
let tr = document.createElement("TR")
let th = document.createElement("TH")
th.setAttribute("scope","row")
let td1 = document.createElement("TD")
let td2 = document.createElement("TD")
let td3 = document.createElement("TD")

tableBody.appendChild(tr)
tr.appendChild(th)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)


 td1.innerHTML = data.date

  td2.innerHTML = data.transactionCategory
  td3.innerHTML = data.amount



    })
    
    
 
  
  
  }).catch(function(error){
  
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage)
  
  })

}