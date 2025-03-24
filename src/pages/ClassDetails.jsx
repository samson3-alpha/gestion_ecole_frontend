import { useNavigate, useParams } from "react-router-dom";
//import { deleteClass, getClasses, getElevesByClasse } from "../bd/classes";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { getClasses, getClassById } from "../api/classes";

function ClassDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'id de la classe depuis l'URL
  const [classe, setClasse] = useState();
  const [classes, setClasses] = useState();
  //const classes = getClasses().data;
  const [isDeleted, setIsDeleted] = useState(false);
  const [elevesByClass, setElevesByClass] = useState([]);

     useEffect(() => {
          const fetchClasses = async () => {
              try {
                  const data = await getClassById(id); // Attendre les données
                  console.log('classe env', data)
                  setClasse(data); // Met à jour l'état
              } catch (error) {
                  console.error("Erreur lors du chargement des classes :", error);
              }
          };
  
          fetchClasses();
      }, []);
      const currentClass = classe;
      //const currentClass = classes?.find((classe) => classe.id === id);

  // useEffect(() => {
  //   if (currentClass) {
  //     setElevesByClass(getElevesByClasse(currentClass.id))
  //   }
  // }, [currentClass]);


  useEffect(() => {
    if (isDeleted) {
      navigate('/classes'); // Navigation après suppression
    }
  }, [isDeleted, navigate]);

  const handleDelete = (id) => {
    const confirm = window.confirm('voulez-vous supprimer la classe?')
    //const confirm = true;
    if (confirm) {
      deleteClass(id);
      setClasses(prevClasses => prevClasses.filter(classe => classe.id !== id));
      setIsDeleted(true)
    }
  }

  if (!currentClass) {
    return <p>Classe non trouvée</p>;
  }


  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Détails de la classe : <span className="text-red-300">{currentClass.nom}</span></h2>
      <p>Type de classe : {currentClass.type}</p>
      <p>Série : {currentClass.serie}</p>
      <p>Nombre d'élèves : {currentClass.nbEleves}</p>
      <h3>Professeurs :</h3>
      <ul>
        {currentClass.professeurs ? (currentClass.professeurs.map((professeur) => (
          <li key={professeur.id}>
            {professeur.nom} - {professeur.specialite}
          </li>
        )))
          : null}
      </ul>

      <div className="flex justify-center">
        <button
          onClick={() => navigate('/editClass/' + currentClass.id)} 
          className='mt-4 bg-green-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300'>
          Modifier
        </button>
        <div className="flex flex-col ml-2">
          <button
            onClick={() => handleDelete(currentClass.id)}
            className='mt-4 bg-red-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300'>
            Effacer
          </button>
        </div>

      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Liste des élèves</h4>

        {elevesByClass.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Nom</th>
                <th className="border border-gray-300 px-4 py-2">Prénom</th>
                <th className="border border-gray-300 px-4 py-2">Date de naissance</th>
                <th className="border border-gray-300 px-4 py-2">Sexe</th>
                <th className="border border-gray-300 px-4 py-2">Date d'entrée</th>
                <th className="border border-gray-300 px-4 py-2">Personne à contacter</th>
                <th className="border border-gray-300 px-4 py-2">Numéro de contact</th>
              </tr>
            </thead>
            <tbody>
              {elevesByClass.map((eleve) => (
                <tr key={eleve.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{eleve.nom}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.prenom}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.dateNaissance}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.sexe}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.dateEntree}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.contactNom}</td>
                  <td className="border border-gray-300 px-4 py-2">{eleve.contactNumero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">Aucun élève dans cette classe.</p>
        )}
      </div>

    </Layout>
  );
}

export default ClassDetails;
