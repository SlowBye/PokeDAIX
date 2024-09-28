import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import PokemonModal from './PokemonModal';

const Cards = ({ pokemonData }) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon); // Définir le Pokémon sélectionné
        setIsModalOpen(true); // Ouvrir la modale
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Fermer la modale
        setSelectedPokemon(null); // Réinitialiser le Pokémon sélectionné
    };

    if (pokemonData.length === 0) {
        return <Typography variant="h5" component="div">Aucun Pokémon trouvé</Typography>;
    }

    return (
        <>
            <Grid container spacing={2}>
                {pokemonData.map((pokemon) => (
                    <Grid item xs={8} sm={2} md={2} key={pokemon.pokedex_id}>
                        <Card onClick={() => handleCardClick(pokemon)}> {/* Gestionnaire de clic */}
                            <CardMedia
                                component="img"
                                alt={pokemon.name.fr}
                                height="140"
                                image={pokemon.sprites.regular}
                                sx={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {pokemon.name.fr}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <PokemonModal 
                open={isModalOpen} 
                handleClose={handleCloseModal} 
                pokemon={selectedPokemon} 
            />
        </>
    );
};

export default Cards;
