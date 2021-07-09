let a="aaaaaaaaaaaaaa"


console.log(a)


let objectH1 = document.querySelector("h1")

console.log(objectH1.innerText)

objectH1.innerText = "Kurs Kava Script"

objectH1.textContent = "Kurs cd."

console.log(true)

if (true){
    console.log("OK")
}


function multipy(num1,num2){
    result = num1 * num2;
    return result;
}

console.log(multipy(2,30));

objectH1.onclick = function(){
    alert("Właśnie kliknąłeś h1")
}