const AttributeEnum = Object.freeze({
    TEN: {
        base: 'Tenacidade',
        offense: 'Força',
        defense: 'Constituição',
        init: 'TEN',
    },
    CEL: {
        base: 'Celeridade',
        offense: 'Precisão',
        defense: 'Esquiva',
        init: 'CEL',
    },
    INT: {
        base: 'Intelecto',
        offense: 'Raciocínio',
        defense: 'Lucidez',
        init: 'INT',
    },
    AST: {
        base: 'Astucia',
        offense: 'Perspicácia',
        defense: 'Vontade',
        init: 'AST',
    },
});

export default AttributeEnum;
