// login button

document.getElementById("login-btn")
.addEventListener("click", function(){
    event.preventDefault(); 
    
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobileNumeberValue = document.getElementById("mobile-number" ).value 
    const mobileNumeberValueConverted = parseInt (mobileNumeberValue)
    const pinNumeberValue = document.getElementById("pin-number" ).value 
    const pinNumeberValueConverted = parseInt (pinNumeberValue)

//  console.log(mobileNumeberValueConverted, pinNumeberValueConverted)
if (mobileNumeberValueConverted === mobileNumber && pinNumeberValueConverted === pinNumber){
window.location.href="./home.html"
}
else{
    alert("Invalid Number or Pin !!")
}
})