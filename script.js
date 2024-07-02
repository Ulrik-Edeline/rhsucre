const scenario = {
    introduction: {
        text: `Vous êtes candidat de "Domino RH", une entreprise de travail temporaire. Vous avez l'opportunité d'explorer deux rôles différents : Ressources Humaines (RH) et Commercial à travers notre jeu “Deviens maître de ton destin professionnel”. À chaque étape, vos choix détermineront votre orientation professionnelle et influenceront le déroulement du scénario.`,
        next: "morning1"
    },
    morning1: {
        text: "Vous arrivez au bureau pour votre première journée et êtes accueilli par le responsable de votre équipe. Comment souhaitez-vous entamer cette première discussion avec votre responsable ?",
        options: {
            A: {
                title: "Première Rencontre et Réunion d'Équipe",
                text: "Pouvez-vous me parler des objectifs de placement de cette année et des principales stratégies que nous utilisons pour atteindre ces objectifs ?",
                next: "morning2A",
                type: "Commercial"
            },
            B: {
                title: "Première Rencontre et Réunion d'Équipe",
                text: "Pouvez-vous me parler des initiatives de développement des talents et des programmes de formation que nous offrons aux intérimaires ?",
                next: "morning2B",
                type: "RH"
            }
        }
    },
    morning2A: {
        text: "Vous participez à une réunion où votre équipe discute d'un nouveau projet pour améliorer les services offerts aux clients. Sur quel aspect du projet souhaitez-vous vous concentrer ?",
        options: {
            A1: {
                title: "Projet d'Équipe",
                text: "J'aimerais analyser les besoins des clients et définir des stratégies pour attirer de nouvelles entreprises partenaires.",
                next: "afternoon1A",
                type: "Commercial"
            },
            A2: {
                title: "Projet d'Équipe",
                text: "Je serais intéressé par la gestion des ressources humaines impliquées, comme la formation et la répartition des missions pour les intérimaires.",
                next: "afternoon1B",
                type: "RH"
            }
        }
    },
    morning2B: {
        text: "Vous participez à une réunion où votre équipe discute d'un nouveau projet pour améliorer les services offerts aux clients. Sur quel aspect du projet souhaitez-vous vous concentrer ?",
        options: {
            B1: {
                title: "Projet d'Équipe",
                text: "Je serais intéressé par la gestion des ressources humaines impliquées, comme la formation et la répartition des missions pour les intérimaires.",
                next: "afternoon1B",
                type: "RH"
            },
            B2: {
                title: "Projet d'Équipe",
                text: "J'aimerais analyser les besoins des clients et définir des stratégies pour attirer de nouvelles entreprises partenaires.",
                next: "afternoon1A",
                type: "Commercial"
            }
        }
    },
    afternoon1A: {
        text: "Un intérimaire ne parvient pas à atteindre les attentes du client, et vous êtes chargé de l'aider. Quelle approche choisissez-vous pour aider cet intérimaire ?",
        options: {
            A3: {
                title: "Gestion de Crises et Négociations",
                text: "Je vais lui proposer un coaching individuel axé sur les compétences demandées par le client et fixer de nouveaux objectifs de performance.",
                next: "afternoon2A",
                type: "Commercial"
            },
            A4: {
                title: "Gestion de Crises et Négociations",
                text: "Je vais organiser une session de feedback pour comprendre ses difficultés et développer un plan de formation personnalisé.",
                next: "afternoon2B",
                type: "RH"
            }
        }
    },
    afternoon1B: {
        text: "Un intérimaire ne parvient pas à atteindre les attentes du client, et vous êtes chargé de l'aider. Quelle approche choisissez-vous pour aider cet intérimaire ?",
        options: {
            B3: {
                title: "Gestion de Crises et Négociations",
                text: "Je vais organiser une session de feedback pour comprendre ses difficultés et développer un plan de formation personnalisé.",
                next: "afternoon2B",
                type: "RH"
            },
            B4: {
                title: "Gestion de Crises et Négociations",
                text: "Je vais lui proposer un coaching individuel axé sur les compétences demandées par le client et fixer de nouveaux objectifs de performance.",
                next: "afternoon2A",
                type: "Commercial"
            }
        }
    },
    afternoon2A: {
        text: "Vous avez la possibilité de participer à une négociation importante avec une entreprise cliente potentielle. Quel rôle préférez-vous jouer dans cette négociation ?",
        options: {
            A5: {
                title: "Gestion de Crises et Négociations",
                text: "Je souhaite mener la négociation commerciale pour obtenir les meilleures conditions possibles pour nos services de placement.",
                next: "evening1A",
                type: "Commercial"
            },
            A6: {
                title: "Gestion de Crises et Négociations",
                text: "Je préfère observer la dynamique des équipes et m'assurer que tous les aspects contractuels concernant le personnel temporaire sont correctement couverts.",
                next: "evening1B",
                type: "RH"
            }
        }
    },
    afternoon2B: {
        text: "Vous avez la possibilité de participer à une négociation importante avec une entreprise cliente potentielle. Quel rôle préférez-vous jouer dans cette négociation ?",
        options: {
            B5: {
                title: "Gestion de Crises et Négociations",
                text: "Je préfère observer la dynamique des équipes et m'assurer que tous les aspects contractuels concernant le personnel temporaire sont correctement couverts.",
                next: "evening1B",
                type: "RH"
            },
            B6: {
                title: "Gestion de Crises et Négociations",
                text: "Je souhaite mener la négociation commerciale pour obtenir les meilleures conditions possibles pour nos services de placement.",
                next: "evening1A",
                type: "Commercial"
            }
        }
    },
    evening1A: {
        text: "Votre entreprise envisage de lancer un nouveau service de placement spécialisé. Comment souhaitez-vous contribuer à ce lancement ?",
        options: {
            A7: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais développer une stratégie de marché pour maximiser les placements et atteindre de nouveaux segments de clients.",
                next: "evening2A",
                type: "Commercial"
            },
            A8: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais concevoir un programme de formation pour les intérimaires afin qu'ils soient bien préparés pour les missions spécifiques de ce nouveau service.",
                next: "evening2B",
                type: "RH"
            }
        }
    },
    evening1B: {
        text: "Votre entreprise envisage de lancer un nouveau service de placement spécialisé. Comment souhaitez-vous contribuer à ce lancement ?",
        options: {
            B7: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais concevoir un programme de formation pour les intérimaires afin qu'ils soient bien préparés pour les missions spécifiques de ce nouveau service.",
                next: "evening2B",
                type: "RH"
            },
            B8: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais développer une stratégie de marché pour maximiser les placements et atteindre de nouveaux segments de clients.",
                next: "evening2A",
                type: "Commercial"
            }
        }
    },
    evening2A: {
        text: "Un conflit éclate entre deux intérimaires en mission chez un client important. Quelle approche adoptez-vous pour résoudre ce conflit ?",
        options: {
            A9: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais organiser une réunion pour clarifier les objectifs communs et aligner les efforts des intérimaires sur les attentes du client.",
                next: "end",
                showResults: true,
                type: "Commercial"
            },
            A10: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais mener une médiation pour comprendre les perspectives des deux parties et trouver une solution qui satisfait tout le monde.",
                next: "end",
                showResults: true,
                type: "RH"
            }
        }
    },
    evening2B: {
        text: "Un conflit éclate entre deux intérimaires en mission chez un client important. Quelle approche adoptez-vous pour résoudre ce conflit ?",
        options: {
            B9: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais mener une médiation pour comprendre les perspectives des deux parties et trouver une solution qui satisfait tout le monde.",
                next: "end",
                showResults: true,
                type: "RH"
            },
            B10: {
                title: "Innovation et Résolution de Conflits",
                text: "Je vais organiser une réunion pour clarifier les objectifs communs et aligner les efforts des intérimaires sur les attentes du client.",
                next: "end",
                showResults: true,
                type: "Commercial"
            }
        }
    },

    end: {
        text: "",
        options: {}
    }
};

