import api from "./axiosConfig";

export const getClasses = async() => {

    try {

        const response = await api.get('/api/classes');
        console.log('classes:', response.data);
        return response.data;
    } catch (error) {
        
        console.error('Erreur lors de la récupération des classes', error);
        return [];
        
    }
}

// Fonction pour récupérer les détails d'une classe spécifique
export const getClassById = async (id) => {
    try {
        const response = await api.get(`/api/classes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la classe', error);
        return null;
    }
};

// Fonction pour ajouter une nouvelle classe
export const addClass = async (newClass) => {
    try {
        const response = await api.post('/api/classes', newClass);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la classe', error);
        return null;
    }
};

// Fonction pour mettre à jour une classe
export const updateClass = async (id, updatedData) => {
    try {
        const response = await api.put(`/api/classes/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la classe', error);
        return null;
    }
};

// Fonction pour supprimer une classe
export const deleteClass = async (id) => {
    try {
        await api.delete(`/api/classes/${id}`);
        return true;
    } catch (error) {
        console.error('Erreur lors de la suppression de la classe', error);
        return false;
    }
};

// Fonction pour récupérer tous les élèves
export const getEleves = async () => {
    try {
        const response = await api.get('/api/eleves');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des élèves', error);
        return [];
    }
};

// Fonction pour récupérer les élèves d'une classe
export const getElevesByClass = async (idClass) => {
    try {
        const response = await api.get(`/api/eleves/${idClass}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des élèves de la classe', error);
        return [];
    }
};

// Fonction pour ajouter un élève
export const addEleve = async (newEleve) => {
    try {
        const response = await api.post('/api/eleves', newEleve);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'élève', error);
        return null;
    }
};

// Fonction pour mettre à jour un élève
export const updateEleve = async (id, updatedData) => {
    try {
        const response = await api.put(`/api/eleves/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'élève', error);
        return null;
    }
};

// Fonction pour supprimer un élève
export const deleteEleve = async (id) => {
    try {
        await api.delete(`/api/eleves/${id}`);
        return true;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'élève', error);
        return false;
    }
};

