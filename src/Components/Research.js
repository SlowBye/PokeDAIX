import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function Research({ searchTerm, setSearchTerm }) {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm); // État local pour la barre de recherche

    const handleChange = (event) => {
        setLocalSearchTerm(event.target.value); // Met à jour l'état local
    };

    const handleSearch = () => {
        setSearchTerm(localSearchTerm); // Met à jour le terme de recherche parent
    };

    return (
        <div className="Research" style={{ marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField
                label="Rechercher un Pokémon"
                variant="outlined"
                value={localSearchTerm} // Liaison à l'état local de recherche
                onChange={handleChange} // Gestionnaire d'événement pour le changement de texte
                sx={{ width: '50%' }} // Pour occuper 50% de la largeur
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSearch} // Gestionnaire d'événements pour le clic
                style={{ marginLeft: '10px' }} // Espacement à gauche
            >
                Valider
            </Button>
        </div>
    );
}
