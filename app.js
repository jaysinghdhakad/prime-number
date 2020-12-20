var newName = document.querySelector("#name")
var dob = document.querySelector("#date")
var outputNew = document.querySelector("#output")
var compilationBttn = document.querySelector("#button")


function clickHandler(){
    var userName = newName.value;
    var dateOB= dob.value;
    var strn= dateOB.substring(0,2)
    var newDOB = parseInt(strn,10)
    var prime= true
    primeFounder(newDOB)
    function primeFounder(newDOB){
        if (newDOB===1){
            prime = false
           
        }
        else{
            
            for(i=2;i<newDOB;i++){
                if(newDOB%i===0){
                    prime = false
                   
                  
                }
            }
            
         }
       if(prime){
           outputNew.innerText= userName + ", you are born on a prime date"
       }
       else{
        outputNew.innerText= userName + ", you are not born on a prime date"

       }

    }
   
    

}

compilationBttn.addEventListener("click", clickHandler)