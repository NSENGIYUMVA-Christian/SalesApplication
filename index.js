// setting up variables
//abc
const productName = document.getElementById("productName")
const productId = document.getElementById("productId")
const unitSold = document.getElementById("unitSold")
const pricePerUnit = document.getElementById("pricePerUnit")

const finishBtn = document.getElementById("finish-btn")
const clearBtn = document.getElementById("clear-btn")
let reportPara = document.getElementById("reportPara")
const savereport = document.getElementById("save-btn")

let output = ""


// developing finish button
finishBtn.addEventListener("click",function(e){
    e.preventDefault()
    render()

})
function render(){
    let pName = productName.value
    let pId = productId.value
    let untSold = unitSold.value
    let pricePunit = pricePerUnit.value
   
    
  let totalSales = untSold * pricePunit
  
  output += `Product Name : ${pName} <br>
                           Product Id : ${pId} <br>
                           Total unit sold : ${untSold} <br>
                           Price per unit : ${pricePunit} <br>
                           Total sales : ${totalSales} <br><br><br>`

 reportPara.innerHTML = output;   
 
//  let savedData =  localStorage.setItem("report",output)

//   console.log(savedData)
}

// saving report to database
// savereport.addEventListener("click",function(){
//   let savedData =  localStorage.setItem("report",JSON.stringify(output))

//   console.log(savedData)
// })

// developing clear button

clearBtn.addEventListener("click",function(e){
    e.preventDefault()
    productName.value = " "
    productId.value = " "
    unitSold.value = " "
    pricePerUnit.value = " "
    console.log("clearing button")
})