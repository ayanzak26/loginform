function genrateOTP(){
    const Genrate = Math.floor(10000+Math.random()*90000);
    alert(Genrate);
    window.localStorage.setItem("OTp",Genrate);
}
function ValidedOTp(){
    const validotp = document.querySelector("#validOTP").value;

     const otp = window.localStorage.getItem("OTp");
     if(validotp == otp){
        window.location.href="verify.html";
     }
     else{
        alert("Invalid OTP");
     }
}