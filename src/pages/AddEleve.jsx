import { useEffect, useState } from "react";
import { getClasses,addEleve } from "../api/classes";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

const AddEleve = () => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await getClasses(); // Attendre les données
                console.log("Classes reçues :", data); // Debug
                setClasses(data); // Met à jour l'état
            } catch (error) {
                console.error("Erreur lors du chargement des classes :", error);
            }
        };

        fetchClasses();
    }, []);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        dateNaissance: "",
        idClass: "",
        dateEntree: "",
        sexe: "",
        contactNom: "",
        contactNumero: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        await addEleve(formData);
        alert("Élève ajouté avec succès !");
        setFormData({
            nom: "",
            prenom: "",
            dateNaissance: "",
            idClass: "",
            dateEntree: "",
            sexe: "",
            contactNom: "",
            contactNumero: ""
        });
        navigate('/eleves');
    };

    return (
        <Layout>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl border"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Ajouter un Élève
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="form-label">Nom</label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className="form-input"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="form-label">Prénom</label>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required className="form-input"/>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="form-label">Date de Naissance</label>
                    <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required className="form-input"/>
                </div>

                <div className="mt-4">
                    <label className="form-label">Classe</label>
                    <select name="idClass" value={formData.idClass} onChange={handleChange} required className="form-input">
                        <option value="">Sélectionner une classe</option>
                        {classes.map((classe) => (
                            <option key={classe._id} value={classe._id}>{classe.nom}</option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <label className="form-label">Date d'Entrée</label>
                    <input type="date" name="dateEntree" value={formData.dateEntree} onChange={handleChange} required className="form-input"/>
                </div>

                <div className="mt-4">
                    <label className="form-label">Sexe</label>
                    <select name="sexe" value={formData.sexe} onChange={handleChange} required className="form-input">
                        <option value="">Sélectionner</option>
                        <option value="M">Masculin</option>
                        <option value="F">Féminin</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label className="form-label">Nom du Contact</label>
                    <input type="text" name="contactNom" value={formData.contactNom} onChange={handleChange} required className="form-input"/>
                </div>

                <div className="mt-4">
                    <label className="form-label">Numéro du Contact</label>
                    <input type="text" name="contactNumero" value={formData.contactNumero} onChange={handleChange} required className="form-input"/>
                </div>
                
                <div className="flex justify-center">
                    <button type="submit" className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300">
                        Ajouter Élève
                    </button>
                    <div className="flex flex-col ml-2">
                        <button 
                            onClick={()=>navigate('/eleves')}
                            className='mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300'>Annuler
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </Layout>
    );
};

export default AddEleve;