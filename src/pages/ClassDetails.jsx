import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { getClassById } from "../api/classes";

function ClassDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID de la classe depuis l'URL
  const [classe, setClasse] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getClassById(id); // Récupère la classe depuis l'API
        console.log("Classe récupérée :", data);
        setClasse(data); // Met à jour l'état
      } catch (error) {
        console.error("Erreur lors du chargement de la classe :", error);
      }
    };

    if (id) fetchClasses();
  }, [id]); // ✅ Ajout de `id` dans les dépendances

  useEffect(() => {
    if (isDeleted) {
      navigate("/classes"); // Redirige après suppression
    }
  }, [isDeleted, navigate]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous supprimer cette classe ?");
    if (confirmDelete) {
      try {
        // Appel de l'API pour supprimer la classe (à implémenter dans `api/classes.js`)
        await deleteClass(id);
        setIsDeleted(true);
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };

  if (!classe) {
    return (
      <Layout>
        <p>Chargement en cours...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">
        Détails de la classe : <span className="text-red-300">{classe.nom}</span>
      </h2>
      <p>Type de classe : {classe.type}</p>
      <p>Série : {classe.serie}</p>
      <p>Nombre d'élèves : {classe.eleves.length}</p>

      <h3>Professeurs :</h3>
      <ul>
        {classe.professeurs && classe.professeurs.length > 0 ? (
          classe.professeurs.map((prof) => (
            <li key={prof._id}>
              {prof.nom} {prof.prenom} - {prof.specialite}
            </li>
          ))
        ) : (
          <p className="text-gray-500">Aucun professeur affecté.</p>
        )}
      </ul>

      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/editClass/${classe._id}`)}
          className="mt-4 bg-green-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Modifier
        </button>
        <button
          onClick={handleDelete}
          className="mt-4 ml-2 bg-red-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Supprimer
        </button>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Liste des élèves</h4>

        {classe.eleves && classe.eleves.length > 0 ? (
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
              {classe.eleves.map((eleve) => (
                <tr key={eleve._id} className="hover:bg-gray-100">
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
