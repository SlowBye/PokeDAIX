import React, { useState, useEffect } from "react";
import { useFetchPokemon } from "./Data";
import DrawerComponent from "./Drawer/Drawer";
import { Box } from "@mui/material";
import Research from "./Research";
import Cards from "./Cards/Card";

function Main() {
    const pokemonData = useFetchPokemon();
    const [filteredData, setFilteredData] = useState(pokemonData); // État pour les données filtrées
    const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche
    const [selectedTypes, setSelectedTypes] = useState([]); // État pour les types sélectionnés
    const [selectedEggGroups, setSelectedEggGroups] = useState([]); // État pour les groupes d'œufs sélectionnés

    // Fonction de filtrage qui combine les types, groupes d'œufs et terme de recherche
    useEffect(() => {
        let newFilteredData = pokemonData;
    
        // Appliquer le filtre de recherche
        if (searchTerm) {
            newFilteredData = newFilteredData.filter(pokemon =>
                pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    
        // Appliquer les filtres de types, seulement si des types sont sélectionnés
        if (selectedTypes.length > 0) {
            newFilteredData = newFilteredData.filter(pokemon =>
                pokemon.types && 
                selectedTypes.every(type => pokemon.types.some(pokemonType => pokemonType.name === type))
            );
        }
    
        // Appliquer les filtres de groupes d'œufs, seulement si des groupes sont sélectionnés
        if (selectedEggGroups.length > 0) {
            newFilteredData = newFilteredData.filter(pokemon =>
                pokemon.egg_groups && pokemon.egg_groups.some(group => selectedEggGroups.includes(group))
            );
        }
    
        setFilteredData(newFilteredData);
    }, [searchTerm, selectedTypes, selectedEggGroups, pokemonData]);
    
    

    // Gestion des changements de filtres dans le Drawer
    const handleFilterChange = (filters) => {
        setSelectedTypes(filters.types);
        setSelectedEggGroups(filters.eggGroups);
    };

    return (
        <div className="Main">
            <Box sx={{ display: 'flex' }}>
                <DrawerComponent onFilterChange={handleFilterChange} /> {/* Passer la fonction de filtre */}

                {/* Main content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <Research searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Cards pokemonData={filteredData} />
                </Box>
            </Box>
        </div>
    );
}

export default Main;
