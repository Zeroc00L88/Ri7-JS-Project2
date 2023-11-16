const prompt = require("prompt-sync")();

const firstQuestion :string = "Combien font 2+2 ";
const firstA :string = "3";
const firstB :string = "4";
const firstC :string = "42";
const firstD :string = "La réponse D";

const secondQuestion :string = "De quel couleur est le ciel";
const secondA :string = "vert";
const secondB :string = "42";
const secondC :string = "bleu";
const secondD :string = "la réponse D";

const thirdQuestion :string = "Quel est le meilleur éditeur de code ? ";
const thirdA :string = "vscode";
const thirdB :string = "kate";
const thirdC :string = "sublimetext";
const thirdD :string = "neovim";

const fourthQuestion :string = "Quelle position occupe la terre en terme de proximité au Soleil ? ";
const fourthA :string = "3";
const fourthB :string = "8";
const fourthC :string = "4";
const fourthD :string = "12";

const fifthQuestion :string = "Qui a inventé l'école ? ";
const fifthA :string = "Mireille Mathieu" 
const fifthB :string = "Charlemagne"
const fifthC :string = "George Lucas"
const fifthD :string = "William Sauvage"

let userScore = 0;

function ask (question :string, a :string, b :string, c :string, d :string, goodAnswer :string) {
    console.log(question, "\n -> ", a, "\n -> ", b, "\n -> ", c, "\n -> ", d );
    let answer = prompt("Réponse : ");
    while(answer != a && answer != b && answer != c && answer != d) {
        answer = prompt("Rentrez une des réponses proposées : ")
    }
    if (answer == goodAnswer) {
        console.log("\n*************\nBonne réponse\n*************");
        userScore+=1;
    } else if (answer == "42") {
        console.log("42 est la réponse à La grande question sur la vie, l'univers et le reste");
        userScore+=1;
    } else {
        console.log("\n~~~~~~~~~~~~~~~~\nMauvaise réponse\n~~~~~~~~~~~~~~~~");
    }
    console.log("\n-----------------------\n");
    
};

ask(firstQuestion, firstA, firstB, firstC, firstD, firstB);
ask(secondQuestion, secondA, secondB, secondC, secondD, secondC);
ask(thirdQuestion, thirdA, thirdB, thirdC, thirdD, thirdD);
ask(fourthQuestion, fourthA, fourthB, fourthC, fourthD, fourthA);
ask(fifthQuestion, fifthA, fifthB, fifthC, fifthD, fifthB);

console.log("Votre score total :", userScore)
