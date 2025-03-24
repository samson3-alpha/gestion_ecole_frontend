import { useState } from 'react';
//import { addClass } from '../bd/classes';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { addClass } from '../api/classes';


function AddClassForm() {
  // State pour les champs du formulaire
  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [serie, setSerie] = useState('');
  const [categorie, setCategorie] = useState('');
  //const [nbEleves, setNbEleves] = useState(0);

  const navigate = useNavigate();

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Affiche les valeurs dans la console pour vérification
    console.log({
      nom,
      categorie,
      type,
      serie,
    });

    if (nom&&categorie&&type&&serie){
      const newClass = {
        nom,
        categorie,
        type,
        serie,
      }

      addClass(newClass);

      navigate('/classes');
    }
    // Optionnel : réinitialiser le formulaire après soumission
    setNom('');
    setCategorie('')
    setType('');
    setSerie('');
    //setNbEleves(0);
  };

  return (
    <Layout>
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Ajouter une nouvelle classe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Champ Nom de la classe */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom de la classe</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">Catégorie de la classe</label>
          <select
            id="type"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sélectionnez la catégorie</option>
            <option value="Seconde">Seconde</option>
            <option value="Première">Première</option>
            <option value="Terminale">Terminale</option>
          </select>
        </div>

        {/* Select pour le Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type de la classe</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sélectionnez le type</option>
            <option value="Littéraire">Littéraire</option>
            <option value="Scientifique">Scientifique</option>
          </select>
        </div>

        {/* Select pour la Série */}
        <div>
          <label htmlFor="serie" className="block text-sm font-medium text-gray-700">Série</label>
          <select
            id="serie"
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sélectionnez la série</option>
            <option value="A4">A4</option>
            <option value="C4">C4</option>
            <option value="D">D</option>
            <option value="S">S</option>
          </select>
        </div>

        {/* Champ Nombre d'Élèves */}
        {/* <div>
          <label htmlFor="nbEleves" className="block text-sm font-medium text-gray-700">Nombre d'élèves</label>
          <input
            type="number"
            id="nbEleves"
            value={nbEleves}
            onChange={(e) => setNbEleves(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div> */}

        {/* Bouton de soumission */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
          >
            Ajouter la classe
          </button>
          <div className='flex flex-col ml-2'>
            <button 
              onClick={()=>navigate('/classes')}
              className='mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300'>Annuler
              </button>
          </div>
        </div>

      </form>
    </div>
    </Layout>
  );
}

export default AddClassForm;
