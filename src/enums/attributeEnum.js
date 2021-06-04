const AttributeEnum = Object.freeze({
    FOR: {
        base: 'Força',
        offense: 'Potência',
        defense: 'Pujança',
    },
    DES: {
        base: 'Destreza',
        offense: 'Precisão',
        defense: 'Esquiva',
    },
    CON: {
        base: 'Constituição',
        offense: 'Vigor',
        defense: 'Tenacidade',
    },
    INT: {
        base: 'Inteligência',
        offense: 'Raciocínio',
        defense: 'Lucidez',
    },
    SAB: {
        base: 'Sabedoria',
        offense: 'Augúria',
        defense: 'Vontade',
    },
    CAR: {
        base: 'Carisma',
        offense: 'Perspicácia',
        defense: 'Espírito',
    },
});

export default AttributeEnum;
