import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion, AccordionSummary, AccordionDetails, ListItemButton,
    ListItemText, AppBar, Box, CssBaseline, Drawer, List, ListItem,
    Toolbar, Typography, Checkbox
} from '@mui/material';

const drawerWidth = 240;
const types = [
    'Plante', 'Eau', 'Feu', 'Électrique', 'Normal', 'Combat',
    'Vol', 'Insecte', 'Roche', 'Sol', 'Spectre', 'Fée',
    'Acier', 'Poison', 'Ténèbres', 'Dragon', 'Glace', 'Psy',
];
const eggGroups = [
    'Aérien', 'Amorphe', 'Aquatique 1', 'Aquatique 2',
    'Aquatique 3', 'Draconique', 'Féérique', 'Humanoïde',
    'Insectoïde', 'Minéral', 'Monstrueux', 'Terrestre',
    'Végétal', 'Inconnu', 'Métamorph',
];

export default function DrawerComponent({ onFilterChange }) {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedEggGroups, setSelectedEggGroups] = useState([]);

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleEggGroupChange = (group) => {
        setSelectedEggGroups((prev) => 
            prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
        );
    };

    // Effectuer un tri sur les données lorsqu'un filtre est appliqué
useEffect(() => {
    if (onFilterChange) {
        onFilterChange({
            types: selectedTypes || [], // Assure-toi que selectedTypes est toujours un tableau
            eggGroups: selectedEggGroups || [], // Assure-toi que selectedEggGroups est toujours un tableau
        });
    }
}, [selectedTypes, selectedEggGroups, onFilterChange]);


    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        console.log(checked);
        if (event.target.closest('.type-checkbox')) {
            handleTypeChange(name); // Mettez à jour le type sélectionné
        } else {
            handleEggGroupChange(name); // Mettez à jour le groupe d'œufs sélectionné
        }
    };

    return (
        <div className="DrawerComponent">
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h3" noWrap component="div">
                        PokeDAIX
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',backgroundColor: ' #ff3333 ' }}}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', backgroundColor: ' #ff3333  '  }}>
                    <List>
                        {/* Accordion pour "Type" */}
                        <Accordion sx={{backgroundColor:' #73ff2c '}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="type-content"
                                id="type-header"
                            >
                                <Typography>Type</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {types.map((type, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton>
                                                <Checkbox 
                                                    className="type-checkbox"
                                                    name={type} 
                                                    value={type} 
                                                    onChange={handleCheckboxChange} 
                                                />
                                                <ListItemText primary={type} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        {/* Accordion pour "Groupe œuf" */}
                        <Accordion sx={{backgroundColor:' #33f6ff  '}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="egg-group-content"
                                id="egg-group-header"
                            >
                                <Typography>Groupe œuf</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {eggGroups.map((group, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton>
                                                <Checkbox 
                                                    className="egg-group-checkbox"
                                                    name={group} 
                                                    value={group} 
                                                    onChange={handleCheckboxChange} 
                                                />
                                                <ListItemText primary={group} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
