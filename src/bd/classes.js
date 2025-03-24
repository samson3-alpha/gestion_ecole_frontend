import {professeurs} from "./professeurs";


class Eleve {
    constructor(id, nom, prenom, dateNaissance, idClass, dateEntree, sexe, contactNom, contactNumero) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.idClass = idClass;
        this.dateEntree = dateEntree;
        this.sexe = sexe;
        this.contactNom = contactNom;
        this.contactNumero = contactNumero;
    }
}

const eleves = []; // Tableau des élèves

const classes= [
    {
        id: 1,
        nom: "1ère C4",
        categorie: "Première",
        type: "Scientifique",
        serie: "C4",
        nbEleves: 30,
        professeurs: [professeurs.find(p => p.id == 1), professeurs.find(p => p.id == 2), ]
    },
    {
        id: 2,
        nom: "2nde A4-1",
        categorie: "Seconde",
        type: "Littéraire",
        serie: "A4",
        nbEleves: 28,
        professeurs: [professeurs.find(p => p.id == 3), professeurs.find(p => p.id == 4), ]
    },
    {
        id: 3,
        nom: "Terminale D2",
        categorie: "Terminale",
        type: "Scientifique",
        serie: "D",
        nbEleves: 32,
        professeurs: [professeurs.find(p => p.id == 5), professeurs.find(p => p.id == 6), ]
    },
    {
        id: 4,
        nom: "2nde S1",
        categorie: "Seconde",
        type: "Scientifique",
        serie: "S",
        nbEleves: 25,
        professeurs: [professeurs.find(p => p.id == 1), professeurs.find(p => p.id == 7), ]
    },
    {
        id: 5,
        nom: "1ère A4-2",
        categorie: "Première",
        type: "Littéraire",
        serie: "A4",
        nbEleves: 27,
        professeurs: [professeurs.find(p => p.id == 2), professeurs.find(p => p.id == 7), ]
    },
    {
        id: 6,
        nom: "Terminale C4",
        categorie: "Terminale",
        type: "Scientifique",
        serie: "C4",
        nbEleves: 30,
        professeurs: [professeurs.find(p => p.id == 1), professeurs.find(p => p.id == 8), ]
    }
]

// Fonction pour récupérer les classes avec nbEleves dynamique
export const getClasses = () => {
    // Dynamiser le nombre d'élèves dans chaque classe
    const classesWithNbEleves = classes.map(classe => {
        const nbElevesInClass = eleves.filter(eleve => eleve.idClass === classe.id).length;
        return {
            ...classe,
            nbEleves: nbElevesInClass
        };
    });
    return { data: classesWithNbEleves };
}

// export const getClasses = () => {
//     return { data: classes}
// }

export function addClass(newClass){
    const newId = classes.length ? Math.max(...classes.map(e => e.id)) + 1 : 1;
    const classToAdd = {...newClass, id:newId};
    classes.push(classToAdd);
}

export function updateClass(id, updatedData){
    const index = classes.findIndex((c)=> c.id === id)
    if (index !== -1){
        classes[index] = {...classes[index], ...updatedData}
    }
}

export function deleteClass(id){
    const index = classes.findIndex((c)=> c.id === id)
    if (index !== -1){
        classes.splice(index, 1);
    }
}


// Fonction pour ajouter un élève
export function addEleve(nom, prenom, dateNaissance, idClass, dateEntree, sexe, contactNom, contactNumero) {
    const classeExiste = classes.some(c => c.id === parseInt(idClass));

    if (!classeExiste) {
        console.error(`Erreur : La classe n'existe pas.`);
        return;
    }

    const newId = eleves.length ? Math.max(...eleves.map(e => e.id)) + 1 : 1;
    const newEleve = new Eleve(newId, nom, prenom, dateNaissance, idClass, dateEntree, sexe, contactNom, contactNumero);
    eleves.push(newEleve);

    console.log(`Élève ${prenom} ${nom} ajouté à la classe.`);
}


// Exemple d'utilisation
addEleve("Dupont", "Jean", "2008-05-12", 1, "2023-09-01", "M", "Mme Dupont", "0123456789");
addEleve("Curie", "Marie", "2007-11-22", 2, "2022-09-01", "F", "M. Curie", "0987654321");
addEleve("Verlaine", "Paul", "2008-03-18", 1, "2023-09-01", "M", "Mme Verlaine", "0654321987");
addEleve("Durand", "Alice", "2008-02-15", 1, "2023-09-01", "F", "Mme Durand", "0612345678");
addEleve("Lemoine", "Thomas", "2007-06-20", 2, "2022-09-01", "M", "M. Lemoine", "0723456789");
addEleve("Martin", "Lucie", "2008-09-05", 3, "2021-09-01", "F", "Mme Martin", "0634567890");
addEleve("Petit", "Hugo", "2009-01-30", 4, "2023-09-01", "M", "M. Petit", "0645678901");
addEleve("Bernard", "Emma", "2007-11-10", 5, "2022-09-01", "F", "Mme Bernard", "0656789012");
addEleve("Robert", "Nathan", "2008-07-22", 6, "2021-09-01", "M", "M. Robert", "0667890123");
addEleve("Richard", "Sophie", "2009-04-14", 1, "2023-09-01", "F", "Mme Richard", "0678901234");
addEleve("Moreau", "Léo", "2007-12-03", 2, "2022-09-01", "M", "M. Moreau", "0689012345");
addEleve("Simon", "Camille", "2008-08-25", 3, "2021-09-01", "F", "Mme Simon", "0690123456");
addEleve("Laurent", "Paul", "2009-05-18", 4, "2023-09-01", "M", "M. Laurent", "0601234567");

// Fonction pour récupérer les élèves d'une classe
export function getElevesByClasse(idClass) {
    return eleves.filter(eleve => eleve.idClass === idClass);
}

export const getEleves = () => eleves;

console.log(getElevesByClasse(1)); // Liste des élèves de la classe "1ère C4"