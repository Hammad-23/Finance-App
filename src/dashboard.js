
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }



  getName()
getMonthAndYear()
availableBalance()

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





let currentBalance = 0
function availableBalance(){

  const userId = localStorage.getItem('userId')
  
  firebase.firestore().collection('transactions')
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

    })

  })

}