let currentScenario = "introduction";
let choices = { RH: 0, Commercial: 0 };
let startTime, endTime;

function startScenario() {
    startTime = new Date();
    displayScenario(scenario[currentScenario]);
}

function playSound() {
    const audio = new Audio('soundRHsucre.mp3'); // Assurez-vous que le chemin est correct
    audio.play()
        .then(() => {
            console.log("-->");
        })
        .catch(error => {
            console.error("error ", error);
        });
}

function displayScenario(scene) {
    const scenarioDiv = document.getElementById("scenario");
    const option1Div = document.getElementById("option_1");
    const option2Div = document.getElementById("option_2");
    scenarioDiv.innerHTML = `<h2>${scene.text}</h2>`;
    option1Div.innerHTML = '';
    option2Div.innerHTML = '';
    
    if (scene.options) {
        Object.keys(scene.options).forEach((key, index) => {
            const option = scene.options[key];
            const button = document.createElement("button");
            button.innerText = option.text;
            button.onclick = () => {
                if (option.type) {
                    choices[option.type]++;
                    // Change background based on last choice
                    console.log(option.type, option.type === "Commercial")
                    if (option.type === "Commercial") {
                        document.getElementById('background-container').style.backgroundImage = "url('rh_man.webp')";
                    } else {
                        document.getElementById('background-container').style.backgroundImage = "url('rh_woman.webp')";
                    }
                }
                currentScenario = option.next;
                if (option.showResults) {
                    displayResults();
                } else {
                    displayScenario(scenario[currentScenario]);
                }
                playSound();
            };
            if (index == 0) {
                const title = document.createElement("h3");
                title.innerText = option.title;
                scenarioDiv.insertBefore(title, scenarioDiv.firstChild);
                option1Div.appendChild(button);
            } else {
                option2Div.appendChild(button);
            }
        });
    } else if (scene.next) {
        const button = document.createElement("button");
        button.innerText = "Suivant";
        button.onclick = () => {
            currentScenario = scene.next;
            displayScenario(scenario[currentScenario]);
        };
        scenarioDiv.appendChild(button);
    }
}

