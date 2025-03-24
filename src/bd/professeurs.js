class Professeur {
    constructor(id, nom, prenom, dateNaissance, specialite, dateEntree, classes = [], adresse, contact){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.specialite = specialite;
        this.dateEntree = dateEntree; 
        this.classes = classes;
        this.adresse = adresse;
        this.contact = contact;
    }

    addClass(classeId) {
        if(!this.classes.includes(classeId)){
            this.classes.push(classeId)
        }
    }
}

export const professeurs = [];

export function addProfesseur(nom, prenom, dateNaissance, specialite, dateEntree, classes, adresse, contact){
    const newId = professeurs.length ? Math.max(...professeurs.map(e => e.id)) + 1 : 1;
    const newProfesseur = new Professeur(newId, nom, prenom, dateNaissance, specialite, dateEntree, classes, adresse, contact)
    professeurs.push(newProfesseur); 
}


// Ajout des professeurs avec la fonction addProfesseur
addProfesseur("M. Dupont", "Jean", "1980-01-10", "Mathématiques", "2010-09-01", [1, 4, 6], "12 Rue des Écoles, Paris", "0123456789");
addProfesseur("Mme. Martin", "Claire", "1975-05-23", "Physique", "2012-09-01", [1, 5], "10 Boulevard des Sciences, Paris", "0987654321");
addProfesseur("M. Bernard", "Pierre", "1982-03-14", "Français", "2011-09-01", [2], "5 Avenue de la Littérature, Paris", "0678901234");
addProfesseur("Mme. Lefevre", "Sophie", "1985-07-05", "Littérature", "2013-09-01", [2, 4, 5], "7 Place des Arts, Paris", "0676543210");
addProfesseur("M. Dubois", "Luc", "1988-09-30", "Histoire", "2014-09-01", [3], "8 Rue du Temps, Paris", "0601020304");
addProfesseur("Mme. Robert", "Isabelle", "1983-11-17", "Géographie", "2015-09-01", [3], "6 Boulevard de la Terre, Paris", "0667788990");
addProfesseur("Mme. Lefevre", "Sophie", "1985-07-05", "Chimie", "2013-09-01", [4, 5], "7 Place des Arts, Paris", "0676543210");
addProfesseur("M. Lang", "David", "1980-02-25", "Anglais", "2012-09-01", [6], "15 Rue de la Langue, Paris", "0612345678");
