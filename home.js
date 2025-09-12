const validPin = 1234

const transactionData = []

// //function to get input value
// function getInputValueNumber (id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     const inputFieldValueNumber = parseInt (inputFieldValue)
//     return inputFieldValueNumber
// }
// function getInputValue (id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     return inputFieldValue
// }

// //function to get innertext
// function getInnerText(id){
//     const element = document.getElementById(id)
//     const elementValue = element.innerText
//     const elementValueNumber = parseInt(elementValue)
//     return elementValueNumber
// }

document.getElementById("add-money-btn").addEventListener('click', function(e){
e.preventDefault()
console.log('clicked')

const bank = parseInt(document.getElementById("bank").value)
  const accountNumberField = document.getElementById("account-number");
// accountNumberField.addEventListener("input", function () {
//   const accountMsg = document.getElementById("account-msg");
  const accountNumber = accountNumberField.value.trim();
// });
const amount = parseInt(document.getElementById("amount-to-widthdraw").value)
const pin = parseInt(document.getElementById("account-pin" ).value)

const balance = parseInt(document.getElementById("balance" ).innerText)

// if (value.length === 11) {
//     accountMsg.textContent = "✅ 11 digit entered";
//     accountMsg.className = "text-green-600 font-bold";

if(accountNumber.length <11){
    alert("Please provide valid account number")
    return;
}

if(accountNumber ===" "){
    alert("Please enter Account Number")
    return;
}

if(pin !=validPin){
    alert("Please enter valid pin")
    return;
}

const totalBalance = amount + balance
document.getElementById("balance").innerText = totalBalance

const data = {
    name:"Add Money",
    Date: new Date().toLocaleTimeString()
}

transactionData.push(data)
console.log(transactionData)
 
})

// cash out
document.getElementById("withdraw-btn").addEventListener("click", function(e){
e.preventDefault()
 const amount = parseInt(document.getElementById("withdraw-amount").value)
   const agentNumberField = document.getElementById("agent-number");
    const agentNumber = agentNumberField.value.trim();
   const pin = parseInt(document.getElementById("agent-pin" ).value)
 const balance = parseInt(document.getElementById("balance").innerText)


 if(agentNumber.length <11){
    alert("Please provide valid agent number")
    return;
}

if(pin !=validPin){
    alert("Please enter valid pin")
    return;
}


const totalBalance = balance - amount
document.getElementById("balance").innerText = totalBalance

const data = {
    name:"Cash Out",
    Date: new Date().toLocaleTimeString()
}

transactionData.push(data)

console.log(transactionData)

})

document.getElementById("transaction-button").addEventListener("click", function(){

    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = ""

    for(const data of transactionData){

    const div = document.createElement("div")
    div.innerHTML=`
    <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#f4f5f7]" >
             <img src="./assets/wallet1.png" class="mx-auto " alt="">
        </div>
        <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.Date}</p>
        </div>
    </div>
    
    <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>
   `
   transactionContainer.appendChild(div)
    
    }
})

//function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

//function to toggle buttons
function handleButtonToggle(id){
  const formBtns = document.getElementsByClassName("form-btn")
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300")

    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


//toggling feature

document.getElementById("add-button")
.addEventListener("click", function(e){
    // const forms = document.getElementsByClassName("form")
    // for(const form of forms){
    //     form.style.display = "none"
    // }
 
    // // document.getElementById("cash-out-parent").style.display = "none";
    // // document.getElementById("transfer-money-parent").style.display = "none";
    // document.getElementById("add-money-parent").style.display = "block";

    handleToggle("add-money-parent")
    handleButtonToggle("add-button")

  
  });  
document.getElementById("cash-out-button")
.addEventListener('click', function(){
//     const forms = document.getElementsByClassName("form")
//     for(const form of forms){
//         form.style.display = "none"
//     }
//     // document.getElementById("add-money-parent").style.display = "none";
//     // document.getElementById("transfer-money-parent").style.display = "none";
// document.getElementById("cash-out-parent").style.display = "block";    
handleToggle("cash-out-parent")

handleButtonToggle("cash-out-button")
});

document.getElementById("transfer-button").addEventListener("click", function(){
    // const forms = document.getElementsByClassName("form")
    // for(const form of forms){
    //     form.style.display = "none"
    // }
    // // document.getElementById("add-money-parent").style.display = "none";
    // // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "block"; 
 handleToggle("transfer-money-parent")
 handleButtonToggle("transfer-button")

//  const formBtns = document.getElementsByClassName("form-btn")
//     for(const btn of formBtns){
//         btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
//         btn.classList.add("border-gray-300")
//     }

//     document.getElementById("transfer-button").classList.remove("border-gray-300")

//     document.getElementById("transfer-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})
//Get bonus
document.getElementById("bonus-button").addEventListener("click", function(){
//     const forms = document.getElementsByClassName("form")
//     for(const form of forms){
//         form.style.display = "none"
//     }

//  document.getElementById("Bonus-parent").style.display = "block"; 
 handleToggle("Bonus-parent")
 handleButtonToggle("bonus-button")

//  const formBtns = document.getElementsByClassName("form-btn")
//     for(const btn of formBtns){
//         btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
//         btn.classList.add("border-gray-300")
//     }

//     document.getElementById("bonus-button").classList.remove("border-gray-300")

//     document.getElementById("bonus-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
})

//pay bill
document.getElementById("bill-button").addEventListener("click", function(){
    handleToggle("pay-bill-parent")
     handleButtonToggle("bill-button")
})

//transaction
document.getElementById("transaction-button").addEventListener("click", function(){
    handleToggle("Transaction-parent")
     handleButtonToggle("transaction-button")
})