function displayResults() {
    endTime = new Date();
    const option1Div = document.getElementById("option_1");
    const option2Div = document.getElementById("option_2");
    option1Div.style.display = 'none'
    option2Div.style.display = 'none'
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const scenarioDiv = document.getElementById("scenario");
    let resultText = "";
    if (choices.Commercial > choices.RH) {
        resultText = "Vous semblez être orienté vers un profil commercial. Vous excellez dans les stratégies de placement, la négociation avec les entreprises clientes et l'analyse de marché.";
        document.getElementById('background-container').style.backgroundImage = "url('rh_man.webp')";
    } else if (choices.RH > choices.Commercial) {
        resultText = "Vous avez une inclinaison pour un profil RH. Vous êtes doué pour la gestion des talents intérimaires, la médiation des conflits et le développement des compétences.";
        document.getElementById('background-container').style.backgroundImage = "url('rh_woman.webp')";
    } else {
        resultText = "Vous avez des compétences équilibrées entre les profils RH et Commercial. Vous pouvez explorer davantage les deux domaines pour affiner votre orientation professionnelle.";
    }
    resultText += `<br><br>Questions répondues: ${choices.RH}/6 RH, ${choices.Commercial}/6 Commercial.<br>Temps écoulé: ${timeTaken} secondes.`;
    scenarioDiv.innerHTML = `<h3>Résultats</h3><p>${resultText}</p>`;
}

document.addEventListener("DOMContentLoaded", startScenario);
