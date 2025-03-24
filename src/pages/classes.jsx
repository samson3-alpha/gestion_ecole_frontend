import { useEffect, useState } from "react";
//import { getClasses } from "../bd/classes";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import ClassItem from "../Components/ClassItem";
import { getClasses } from "../api/classes";

function Classes(props) {

    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();

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
    // useEffect(() => {
    //     const data = getClasses().data;
    //     console.log(data);
    //     setClasses(data);
    // }, [])

    const handleClick = () => navigate('/AddClassForm');

    return (
        <Layout>
            <button 
            onClick={handleClick}
            className="block mx-auto bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 border border-purple-700 rounded">
                + Ajouter une classe
            </button>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
            {classes.length > 0 ? (classes.map((classe) => {
                return (<ClassItem key={classe.id} classe={classe} />)
            }))
                : <p>Chargement...</p>
            }
            </div>
        </Layout>
    )
}

export default Classes;