
// joueur 1 et joueur 2;
let nbJetonJoueur = 10
let nbJetonPc = 10
let iteration = 0
const prompt = require("prompt-sync")({ sigint: true });
while (nbJetonJoueur > 0 && nbJetonPc >0){
    let tour
    console.log("iteration numero : " + iteration)
    if (iteration % 2 == 0){
        console.log("c'est votre tour joeur ")
        do {
            tour = Number(prompt("choisir un nombre : "));
        }while(tour<0 || tour>nbJetonJoueur);
        // pc joue 
        let guessPc = (Math.floor(Math.random() * 3) %2 == 0) ? "pair" : "impair";
        console.log("le pc a chosit")

        if ((tour % 2  == 0 && guessPc == "pair") || (tour % 2  == 1 && guessPc == "impair")){
            nbJetonJoueur = nbJetonJoueur - tour;
            nbJetonPc = nbJetonPc + tour;
        }else {
            nbJetonPc  = nbJetonPc - tour;
            nbJetonJoueur = nbJetonJoueur + tour;
        }

        console.log("tour finit avec score : ")
        console.log("joueur : "+ nbJetonJoueur + " pc : "+ nbJetonPc)
    }else{
        console.log("c'est votre tour du pc ")

        tour = Math.floor(Math.random() * nbJetonPc);
        console.log("Pc a choisit c'est a vous joeur de dire :  ")
        
        let guessJoueur = String(prompt("dire pair ou impair"));
        
        if ((tour % 2  == 0 && guessJoueur == "pair") || (tour % 2  == 1 && guessJoueur == "impair")){
            nbJetonJoueur = nbJetonJoueur + tour;
            nbJetonPc = nbJetonPc - tour;
        }else {
            nbJetonPc  = nbJetonPc + tour;
            nbJetonJoueur = nbJetonJoueur - tour;
        }

        console.log("tour finit avec score : ")
        console.log("joueur : "+ nbJetonJoueur + " pc : "+ nbJetonPc)
    }
    iteration++;
}
if (nbJetonJoueur > 0){
    console.log("joueur gagne")
}else{
    console.log("pc gagne")
}

