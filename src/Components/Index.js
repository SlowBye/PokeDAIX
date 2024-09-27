import React, { useState } from "react";
import { useFetchPokemon } from "./Data";
import DrawerComponent from "./Drawer/Drawer";
import { Box } from "@mui/material";
import Research from "./Research";
import Cards from "./Cards/Card";

function Main() {
    const pokemonData = useFetchPokemon();
    const [filteredData, setFilteredData] = useState(pokemonData); // État pour les données filtrées
    const [searchTerm, setSearchTerm] = useState(""); // État pour le terme

    console.log(searchTerm);

    // Fonction pour gérer les changements de filtre
    const handleFilterChange = (filterName, isChecked) => {
        let newFilteredData;

        if (isChecked) {
            // Filtrer les données en fonction du filtre activé
            newFilteredData = pokemonData.filter(pokemon => 
                pokemon.types.some(type => type.name === filterName) ||
                pokemon.egg_groups.includes(filterName)
            );
        } else {
            // Si le filtre est désactivé, réinitialiser les données filtrées
            newFilteredData = pokemonData; // Ou appliquer une logique de réinitialisation selon vos besoins
        }
        console.log(newFilteredData);
        setFilteredData(newFilteredData); // Mettre à jour les données filtrées
    };

    return (
        <div className="Main">
            <Box sx={{ display: 'flex' }}>
                <DrawerComponent onFilterChange={handleFilterChange} /> {/* Passer la fonction de filtre */}

                {/* Main content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Research searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <Cards pokemonData={filteredData} />
                </Box>
            </Box>
        </div>
    );
}

export default Main;
