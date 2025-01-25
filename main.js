const generatorTab = document.querySelector(".nav-gene");
const scannerTab = document.querySelector(".nav-scan");

generatorTab.addEventListener("click", ()=> {
    generatorTab.classList.add("active");
    scannerTab.classList.remove("active");

    document.querySelector(".scanner").style.display="none";
    document.querySelector(".generator").style.display ="block";
})
 

const generatorDiv = document.querySelector(".generator");
const generateBtn = generatorDiv.querySelector(".generator-form button");
const qrInput = generatorDiv.querySelector("#inputval");
let inputval=document.querySelector("#inputval")

const qrImg = generatorDiv.querySelector(".generator-img img");
const downloadBtn = generatorDiv.querySelector(".generator-btn .btn-link");

let imgURL = '';


let btn1=document.querySelector("#formbtn").addEventListener("click",()=>{
    
        let qrValue = inputval.value;
        if (!qrValue.trim()) return; 
    
       alert("Click OK for QR generation..")
        
    
        imgURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
        qrImg.src = imgURL;
    
        // btn1.innerText = "Generate QR Code";
        qrImg.addEventListener("load", () => {
        generatorDiv.classList.add("active");
        formbtn.innerText = "Generate QR Code"
    })
})




