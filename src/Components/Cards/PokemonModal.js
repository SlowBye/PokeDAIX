import React from 'react';
import { Modal, Box, Typography, CardMedia } from '@mui/material';

const PokemonModal = ({ open, handleClose, pokemon }) => {
    if (!pokemon) return null; // Si aucun Pokémon n'est sélectionné, ne rien afficher

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    {pokemon.name.fr}
                </Typography>
                <CardMedia
                    component="img"
                    alt={pokemon.name.fr}
                    image={pokemon.sprites.regular}
                    sx={{ objectFit: 'contain', height: 200, marginBottom: 2 }}
                />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    ID Pokédex: {pokemon.pokedex_id}
                </Typography>
                <Typography>
                    Type: {pokemon.types.map(type => type.name).join(', ')}
                </Typography>
                <Typography>
                    Groupe d'œuf: {pokemon.egg_groups.join(', ')}
                </Typography>
                <Typography>
                    Talents: {pokemon.talents.map(talent => talent.name).join(', ')}
                </Typography>

            </Box>
        </Modal>
    );
};

export default PokemonModal;
