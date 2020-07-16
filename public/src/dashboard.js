
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }



  getName()
getMonthAndYear()
availableBalance()
recentIncome()
recentExpense()
totalExpenses()

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
  window.location.href = "../index.html"
}




// let expense = 0
let currentBalance = 0
function availableBalance(){
  let income = document.getElementById('income')

  const userId = localStorage.getItem('userId')
  
  firebase.firestore().collection('transactions')
  .where('type', '==' ,'income')
  .where('userId', '==' ,userId)
  .orderBy("date","desc")
  
  .get()
  .then(function(snapshot){
    // console.log('error' ,snapshot)
  
    // const userTransactions = snapshot.data()
    snapshot.forEach(function(doc){


      const data = doc.data()
      console.log(data)
      let consider =+ data.amount

      currentBalance = currentBalance + consider
      console.log(consider)

     let balance = document.getElementById("balance")
     balance.innerHTML = `RS ${currentBalance}`
     income.innerHTML = `RS ${currentBalance}`

    })

  })

}


function recentIncome() {
  const tableBody = document.getElementById('table-body')
  
  
  const userId =localStorage.getItem('userId')
  firebase.firestore().collection('transactions')
  
  .where('type', '==' ,'income')
  .where('userId', '==' ,userId)
  .orderBy("date","desc")
  .limit(5)
  .get()

  .then(function(snapshot){

    snapshot.forEach(function(doc){
      
      const data = doc.data()
      console.log(data)
     const tr = document.createElement('TR')
     const th = document.createElement('TH')
     th.setAttribute('scope','row')
     const td = document.createElement('TD')
     const td2 = document.createElement('TD')
     tr.appendChild(th)
     td.innerHTML = data.transactionCategory
     td2.innerHTML = data.amount
     tr.appendChild(td)
     tr.appendChild(td2)
     
     tableBody.appendChild(tr)
     

     


    })


  })
  
  // .then(function(snapshot){
  
    // const userTransactions = snapshot.data()
    // snapshot.forEach(function(doc){

    //   const data = doc.data()

    

}



function recentExpense() {
  const tableBody = document.getElementById('tableBody')
  
  
  const userId =localStorage.getItem('userId')
  firebase.firestore().collection('transactions')
  
  .where('type', '==' ,'expense')
  .where('userId', '==' ,userId)
  .orderBy("date","desc")
  .limit(5)
  .get()

  .then(function(snapshot){

    snapshot.forEach(function(doc){
      
      const data = doc.data()
      console.log(data)
     const tr = document.createElement('TR')
     const th = document.createElement('TH')
     th.setAttribute('scope','row')
     const td = document.createElement('TD')
     const td2 = document.createElement('TD')
     tr.appendChild(th)
     td.innerHTML = data.transactionCategory
     td2.innerHTML = data.amount
     tr.appendChild(td)
     tr.appendChild(td2)
     
     tableBody.appendChild(tr)
     

     


    })


  })
  
  // .then(function(snapshot){
  
    // const userTransactions = snapshot.data()
    // snapshot.forEach(function(doc){

    //   const data = doc.data()

    

}

let expense = 0
function totalExpenses() {
  let showExpense = document.getElementById('showExpense')

  const tableBody = document.getElementById('tableBody')
  
  
  const userId =localStorage.getItem('userId')
  firebase.firestore().collection('transactions')
  
  .where('type', '==' ,'expense')
  .where('userId', '==' ,userId)
  .orderBy("date","desc")
  .get()

  .then(function(snapshot){

    snapshot.forEach(function(doc){
      
      const data = doc.data()

      const allExpense =+ data.amount

      expense = expense + allExpense
      // console.log(expense)
      showExpense.innerHTML = `RS ${expense}`
      
     
     

     


    })


  })

}