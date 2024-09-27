import { useState, useEffect } from "react";

export function useFetchPokemon() {
    const [pokemonData, setPokemonData] = useState(() => {
        // Retrieve cached data if available
        const cachedData = localStorage.getItem("pokemonData");
        return cachedData ? JSON.parse(cachedData) : [];
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tyradex.vercel.app/api/v1/pokemon');
                const data = await response.json();
                
                // Save fetched data to state and cache it in localStorage
                setPokemonData(data);
                localStorage.setItem("pokemonData", JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        // Fetch data only if it's not already cached
        if (!pokemonData.length) {
            fetchData();
        }
    }, [pokemonData]);

    return pokemonData;
}
