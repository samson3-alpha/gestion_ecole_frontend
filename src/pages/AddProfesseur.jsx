import { useEffect, useState } from "react";
import { getClasses } from "../bd/classes";
import { addProfesseur } from "../bd/professeurs";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

const AddProfesseur = () => {

    const navigate = useNavigate();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const data = getClasses().data;
        setClasses(data);
    }, []);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        dateNaissance: "",
        specialite: "",
        dateEntree: "",
        classes: [],
        adresse: "",
        contact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClassChange = (id) => {
        setFormData((prevData) => {
            const isSelected = prevData.classes.includes(id);
            const updatedClasses = isSelected
                ? prevData.classes.filter((c) => c !== id) // Retire si déjà sélectionné
                : [...prevData.classes, id]; // Ajoute sinon

            return { ...prevData, classes: updatedClasses };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProfesseur(
            formData.nom,
            formData.prenom,
            formData.dateNaissance,
            formData.specialite,
            formData.dateEntree,
            formData.classes,
            formData.adresse,
            formData.contact
        );
        alert("Professeur ajouté avec succès !");
        setFormData({
            nom: "",
            prenom: "",
            dateNaissance: "",
            specialite: "",
            dateEntree: "",
            classes: [],
            adresse: "",
            contact: "",
        });
        navigate('/professeurs');
    };

    return (
        <Layout>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl border"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Ajouter un Professeur
                </h2>

                {/* Champs en grid */}
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
                    <label className="form-label">Spécialité</label>
                    <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} required className="form-input"/>
                </div>

                <div className="mt-4">
                    <label className="form-label">Date d'Entrée</label>
                    <input type="date" name="dateEntree" value={formData.dateEntree} onChange={handleChange} required className="form-input"/>
                </div>

                {/* Checkboxes pour les classes */}
                <div className="mt-4">
                    <label className="form-label">Classes attribuées</label>
                    <div className="grid grid-cols-2 gap-2">
                        {classes.map((classe) => (
                            <label key={classe.id} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={formData.classes.includes(classe.id)}
                                    onChange={() => handleClassChange(classe.id)}
                                    className="form-checkbox"
                                />
                                <span>{classe.nom}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <label className="form-label">Adresse</label>
                    <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required className="form-input"/>
                </div>

                <div className="mt-4">
                    <label className="form-label">Contact</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className="form-input"/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-800 transition duration-300">
                        Ajouter Professeur
                    </button>
                    <div className="flex flex-col ml-2">
                        <button 
                            onClick={()=>navigate('/professeurs')}
                            className='mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300'>Annuler
                        </button>
                    </div>

                </div>
            </form>
        </div>
        </Layout>
    );
};

export default AddProfesseur;
