const express = require('express');

const app = express();
const port = 3002;

const DUMMY_MENU = [
    {
        id: 'r1',
        restaurante: 'La Carnicería de Chavela',
        plato1: 'Carpaccio de Lomo',
        plato2: 'Champiñones a la Parrilla',
        plato3: 'Lomito Saltado',
        plato4: 'Provoleta Andaluz',
        plato5: 'Pulpo al Olivo'
    },
    {
        id: 'r2',
        restaurante: 'La Tablita del Tártaro',
        plato1: 'Parrillada Costeña',
        plato2: 'Parrillada de Bife de Chorizo',
        plato3: 'Mixto Especial para Compartir',
        plato4: 'Combo Duo Burger de Pollo',
        plato5: 'Parrillada Mega Familiar'
    },
    {
        id: 'r3',
        restaurante: 'La Parrillada del Ñato',
        plato1: 'Sopa de Carne',
        plato2: 'Parrilla Ñatita',
        plato3: 'Matambre de cerdo',
        plato4: 'Pizza de Salame y Queso',
        plato5: 'Crema de Menta, Ron, Espíritu del Ecuador (Copa)'
    }
];

app.get('/api/menu', (req, res, next) => {

    const menu = DUMMY_MENU;

    res.send(menu);
});


app.listen(port);