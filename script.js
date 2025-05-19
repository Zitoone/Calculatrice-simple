let result = document.querySelector("input")

// let nb1 = ""
// let nb2 = ""

const numbers = document.querySelectorAll('.numbers')
// console.log(numbers)
for(const number of numbers){
    number.addEventListener('click', ()=>{
        let nb = number.value
        console.log(nb)
    })
}
const operators = document.querySelectorAll('.operators')
for(const operator of operators){    
    operator.addEventListener('click', () =>{
        let op = operator.value
        console.log(op)
    })
}



// numbers.forEach(number => {
//     number.addEventListener('click',() => {
//         number.value = nb1
//     })
//     console.log(nb1)
    
// });




// let result = 0;
// let operator = document.querySelector("#opérateur");


// let info =document.querySelector("h1");


// function calcul(){
//     let nb1 = Number(document.querySelector("#nb1").value);
//     let nb2 = Number(document.querySelector("#nb2").value);      
//     switch(operator.value){


//         case "+":
//             result=nb1+nb2;
//             info.append(`${nb1} + ${nb2} = ${result} `);
//             break;
//         case "-":
//             result=nb1-nb2;
//             info.append(`${nb1} - ${nb2} = ${result} `);
//             break;
//         case "x":
//             result=nb1*nb2;
//             info.append(`${nb1} X ${nb2} = ${result} `);
//             break;
//         case "/":
//             result=nb1/nb2;
//             info.append(`${nb1} / ${nb2} = ${result} `);
//             break;
//         default:
//             info.innerText="Entrée invalide";
//     }      
// };


// let send = document.querySelector("#send");
// send.addEventListener("click", (e) =>{
//     e.preventDefault();
//     calcul();
//     nb1.value='';
//     nb2.value=''
// });


