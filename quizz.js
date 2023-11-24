const prompt = require("prompt-sync")();

class QuestionAnswer {
    constructor(question, a, b, c, d, ga) {
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.ga = ga;
    }
    ask() {
        console.log(
            this.question,
            "\na -> ",
            this.a,
            "\nb -> ",
            this.b,
            "\nc -> ",
            this.c,
            "\nd -> ",
            this.d,
        );
        let answer = prompt(
            "Rentrez une des réponses proposées (a, b, c, ou d uniquement) : ",
        );
        while (
            answer != "a" &&
            answer != "b" &&
            answer != "c" &&
            answer != "d" &&
            answer != "42"
        ) {
            answer = prompt(
                "Rentrez une des réponses proposées (a, b, c, ou d uniquement) : ",
            );
        }
        if (answer == this.ga) {
            console.log("\n*************\nBonne réponse\n*************");
            userScore += 1;
        } else if (answer == "42") {
            console.log(
                "42 est la réponse à La grande question sur la vie, l'univers et le reste",
            );
            userScore += 1;
        } else {
            console.log(
                "\n~~~~~~~~~~~~~~~~\nMauvaise réponse\n~~~~~~~~~~~~~~~~\n\nLa bonne réponse était la réponse :",
                this.ga,
            );
        }
        console.log("\n-----------------------\n");
    }
}

const questionA = new QuestionAnswer(
    "Combien font 2+2",
    "3",
    "4",
    "42",
    "La réponse D",
    "b",
);

const questionB = new QuestionAnswer(
    "De quel couleur est le ciel",
    "vert",
    "bleu",
    "rouge",
    "la réponse D",
    "b",
);

const questionC = new QuestionAnswer(
    "Quel est le meilleur éditeur de code ? ",
    "vscode",
    "kate",
    "sublimetext",
    "neovim",
    "d",
);

const questionD = new QuestionAnswer(
    "Quelle position occupe la terre en terme de proximité au Soleil ? ",
    "3",
    "8",
    "4",
    "12",
    "a",
);

const questionE = new QuestionAnswer(
    "Qui a inventé l'école ? ",
    "Charlemagne",
    "George Lucas",
    "William Sauvage",
    "Mireille Mathieu",
    "a",
);

let userScore = 0;

questionA.ask();
questionB.ask();
questionC.ask();
questionD.ask();
questionE.ask();

console.log("Votre score total :", userScore);
