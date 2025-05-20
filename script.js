let ecran = document.querySelector("#ecran")
let nb1 = 0;
let nb2 = 0;
let op = null;

const boutons = document.querySelectorAll('.boutons')
boutons.forEach(bouton =>{
    bouton.addEventListener('click', ()=>{
        let valeur = bouton.value
        tableauOperateurs = ["+", "-", "/", "*"]
        if(valeur == tableauOperateurs[i]){
            
            tableauOperateurs.forEach(operateur =>{
                op == operateur
                ecran.value = valeur
            })
        }
        if(op == null && nb1 != 0){
            nb1 += valeur 
            ecran.value += valeur
        }      
        if(op != null && valeur != "=") {
            nb2 += valeur
            ecran.value += valeur
        }
        if(valeur == "=" && nb2 != 0){
            calcul(op, nb1, nb2)
            ecran.value = valeur
        }   
    })
})


function calcul(op, nb1, nb2){
    // let result;
        if(op == "+"){
            return valeur = nb1 + nb2
        } else if (op == "-"){
            return valeur = nb1 - nb2
        } else if (op == "/"){
            return valeur = nb1 / nb2
        } else if (op == "*"){
            return valeur = nb1 * nb2
        } else {
            return result = "Erreur"
        }
}

const raz = document.querySelector(".clear");
raz.addEventListener('click', ()=>{
    ecran.value = ""
})



// const boutons = document.querySelectorAll('.boutons')
// boutons.forEach(bouton =>{
//     bouton.addEventListener('click', ()=>{
//         let valeur = bouton.value
//         if(valeur == "+" && nb1 != 0){
//             op = "+"
//             ecran.value += valeur
//         }
//         if(op == null){
//             nb1 += valeur 
//             ecran.value += valeur
//         } 
//         if(op != null && valeur != "+" && valeur != "=") {
//             nb2 += valeur
//             ecran.value += valeur
//         }
//         if(valeur == "=" && nb2 != 0){
//             valeur = Number(nb1) + Number(nb2)
//             ecran.value = valeur
//         } 
//     })
// })