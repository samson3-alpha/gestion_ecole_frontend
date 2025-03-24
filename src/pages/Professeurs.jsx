import { useEffect, useState } from "react";
import { professeurs } from "../bd/professeurs";
import Layout from "../Components/Layout";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Professeurs() {
    const [profs, setProfs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = professeurs;
        setProfs(data);
    }, []);

    const handleClick = () => navigate('/AddProfesseur');

    const handleEdit = (id) => {
        console.log("Modifier professeur ID:", id);
        // Ici, tu peux rediriger vers une page d'édition avec navigate(`/editProfesseur/${id}`)
    };

    const handleDelete = (id) => {
        console.log("Supprimer professeur ID:", id);
        const newProfs = profs.filter(prof => prof.id !== id);
        setProfs(newProfs);
    };

    return (
        <Layout>
            <div>
                <button
                    onClick={handleClick}
                    className="block mx-auto bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 border border-purple-700 rounded">
                    + Ajouter un professeur
                </button>

                <h4 className="text-lg font-semibold mb-4 mt-4">Liste des Professeurs</h4>

                {profs.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Nom</th>
                                <th className="border border-gray-300 px-4 py-2">Prénom</th>
                                <th className="border border-gray-300 px-4 py-2">Date de naissance</th>
                                <th className="border border-gray-300 px-4 py-2">Spécialité</th>
                                <th className="border border-gray-300 px-4 py-2">Date d'entrée</th>
                                <th className="border border-gray-300 px-4 py-2">Classes</th>
                                <th className="border border-gray-300 px-4 py-2">Contact</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profs.map((prof) => (
                                <tr key={prof.id} className="hover:bg-gray-100">
                                    <td className="font-bold text-blue-500 border border-gray-300 px-4 py-2">{prof.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.nom}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.prenom}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.dateNaissance}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.specialite}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.dateEntree}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.classes.join(", ")}</td>
                                    <td className="border border-gray-300 px-4 py-2">{prof.contact}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                        <div className="relative group">
                                        <button onClick={() => handleEdit(prof.id)} className="text-blue-500 cursor-pointer hover:text-blue-700">
                                            <FaEdit />
                                        </button>
                                            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded transition-opacity duration-300">Modifier</span>
                                        </div>
                                        
                                        <div className="relative group">
                                        <button onClick={() => handleDelete(prof.id)} className="text-red-500 hover:text-red-700 cursor-pointer">
                                            <FaTrash />
                                        </button>
                                        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded transition-opacity duration-300">Supprimer</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center mt-4">PAS DE PROF</p>
                )}
            </div>
        </Layout>
    );
}
