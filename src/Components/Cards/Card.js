import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const Cards = ({ pokemonData }) => {
    // Exclure le premier Pokémon de la liste
    const filteredPokemonData = pokemonData;

    if(filteredPokemonData.length === 0) {
        return <Typography variant="h5" component="div">Aucun Pokémon trouvé</Typography>;
    }

    return (
        <Grid container spacing={2}>
            {filteredPokemonData.map((pokemon) => (
                <Grid item xs={8} sm={2} md={2} key={pokemon.pokedex_id}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={pokemon.name.fr}
                            height="140"
                            image={pokemon.sprites.regular} // Image du Pokémon
                            sx={{ objectFit: 'contain' }} // Ajustement de l'image pour qu'elle soit entièrement visible
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {pokemon.name.fr} {/* Nom en français */}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Cards;
