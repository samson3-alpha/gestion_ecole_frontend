import { useEffect, useState } from "react";
import { getEleves } from "../api/classes";
import Layout from "../Components/Layout";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Eleves() {
    const [elevesList, setElevesList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEleves = async () => {
            try {
                const data = await getEleves();
                console.log(data);
                setElevesList(data);
            } catch (error) {
                console.error("Erreur lors du chargement des classes :", error);

            }
        };
        fetchEleves();
    }, []);

    const handleClick = () => navigate('/AddEleve');

    const handleEdit = (id) => {
        console.log("Modifier élève ID:", id);
        // navigate(`/editEleve/${id}`) pour rediriger vers la page d'édition
    };

    const handleDelete = (id) => {
        console.log("Supprimer élève ID:", id);
        const newEleves = elevesList.filter(eleve => eleve._id !== id);
        setElevesList(newEleves);
    };

    return (
        <Layout>
            <div>
                <button
                    onClick={handleClick}
                    className="block mx-auto bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded">
                    + Ajouter un élève
                </button>

                <h4 className="text-lg font-semibold mb-4 mt-4">Liste des Élèves</h4>

                {elevesList.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Nom</th>
                                <th className="border border-gray-300 px-4 py-2">Prénom</th>
                                <th className="border border-gray-300 px-4 py-2">Date de naissance</th>
                                <th className="border border-gray-300 px-4 py-2">Classe</th>
                                <th className="border border-gray-300 px-4 py-2">Sexe</th>
                                <th className="border border-gray-300 px-4 py-2">Contact Nom</th>
                                <th className="border border-gray-300 px-4 py-2">Contact Numéro</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elevesList.map((eleve) => (
                                <tr key={eleve._id} className="hover:bg-gray-100">
                                    <td className="font-bold text-blue-500 border border-gray-300 px-4 py-2">{eleve._id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{eleve.nom}</td>
                                    <td className="border border-gray-300 px-4 py-2">{eleve.prenom}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(eleve.dateNaissance).toLocaleDateString("fr-FR")} 
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {typeof eleve.idClass === "object" ? eleve.idClass.nom : eleve.idClass ?? "Aucune classe"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{eleve.sexe}</td>
                                    <td className="border border-gray-300 px-4 py-2">{eleve.contactNom}</td>
                                    <td className="border border-gray-300 px-4 py-2">{eleve.contactNumero}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                        <button onClick={() => handleEdit(eleve._id)} className="text-blue-500 cursor-pointer hover:text-blue-700">
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => handleDelete(eleve._id)} className="text-red-500 hover:text-red-700 cursor-pointer">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center mt-4">PAS D'ÉLÈVES</p>
                )}
            </div>
        </Layout>
    );
}
