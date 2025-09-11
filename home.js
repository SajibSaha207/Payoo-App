document.getElementById("add-money-btn").addEventListener('click', function(e){
e.preventDefault()
console.log('clicked')

const bank = parseInt(document.getElementById("bank").value)
const accountNumber = parseInt(document.getElementById("account-number").value)
const amount = parseInt(document.getElementById("amount-to-widthdraw").value)
const pin = parseInt(document.getElementById("account-pin" ).value)

const balance = parseInt(document.getElementById("balance" ).innerText)

const totalBalance = amount + balance
document.getElementById("balance").innerText = totalBalance


console.log('balance')
})