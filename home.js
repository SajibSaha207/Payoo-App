const validPin = 1234

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

// ["account-number","amount-to-widthdraw","account-pin"].forEach(id => document.getElementById(id).value = "");



console.log('balance')
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

})

//toggling feature

document.getElementById("add-button")
.addEventListener("click", function(e){
    document.getElementById("cash-out-parent").style.display = "none";

    document.getElementById("add-money-parent").style.display = "block";
  });  
document.getElementById("cash-out-button")
.addEventListener('click', function(){
    document.getElementById("add-money-parent").style.display = "none";
document.getElementById("cash-out-parent").style.display = "block";    

});